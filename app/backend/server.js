require("dotenv").config();
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "worldskills-aircraft-maintenance"
});

db.connect(err => {
  if (err) console.error("Database connection failed: ", err);
  else console.log("Connected to MySQL database");
});

// **Login Route**
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const sql = "SELECT * FROM users WHERE username = ?";
  db.query(sql, [username], (err, result) => {
    if (err) return res.status(500).json({ message: "Server error" });

    if (result.length > 0) {
      const user = result[0];

      const isMatch = bcrypt.compare(password, user.password);
      if (isMatch) {
        const token = jwt.sign({ id: user.user_id, username: user.username,  role: user.user_role, passwordReset:user.password_reset}, "secretKey", { expiresIn: "3h" });
        res.json({ message: "Login successful", token });
      } else {
        res.json({ message: "Invalid credentials" });
      }
    } else {
      res.json({ message: "User not found" });
    }
  });
});

//** Server Requests Relating To Parts and Consumable Requests **
// **Get All Parts and Consumable Requests**
app.get("/get-parts-consumable-requests", (req, res) => {
  const sql = `
    SELECT 
      pcr.request_id, 
      pcr.user_id, 
      CONCAT(u.user_fname, ' ', u.user_lname) AS user_name, 
      pcr.aca_number, 
      pcr.work_summary_order_id, 
      pcr.task_card_id, 
      pcr.items,
      COALESCE(pcr.request_date, '1970-01-01 00:00:00') AS request_date
    FROM parts_consumable_requests pcr
    JOIN users u ON pcr.user_id = u.user_id
  `;

  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching requests:", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res.json(results);
  });
});

//** Submit Parts and Consumable Request **
app.post("/submit-parts-consumable-request", (req, res) => {
  const data = req.body;

  const sql = `INSERT INTO parts_consumable_requests 
      (user_id, name, aca_number, work_summary_order_id, task_card_id, items)
      VALUES (?, ?, ?, ?, ?, ?)`;

  const values = [
    data.user_id,
    data.name,
    data.aca_number,
    data.work_order_summary_id,
    data.task_card_id,
    JSON.stringify(data.items)
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error submitting request:", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }

    res.json({ message: "Request Submitted Successfully", request_id: result.insertId });
  });
});

//** Load Parts and Consumable Request **
app.get("/load-parts-consumable-request", (req, res) => {
  const { request_id } = req.query;
  const sql = `SELECT * FROM parts_consumable_requests WHERE request_id = ?`;
  db.query(sql, [request_id], (err, result) => {
    if (err) {
      console.error("Error loading request:", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res.json(result[0]);
  });
});

//** Search All Parts and Consumable Requests **
app.get("/search-parts-consumable-requests", (req, res) => {
  const { searchType, searchInput } = req.query;
  let whereClause = "";
  let values = [];
  if (searchType === "user_name") {
    whereClause = "CONCAT(u.user_fname, ' ', u.user_lname) LIKE ?";
    values = [`%${searchInput}%`];
  } else {
    whereClause = `?? LIKE ?`;
    values = [searchType, `%${searchInput}%`];
  }
  const sql = `
    SELECT 
      pcr.request_id, 
      pcr.user_id, 
      CONCAT(u.user_fname, ' ', u.user_lname) AS user_name, 
      pcr.aca_number, 
      pcr.work_summary_order_id, 
      pcr.task_card_id, 
      pcr.items,
      COALESCE(pcr.request_date, '1970-01-01 00:00:00') AS request_date
    FROM parts_consumable_requests pcr
    JOIN users u ON pcr.user_id = u.user_id
    WHERE ${whereClause} 
  `;

  db.query(sql, values ,(err, results) => {
    if (err) {
      console.error("Error fetching requests:", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res.json(results);
  });
});

//** Server Request Relating To ATL Creation and Assignment **
// **Get All Users That Are Competitors That Don't Have ATLs Assigned To Them**
app.get("/get-competitors", (req, res) => {
  const sql = `SELECT u.user_id, CONCAT (u.user_fname, ' ', u.user_lname) AS name
                FROM users u
                LEFT JOIN document_binders db ON u.user_id = db.user_id
                WHERE u.user_role = 'Competitor'
                AND (db.binder_id IS NULL OR db.binder_status != 'In Progress')`;
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching competitors:", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res.json(results);
  });
});
// **Create New Document Binder**
app.post("/new-document-binder", (req, res) => {
  const {user_id} = req.body;
  const sql = "INSERT INTO document_binders (binder_status, user_id) VALUES (?,?)";
  const values = ["In Progress", user_id];
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error creating document binder:", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res.json({ message: "Document binder created successfully", binderId: result.insertId });
  });
});

// ** Server Requests Relating To Tool Calibration Records **/
// **New Tool Calibration Record**
app.post("/new-record", (req, res) => {
  const {Description, PartNumber, SerialNumber, CalibrationDate, CalibrationDueDate} = req.body;
  const sql = "INSERT INTO tool_calibration_records (description, part_number, serial_number, calibration_date, calibration_due_date) VALUES (?,?,?,?,?)";
  const values = [Description, PartNumber, SerialNumber, CalibrationDate, CalibrationDueDate];

  db.query(sql, values, (err, result) => {
    if (err) {
        console.error("Error inserting record:", err);
        return res.status(500).json({ message: "Database error", error: err });
    }
    res.status(201).json({ message: "Record added successfully", recordId: result.insertId });
  });

});
// **Load Tool Calibration Records**
app.get("/load-tool-calibration-records", (req, res) => {
  const sql = `SELECT calibration_id, description, part_number, serial_number, 
                  DATE_FORMAT(calibration_date, '%d/%m/%Y') AS calibration_date, 
                  DATE_FORMAT(calibration_due_date, '%d/%m/%Y') AS calibration_due_date
              FROM tool_calibration_records`;
  db.query(sql, (err, result) => {
    if (err) {
      console.error("Error loading records:", err);
      return res.status(500).json({ message: "Database error", error: err });
    }
    res.json(result);
  });
});

// **Search Tool Calibration Records**
app.get("/search-tool-calibration-records", (req, res) => {
  const { searchType, searchInput } = req.query;
  // Query the database with a LIKE search for partial matches
  const sql = `SELECT calibration_id, description, part_number, serial_number, 
                  DATE_FORMAT(calibration_date, '%d/%m/%Y') AS calibration_date, 
                  DATE_FORMAT(calibration_due_date, '%d/%m/%Y') AS calibration_due_date
               FROM tool_calibration_records
               WHERE ?? LIKE ?`;
  const values = [searchType, `%${searchInput}%`];

  db.query(sql, values, (err, results) => {
    if (err) {
      console.error("Error fetching records:", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res.json(results);
  });
});

app.get("/delete-tool-calibration-record", (req, res) => {
  const { calibration_id } = req.query;
  const sql = "DELETE FROM tool_calibration_records WHERE calibration_id = ?";
  db.query(sql, [calibration_id], (err, result) => {
    if (err) {
      console.error("Error deleting record:", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res.json({ message: "Record deleted successfully" });
  });
});

// ** Server Request Relating To Document Binders and Document Creation**
app.post("/submit-document-binder", (req, res) => {
  const { binder_id } = req.body;
  const sql = "UPDATE document_binders SET binder_status = 'Submitted' WHERE binder_id = ?";
  db.query(sql, [binder_id], (err, result) => {
    if (err) {
      console.error("Error updating document binder:", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res.json({ message: "Document binder updated successfully" });
  });
});
// **Get a Specific Document Binder By ID And Load The Documents Within**
app.get("/get-document-binder", (req, res) => {
  const {binder_id} = req.query;
  const sql = `SELECT 
                db.binder_id,
                CONCAT (u.user_fname, ' ', u.user_lname) AS user_name,
                db.binder_status, 
                d.document_id, 
                d.document_name, 
                d.document_type,
                GREATEST(
                  COALESCE(atl.last_updated, '1970-01-01 00:00:00'),
                  COALESCE(eow.last_updated, '1970-01-01 00:00:00'),
                  COALESCE(tc.last_updated, '1970-01-01 00:00:00'),
                  COALESCE(er.last_updated, '1970-01-01 00:00:00'),
                  COALESCE(sdr.last_updated, '1970-01-01 00:00:00'),
                  COALESCE(tdr.last_updated, '1970-01-01 00:00:00'),
                  COALESCE(wos.last_updated, '1970-01-01 00:00:00')
                ) AS last_updated
              FROM document_binders db
              JOIN users u ON db.user_id = u.user_id
              JOIN documents d ON db.binder_id = d.binder_id
              LEFT JOIN aircraft_technical_logs atl ON d.document_id = atl.document_id
              LEFT JOIN end_of_work_shift_reports eow ON d.document_id = eow.document_id
              LEFT JOIN task_cards tc ON d.document_id = tc.document_id
              LEFT JOIN engine_reports er ON d.document_id = er.document_id
              LEFT JOIN structural_damage_reports sdr ON d.document_id = sdr.document_id
              LEFT JOIN technical_dispatch_reports tdr ON d.document_id = tdr.document_id
              LEFT JOIN work_order_summaries wos ON d.document_id = wos.document_id
              WHERE db.binder_id = ?
              GROUP BY d.document_id`;
  const values = [binder_id];
  db.query(sql, values, (err, results) => {
    if(err) {
      console.error("Error loading document binder:", err);
      return res.status(500).json({message: "Internal Server Error"});
    }
    res.json(results);
  });
});
// ** Load User's In Progress Document Binders And Documents Within **/
app.get("/load-document-binder", (req, res) => {
  const {user_id} = req.query;
    const sql = `
      SELECT 
          db.binder_id,
          CONCAT (u.user_fname, ' ', u.user_lname) AS user_name, 
          db.binder_status, 
          d.document_id, 
          d.document_name, 
          d.document_type,
          GREATEST(
            COALESCE(atl.last_updated, '1970-01-01 00:00:00'),
            COALESCE(eow.last_updated, '1970-01-01 00:00:00'),
            COALESCE(tc.last_updated, '1970-01-01 00:00:00'),
            COALESCE(er.last_updated, '1970-01-01 00:00:00'),
            COALESCE(sdr.last_updated, '1970-01-01 00:00:00'),
            COALESCE(tdr.last_updated, '1970-01-01 00:00:00'),
            COALESCE(wos.last_updated, '1970-01-01 00:00:00')
          ) AS last_updated
      FROM document_binders db
      jOIN users u ON db.user_id = u.user_id
      JOIN documents d ON db.binder_id = d.binder_id
      LEFT JOIN aircraft_technical_logs atl ON d.document_id = atl.document_id
      LEFT JOIN end_of_work_shift_reports eow ON d.document_id = eow.document_id
      LEFT JOIN task_cards tc ON d.document_id = tc.document_id
      LEFT JOIN engine_reports er ON d.document_id = er.document_id
      LEFT JOIN structural_damage_reports sdr ON d.document_id = sdr.document_id
      LEFT JOIN technical_dispatch_reports tdr ON d.document_id = tdr.document_id
      LEFT JOIN work_order_summaries wos ON d.document_id = wos.document_id
      WHERE db.user_id = ? AND db.binder_status = 'In Progress'
      GROUP BY d.document_id`;
  const values = [user_id];
  db.query(sql, values, (err, results) => {
    if(err) {
      console.error("Error loading document binder:", err);
      return res.status(500).json({message: "Internal Server Error"});
    }
    res.json(results);
  });
});

// **Get All Document Binders**
app.get("/get-all-document-binders", (req, res) => {
  const sql = `
    SELECT  
        db.binder_id,
        CONCAT (u.user_fname, ' ', u.user_lname) AS user_name, 
        db.binder_status
    FROM document_binders db
    JOIN users u ON db.user_id = u.user_id
    GROUP BY db.binder_id`;
  db.query(sql, (err, results) => {
    if(err) {
      console.error("Error loading document binders:", err);
      return res.status(500).json({message: "Internal Server Error"});
    }
    res.json(results);
    });
  });

app.get("/search-document-binders", (req, res) => {
  const { searchType, searchInput } = req.query;
  let whereClause = "";
  let values = [];
  if (searchType === "user_name") {
    whereClause = "CONCAT(u.user_fname, ' ', u.user_lname) LIKE ?";
    values = [`%${searchInput}%`];
  } else {
    whereClause = `?? LIKE ?`;
    values = [searchType, `%${searchInput}%`];
  }
  const sql = `
    SELECT  
      db.binder_id,
      CONCAT(u.user_fname, ' ', u.user_lname) AS user_name, 
      db.binder_status
    FROM document_binders db
    JOIN users u ON db.user_id = u.user_id
    WHERE ${whereClause}
    GROUP BY db.binder_id`;
  db.query(sql, values, (err, results) => {
    if (err) {
      console.error("Error fetching searched document binders:", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res.json(results);
  });
});
  
// ** Server Requests Relating To Account Managment**
// **Get All Users**
app.get("/get-users", (req, res) => {
  const sql = `SELECT user_id, CONCAT(user_fname, ' ', user_lname) AS name, user_role,username FROM users GROUP BY user_id`;  
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching users:", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res.json(results);
  });
});

app.get("/search-users", (req, res) => {
  const { searchType, searchInput } = req.query;
  let sql = `
    SELECT user_id, 
           CONCAT(user_fname, ' ', user_lname) AS name, 
           user_role,
           username 
    FROM users 
    WHERE `;
  let values = [];

  if (searchType === "name") {
    sql += "CONCAT(user_fname, ' ', user_lname) LIKE ?";
    values = [`%${searchInput}%`];
  } else {
    // Whitelist valid search types to avoid SQL injection
    const allowedColumns = ["username", "user_id"];
    if (!allowedColumns.includes(searchType)) {
      return res.status(400).json({ message: "Invalid search type" });
    }

    sql += `${searchType} LIKE ?`;
    values = [`%${searchInput}%`];
  }

  sql += " GROUP BY user_id";

  db.query(sql, values, (err, results) => {
    if (err) {
      console.error("Error fetching searched users:", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res.json(results);
  });
});

app.post("/new-user", (req, res) => {
  const { user_fname, user_lname, username, password, user_role } = req.body;
  // Check if username already exists
  const checkUsernameSql = `SELECT * FROM users WHERE username = ?`;
  const checkUsernameValue = [username];
  db.query(checkUsernameSql, checkUsernameValue, (err, results) => {
    if (err) {
      console.error("Error checking username:", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }

    if (results.length > 0) {
      return res.status(400).json({ message: "Username already exists" });
    }

    // If username is unique, proceed with insertion
    const sql = `INSERT INTO users (user_fname, user_lname, username, password, user_role) VALUES (?, ?, ?, ?, ?)`;
    const values = [
      user_fname,
      user_lname,
      username,
      password,
      user_role,
    ];

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error("Error creating user:", err);
        return res.status(500).json({ message: "Internal Server Error" });
      }
      res.json({ message: "User created successfully" });
    });
  });
});


app.post("/delete-user", (req, res) => {
  const {user_id} = req.query;
  const sql = `DELETE FROM users WHERE user_id = ?`;
  const values = [user_id];
  db.query(sql, values, (err, result) => {
    if(err) {
      console.error("Error deleting user:", err);
      return res.status(500).json({message: "Internal Server Error"});
    }
    res.json({message:"Deleted User Successfully"});
  });
});

app.get("/find-user-data", (req, res) => {
  const { user_id } = req.query;

  const sql = `
    SELECT user_id, user_fname, user_lname, user_role, username 
    FROM users 
    WHERE user_id = ?
  `;
  const values = [user_id];

  db.query(sql, values, (err, results) => {
    if (err) {
      console.error("Error fetching user:", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(results[0]);
  });
});


app.post("/update-user", (req, res) => {
  const {user_id, user_fname, user_lname, username, user_role} = req.body;

  // Check if the new username already exists for another user
  const checkUsernameSql = `SELECT * FROM users WHERE username = ? AND user_id != ?`;
  db.query(checkUsernameSql, [username, user_id], (err, results) => {
    if (err) {
      console.error("Error checking username:", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }

    if (results.length > 0) {
      return res.status(400).json({ message: "Username already in use by another user" });
    }

    // Proceed to update the user info (excluding password)
    const sql = `
      UPDATE users 
      SET user_fname = ?, user_lname = ?, username = ?, user_role = ?
      WHERE user_id = ?
    `;
    const values = [
      user_fname,
      user_lname,
      username,
      user_role,
      user_id
    ];

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error("Error updating user:", err);
        return res.status(500).json({ message: "Internal Server Error" });
      }

      res.json({ message: "User updated successfully" });
    });
  });
});

app.post("/reset-password", (req, res) => {
  const {user_id, password} = req.body;
  const sql = `UPDATE users SET password = ?, password_reset = TRUE WHERE user_id = ?`;
  const values = [password, user_id];
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error resetting user password:", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }

    res.json({ message: "Successfully reset user password" });
  });
});

app.post("/new-password", (req, res) => {
  const {user_id , password} = req.body;
  const sql = `UPDATE users SET password = ?, password_reset = FALSE WHERE user_id = ?`;
  const values = [password, user_id];
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error setting new user password:", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }

    res.json({ message: "Successfully added new user password" });
  });
})

// ** Server Request Relating to From Creation and Updating**
// **Create New Document**
app.post("/new-document", (req, res) => {
  const {binder_id , document_name , document_type} = req.body;
  const sql = "INSERT INTO documents (binder_id, document_name, document_type) VALUES (?,?,?)";
  const values = [binder_id,document_name,document_type];
  db.query(sql, values, (err, result) => {
    if(err) {
      console.error("Error creating document:", err);
      return res.status(500).json({message: "Internal Server Error"});
    }
    res.json({message:"Document created successfully", documentId: result.insertId});
  });
});

app.post("/create-document", (req, res) => {
  const { document_id, document_type, data } = req.body;
  let sql = "";
  let values = [];

  switch (document_type) {
    case "ATL":
      sql = `
      INSERT INTO aircraft_technical_logs (
          document_id, registration, captain, captain_signature, page_sequence,
          leg1_date, leg1_timeup, leg1_timedown, leg1_airtime, leg1_from, leg1_to,
          leg2_date, leg2_timeup, leg2_timedown, leg2_airtime, leg2_from, leg2_to,
          total_bftime, total_airtime, total_time, defects, reported_by, reported_date
      ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
    `;
    values = [
      document_id, data.registration, data.captain, data.captainSignature, data.pageSequence,
      data.leg1Date, data.leg1TimeUp, data.leg1TimeDown, data.leg1AirTime, data.leg1From, data.leg1To,
      data.leg2Date, data.leg2TimeUp, data.leg2TimeDown, data.leg2AirTime, data.leg2From, data.leg2To,
      data.totalBFTime, data.totalAirTime, data.totalTime, data.defects, data.reportedBy, data.reportedByDate,
    ];
    break;
  case "EOW":
    sql = `INSERT INTO end_of_work_shift_reports (document_id) VALUES (?)`;
    values = [document_id];
    break;
  case "TC":
    sql = `INSERT INTO task_cards (document_id) VALUES (?)`;
    values = [document_id];
    break;
  case "ER":
    sql = `INSERT INTO engine_reports (document_id) VALUES (?)`;
    values = [document_id];
    break;
  case "SDR":
    sql = `INSERT INTO structural_damage_reports (document_id) VALUES (?)`;
    values = [document_id];
    break;
  case "TDR":
    sql = `INSERT INTO technical_dispatch_reports (document_id) VALUES (?)`;
    values = [document_id];
    break;
  case "WOS":
    sql = `INSERT INTO work_order_summaries (document_id) VALUES (?)`;
    values = [document_id];
    break;
  default:
    return res.status(400).json({ message: "Invalid document type" });
  }
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error creating document:", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res.json({ message: "Document created successfully", documentId: result.insertId });
  });
});

app.delete("/delete-document", (req, res) => {
  const {document_id, document_type} = req.body;
  let sql = "";
  let values = [];
  switch (document_type) {
    case "ATL":
      sql = `DELETE FROM aircraft_technical_logs WHERE document_id = ?`;
      values = [document_id];
      break;
    case "EOW":
      sql = `DELETE FROM end_of_work_shift_reports WHERE document_id = ?`;
      values = [document_id];
      break;
    case "TC":
      sql = `DELETE FROM task_cards WHERE document_id = ?`;
      values = [document_id];
      break;
    case "ER":
      sql = `DELETE FROM engine_reports WHERE document_id = ?`;
      values = [document_id];
      break;
    case "SDR":
      sql = `DELETE FROM structural_damage_reports WHERE document_id = ?`;
      values = [document_id];
      break;
    case "TDR":
      sql = `DELETE FROM technical_dispatch_reports WHERE document_id = ?`;
      values = [document_id];
      break;
    case "WOS":
      sql = `DELETE FROM work_order_summaries WHERE document_id = ?`;
      values = [document_id];
      break;
    default:
      return res.status(400).json({ message: "Invalid document type" });
  }
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error deleting document:", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res.json({ message: "Document deleted successfully" });
  });
});

app.delete("/delete-document-from-binder", (req, res) => {
  const { document_id } = req.body;
  const sql = "DELETE FROM documents WHERE document_id = ?";
  db.query(sql, [document_id], (err, result) => {
    if (err) {
      console.error("Error deleting document:", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res.json({ message: "Document deleted successfully" });
  });
});

app.post("/edit-document-name", (req, res) => {
  const { document_id, document_name } = req.body;
  const sql = "UPDATE documents SET document_name = ? WHERE document_id = ?";
  db.query(sql, [document_name, document_id], (err, result) => {
    if (err) {
      console.error("Error updating document name:", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res.json({ message: "Document name updated successfully" });
  });
});

app.get("/get-document-data", (req, res) => {
  const { table, document_id } = req.query;
  const sql = `SELECT * FROM \`${table}\` WHERE document_id = ?`;
  db.query(sql, [document_id], (err, result) => {
    if (err) {
      console.error("Error fetching form data:", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res.json(result[0]);
  });
});

app.post("/update-document-data", (req, res) => {
  const { document_type, data } = req.body;
  let sql = "";
  let values = [];
  switch(document_type) {
    case "ATL":
      sql = `
        UPDATE aircraft_technical_logs SET
        registration = ?,
        captain = ?,
        captain_signature = ?,
        page_sequence = ?,
        leg1_date = ?,
        leg1_timeup = ?,
        leg1_timedown = ?,
        leg1_airtime = ?,
        leg1_from = ?,
        leg1_to = ?,
        leg2_date = ?,
        leg2_timeup = ?,
        leg2_timedown = ?,
        leg2_airtime = ?,
        leg2_from = ?,
        leg2_to = ?,
        total_bftime = ?,
        total_airtime = ?,
        total_time = ?,
        defects = ?,
        reported_by = ?,
        reported_date = ?,
        work_order_summary_number = ?,
        resolutions = ?,
        resolved_by = ?,
        resolved_date = ?,
        part_number = ?,
        serial_number_on = ?,
        serial_number_off = ?,
        batch_number = ?,
        deferral_number = ?,
        mel = ?,
        category = ?,
        function_check = ?,
        leak_check = ?,
        independent_check = ?,
        other_check = ?,
        independent_checkby = ?,
        independent_checkdate = ?,
        release_by = ?,
        release_date = ?
        WHERE document_id = ?`
      values = [
        data.registration,
        data.captain,
        data.captain_signature,
        data.page_sequence,
        data.leg1_date,
        data.leg1_timeup,
        data.leg1_timedown,
        data.leg1_airtime,
        data.leg1_from,
        data.leg1_to,
        data.leg2_date,
        data.leg2_timeup,
        data.leg2_timedown,
        data.leg2_airtime,
        data.leg2_from,
        data.leg2_to,
        data.total_bftime,
        data.total_airtime,
        data.total_time,
        data.defects,
        data.reported_by,
        data.reported_date,
        data.work_order_summary_number,
        data.resolutions,
        data.resolved_by,
        data.resolved_date,
        data.part_number,
        data.serial_number_on,
        data.serial_number_off,
        data.batch_number,
        data.deferral_number,
        data.mel,
        data.category,
        data.function_check,
        data.leak_check,
        data.independent_check,
        data.other_check,
        data.independent_checkby,
        data.independent_checkdate,
        data.release_by,
        data.release_date,
        data.document_id
      ];
      break;
    case "EOW":
      sql = `
        UPDATE end_of_work_shift_reports SET 
        aircraft = ?,
        date = ?,
        prepared_by = ?,
        steps_accomplished = ?,
        work_order_numbers = ?,
        task_card_ids = ?,
        remaining_steps = ?,
        difficulties = ?,
        no_difficulties = ?,
        signature_and_aca = ?
        WHERE document_id = ?`;
      values = [
        data.aircraft,
        data.date,
        data.prepared_by,
        data.steps_accomplished,
        data.work_order_numbers,
        data.task_card_ids,
        data.remaining_steps,
        data.difficulties,
        data. no_difficulties,
        data.signature_and_aca,
        data.document_id
      ];
      break;
    case "TC":
      sql = `
        UPDATE task_cards SET
        tc_number = ?,
        ata_chapter = ?,
        title = ?,
        aircraft_type = ?,
        registration = ?,
        serial_number = ?,
        work_order_number = ?,
        total_airframe_time = ?,
        airframe_cycles = ?,
        originated_by = ?,
        date_opened = ?,
        defect_description = ?,
        deferred_previously = ?,
        page_sequence_number = ?,
        resolution_description = ?,
        attached_supporting_docs = ?,
        defect_deferred = ?,
        defer_category_type_mel = ?,
        defer_category_type_non_mel = ?,
        mel_id = ?,
        mel_category = ?,
        mel_due_date = ?,
        mel_due_time = ?,
        function_check_yes = ?,
        function_check_no = ?,
        fc_systems_affected = ?,
        fc_detailed_on_tc = ?,
        leak_check_yes = ?,
        leak_check_no = ?,
        lc_systems_affected = ?,
        lc_detailed_on_tc = ?,
        other_check_yes = ?,
        other_check_no = ?,
        oc_systems_affected = ?,
        oc_detailed_on_tc = ?,
        ic_required_yes = ?,
        ic_required_no = ?,
        post_maintenance_inspection = ?,
        independent_check_by = ?,
        tc_certified_by = ?,
        tc_certified_date = ?,
        tc_certified_time = ?,
        subject_to_test_flight = ?,
        checks_during_test_flight = ?
        WHERE document_id = ?`;
      values = [
        data.tc_number,
        data.ata_chapter,
        data.title,
        data.aircraft_type,
        data.registration,
        data.serial_number,
        data.work_order_number,
        data.total_airframe_time,
        data.airframe_cycles,
        data.originated_by,
        data.date_opened,
        data.defect_description,
        data.deferred_previously,
        data.page_sequence_number,
        data.resolution_description,
        data.attached_supporting_docs,
        data.defect_deferred,
        data.defer_category_type_mel,
        data.defer_category_type_non_mel,
        data.mel_id,
        data.mel_category,
        data.mel_due_date,
        data.mel_due_time,
        data.function_check_yes,
        data.function_check_no,
        data.fc_systems_affected,
        data.fc_detailed_on_tc,
        data.leak_check_yes,
        data.leak_check_no,
        data.lc_systems_affected,
        data.lc_detailed_on_tc,
        data.other_check_yes,
        data.other_check_no,
        data.oc_systems_affected,
        data.oc_detailed_on_tc,
        data.ic_required_yes,
        data.ic_required_no,
        data.post_maintenance_inspection,
        data.independent_check_by,
        data.tc_certified_by,
        data.tc_certified_date,
        data.tc_certified_time,
        data.subject_to_test_flight,
        data.checks_during_test_flight,
        data.document_id
      ];
      break;
    case "ER":
      sql = `
        UPDATE engine_reports SET
        engine_type = ?,
        serial_number = ?,
        engine_running_hours = ?,
        work_order_number = ?,
        task_card_id = ?,
        date_submitted = ?,
        damage_type = ?,
        damage_dimension_length = ?,
        damage_dimension_width = ?,
        damage_dimension_depth = ?,
        damaged_item = ?,
        damaged_part_number = ?,
        damaged_serial_number = ?,
        damage_description = ?,
        damage_drawing = ?,
        prepared_by = ?,
        reviewed_by = ?
        WHERE document_id = ?`
      values = [
        data.engine_type,
        data.serial_number,
        data.engine_running_hours,
        data.work_order_number,
        data.task_card_id,
        data.date_submitted,
        data.damage_type,
        data.damage_dimension_length,
        data.damage_dimension_width,
        data.damage_dimension_depth,
        data.damaged_item,
        data.damaged_part_number,
        data.damaged_serial_number,
        data.damage_description,
        JSON.stringify(data.damage_drawing),
        data.prepared_by,
        data.reviewed_by,
        data.document_id
      ];
      break;
    case "SDR":
      sql = `
        UPDATE structural_damage_reports SET
        aircraft_type = ?,
        registration = ?,
        serial_number = ?,
        date_submitted = ?,
        total_airframe_time = ?,
        airframe_cycles = ?,
        work_order_number = ?,
        task_card_id = ?,
        damage_type = ?,
        damage_type_other = ?,
        damage_position_station = ?,
        damage_position_waterline = ?,
        damage_position_buttockline = ?,
        damage_position_buttockline_lh = ?,
        damage_position_buttockline_rh = ?,
        damage_dimension_length  = ?,
        damage_dimension_width = ?,
        damage_dimension_depth = ?,
        damaged_part_number = ?,
        damaged_serial_number = ?,
        damaged_tsn = ?,
        damaged_description = ?,
        mechanism = ?,
        damage_drawing = ?,
        prepared_by = ?,
        reviewed_by = ?
        WHERE document_id = ?`;
      values = [
        data.aircraft_type,
        data.registration,
        data.serial_number,
        data.date_submitted,
        data.total_airframe_time,
        data.airframe_cycles,
        data.work_order_number,
        data.task_card_id,
        data.damage_type,
        data.damage_type_other,
        data.damage_position_station,
        data.damage_position_waterline,
        data.damage_position_buttock_line,
        data.damage_position_buttock_line_lh,
        data.damage_position_buttock_line_rh,
        data.damage_dimension_length ,
        data.damage_dimension_width,
        data.damage_dimension_depth,
        data.damaged_part_number,
        data.damaged_serial_number,
        data.damaged_tsn,
        data.damaged_description,
        data.mechanism,
        JSON.stringify(data.damage_drawing),
        data.prepared_by,
        data.reviewed_by,
        data.document_id
      ];
      break;
    case "TDR-P2":
      sql = `
        UPDATE technical_dispatch_reports SET
        maintenance_description = ?,
        limitation_date = ?,
        limitation_total_air_time = ?,
        limitation_cycles = ?,
        airworthiness_directive_numbers = ?,
        airworthiness_directive_description = ?,
        other_tasks = ?,
        prepared_by = ?
        WHERE document_id = ?`;
      values = [
        data.maintenance_description,
        data.limitation_date,
        data.limitation_total_air_time,
        data.limitation_cycles,
        data.airworthiness_directive_numbers,
        data.airworthiness_directive_description,
        data.other_tasks,
        data.prepared_by,
        data.document_id
      ];
      break;
    case "TDR":
      sql = `
        UPDATE technical_dispatch_reports SET
        registration = ?,
        total_air_time = ?,
        date = ?,
        defect_rows = ?
        WHERE document_id = ?`;
      values = [
        data.registration,
        data.total_air_time,
        data.date,
        JSON.stringify(data.defect_rows),
        data.document_id
      ];
      break;
    case "WOS":
      sql = `
        UPDATE work_order_summaries SET
        work_order_summary_number = ?,
        subject = ?,
        summary_page_part1 = ?,
        summary_page_part2 = ?,
        aircraft_type = ?,
        registration = ?,
        serial_number = ?,
        total_task_cards = ?,
        total_airframe_time = ?,
        total_cycles = ?,
        opened_by = ?,
        date_opened = ?,
        task_cards_included_rows = ?
        WHERE document_id = ?`;
      values = [
        data.work_order_summary_number,
        data.subject,
        data.summary_page_part1,
        data.summary_page_part2,
        data.aircraft_type,
        data.registration,
        data.serial_number,
        data.total_task_cards,
        data.total_airframe_time,
        data.total_cycles,
        data.opened_by,
        data.date_opened,
        JSON.stringify(data.task_cards_included_rows),
        data.document_id
      ];
      break;
      case "WOS-P2":
      sql = `
        UPDATE work_order_summaries SET
        followon_maintenance_checks_yes = ?,
        followon_maintenance_checks_na = ?,
        testflight_requirements_yes = ?,
        testflight_requirements_na = ?,
        deferred_defects_yes = ?,
        wos_affixed_yes = ?,
        date = ?,
        time = ?,
        technical_log_page_sequence_number = ?,
        closed_by = ?,
        subject_to_test_flight = ?
        WHERE document_id = ?`;
      values = [
        data.followon_maintenance_checks_yes,
        data.followon_maintenance_checks_na,
        data.testflight_requirements_yes,
        data.testflight_requirements_na,
        data.deferred_defects_yes,
        data.wos_affixed_yes,
        data.date,
        data.time,
        data.technical_log_page_sequence_number,
        data.closed_by,
        data.subject_to_test_flight,
        data.document_id
      ];
      break;
    default:
      return res.status(400).json({ message: "Invalid document type" });
  }
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error updating document:", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res.json({ message: "Document updated successfully" });
  });

});



// **Start Server**
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
