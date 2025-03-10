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
        const token = jwt.sign({ id: user.id, username: user.username,  role: user.user_role}, "secretKey", { expiresIn: "1h" });
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

// **Get All Users That Are Competitors For ATL Assignment**
app.get("/get-competitors", (req, res) => {
  const sql = "SELECT user_id , CONCAT(user_fname, ' ' , user_lname) AS name FROM users WHERE user_role = 'Competitor'";
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

// **Get A User's Document Binder**
app.get("/get-document-binder", (req, res) => {

});

// **Create New Aircraft Technical Log**
app.post("/new-atl", (req, res) => {
  const {
      binderId, registration, captain, captainSignature, pageSequence,
      leg1Date, leg1TimeUp, leg1TimeDown, leg1AirTime, leg1From, leg1To,
      leg2Date, leg2TimeUp, leg2TimeDown, leg2AirTime, leg2From, leg2To,
      totalBFTime, totalAirTime, totalTime, defects, reportedBy, reportedByDate,
      workOrderSummary, resolutions, resolvedBy, resolvedByDate,
      partNumber, serialNumberOn, serialNumberOff, batchNumber,
      deferralNumber, mel, category, functionCheck, leakCheck, independentCheck, 
      otherCheck, independentCheckBy, independentCheckByDate, readyForReleaseBy, readyForReleaseByDate
  } = req.body;

  const sql = `
      INSERT INTO \`aircraft-technical-logs\` (
          binder_id, registration, captain, captain_signature, page_sequence,
          leg1_date, leg1_timeup, leg1_timedown, leg1_airtime, leg1_from, leg1_to,
          leg2_date, leg2_timeup, leg2_timedown, leg2_airtime, leg2_from, leg2_to,
          total_bftime, total_airtime, total_time, defects, reported_by, reported_date,
          work_order_summary_number, resolutions, resolved_by, resolved_date,
          part_number, serial_number_on, serial_number_off, batch_number,
          deferral_number, mel, category, function_check, leak_check, independent_check, 
          other_check, independent_checkby, independent_checkdate, release_by, release_date
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
      binderId, registration, captain, captainSignature, pageSequence,
      leg1Date, leg1TimeUp, leg1TimeDown, leg1AirTime, leg1From, leg1To,
      leg2Date, leg2TimeUp, leg2TimeDown, leg2AirTime, leg2From, leg2To,
      totalBFTime, totalAirTime, totalTime, defects, reportedBy, reportedByDate,
      workOrderSummary, resolutions, resolvedBy, resolvedByDate,
      partNumber, serialNumberOn, serialNumberOff, batchNumber,
      deferralNumber, mel, category, functionCheck, leakCheck, independentCheck, 
      otherCheck, independentCheckBy, independentCheckByDate, readyForReleaseBy, readyForReleaseByDate
  ];

  db.query(sql, values, (err, result) => {
      if (err) {
          console.error("Error inserting new ATL:", err);
          return res.status(500).json({ message: "Internal Server Error" });
      }
      res.json({ message: "New ATL created successfully", atlId: result.insertId });
  });
});


// **Start Server**
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
