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
        const token = jwt.sign({ id: user.id, username: user.username,  role: user.user_role, passwordReset:user.password_reset}, "secretKey", { expiresIn: "1h" });
        res.json({ message: "Login successful", token });
      } else {
        res.json({ message: "Invalid credentials" });
      }
    } else {
      res.json({ message: "User not found" });
    }
  });
});

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
  const sql = `SELECT description, part_number, serial_number, 
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
  const sql = `SELECT description, part_number, serial_number, 
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

// **Load User's Document Binder**
app.get("/get-user-document-binder", (req, res) => {
  const {user_id} = req.body;
  const sql = "SELECT * FROM document_binders WHERE user_id = ?";
  const values = [user_id];
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error loading document binder:", err);
      return res.status(500).json({ message: "Database error", error: err });
    }
    res.json(result);
  });
});

// **Get a Specific Document Binder By ID**
app.get("get-document-binder", (req, res) => {
  const {binder_id} = req.body;
  const sql = "SELECT * FROM document_binders WHERE binder_id = ?";
  const values = [binder_id];
  db.query(sql, values, (err, results) => {
    if(err) {
      console.error("Error loading document binder")
    }
  })
}) 

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

// **Create New Aircraft Technical Log**
app.post("/create-atl", (req, res) => {
  const {
      documentId, registration, captain, captainSignature, pageSequence,
      leg1Date, leg1TimeUp, leg1TimeDown, leg1AirTime, leg1From, leg1To,
      leg2Date, leg2TimeUp, leg2TimeDown, leg2AirTime, leg2From, leg2To,
      totalBFTime, totalAirTime, totalTime, defects, reportedBy, reportedByDate
  } = req.body;

  const sql = `
      INSERT INTO aircraft_technical_logs (
          document_id, registration, captain, captain_signature, page_sequence,
          leg1_date, leg1_timeup, leg1_timedown, leg1_airtime, leg1_from, leg1_to,
          leg2_date, leg2_timeup, leg2_timedown, leg2_airtime, leg2_from, leg2_to,
          total_bftime, total_airtime, total_time, defects, reported_by, reported_date,
      ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
  `;

  const values = [
      documentId, registration, captain, captainSignature, pageSequence,
      leg1Date, leg1TimeUp, leg1TimeDown, leg1AirTime, leg1From, leg1To,
      leg2Date, leg2TimeUp, leg2TimeDown, leg2AirTime, leg2From, leg2To,
      totalBFTime, totalAirTime, totalTime, defects, reportedBy, reportedByDate,
  ];

  db.query(sql, values, (err, result) => {
      if (err) {
          console.error("Error inserting new ATL:", err);
          return res.status(500).json({ message: "Internal Server Error" });
      }
      res.json({ message: "New ATL created successfully", atlId: result.insertId });
  });
});

// **Create New Form
const allowedTables = [
  'work_order_summaries',
  'engine_reports',
  'technical_dispatch_reports',
  'structure_damage_reports',
  'task_cards',
  'end_of_work_shift_reports',
  'aircraft_technical_logs'
];

app.post("/create-new-form", (req, res) => {
  const {table, documentId} = req.body;
  if(!table || !documentId) {
    return res.status(400).json({success: false, message: "Table name and document ID are required"});
  };

  if(!allowedTables.includes(table)) {
    return res.status(400).json({success: false, message: "Invalid table name"});
  };

  const sql = `INSERT INTO \`${table}\` (document_id) VALUES (?)`;
  db.query(sql, [documentId], (err, result) => {
    if(err) {
      return res.status(500).json({ success: false, message: err.message });
    }
    res.json({ success: true, message: 'Document ID inserted successfully.' });
  });
});

app.get("/get-form-data", (req, res) => {
  const { table, documentId } = req.query; // Use req.query for GET requests

  if (!table || !documentId) {
    return res.status(400).json({ success: false, message: "Table name and document ID are required" });
  }

  if (!allowedTables.includes(table)) {
    return res.status(400).json({ success: false, message: "Invalid table name" });
  }

  const sql = `SELECT * FROM \`${table}\` WHERE document_id = ?`;
  db.query(sql, [documentId], (err, result) => {
    if (err) {
      console.error("Error loading document:", err);
      return res.status(500).json({ message: "Database error", error: err });
    }
    res.json(result);
  });
});

// **Update Forms Requests**
app.post("/update-end-of-work-shift-report", (req, res) => {
  const {
    id,
    aircraft,
    date,
    prepared_by,
    steps_accomplished,
    work_order_numbers,
    task_card_ids,
    remaining_steps,
    difficulties,
    no_difficulties,
    signature_and_aca
  } = req.body;

  // Log the received ID for debugging
  console.log("Received ID:", id);

  // Validate the ID
  if (!id) {
    return res.status(400).json({ message: "Document ID is required" });
  }

  // Correct SQL query with backticks around table name
  const sql = `
    UPDATE \`end_of_work_shift_reports\`
    SET aircraft = ?, date = ?, prepared_by = ?, steps_accomplished = ?,
        work_order_numbers = ?, task_card_ids = ?, remaining_steps = ?,
        difficulties = ?, no_difficulties = ?, signature_and_aca = ?
    WHERE document_id = ?
  `;

  const values = [
    aircraft,
    date,
    prepared_by,
    steps_accomplished,
    work_order_numbers,
    task_card_ids,
    remaining_steps,
    difficulties,
    no_difficulties,
    signature_and_aca,
    id
  ];

  // Execute the SQL query
  db.query(sql, values, (err, result) => {
    if (err) {
      // Log more detailed error information
      console.error("SQL Error:", err.code, err.sqlMessage, err.stack);
      return res.status(500).json({ message: "Internal Server Error", error: err });
    }

    // Log the result for debugging
    console.log("Update Result:", result);

    // Check if any row was affected
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "No record found with the given ID" });
    }

    return res.status(200).json({ message: "Document updated successfully" });
  });
});

app.post("update-atl", (req,res) => {
  const {
    id,
    page_sequence,
    work_order_summary_number,
    resolutions,
    resolved_by,
    resolved_date,
    part_number,
    serial_number_on,
    serial_number_off,

  } = req.body
})



// **Start Server**
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
