const mysql = require("mysql");
const db = require("../database");

// Function to add a new user

const addUser = (req, res) => {
  try {
    const { uid, name } = req.body;

    const con = db.getConnection();
    const query = "INSERT INTO usertable (uid, name) VALUES (?, ?)";

    con.connect((error) => {
      if (error) {
        console.error("Database connection failed:", error);
        res.status(500).json({ error });
        return;
      }

      con.query(query, [uid, name], (error, result) => {
        if (error) {
          console.error("Error executing query:", error);
          res.status(500).json({ error });
        } else {
          res.json({
            message: "User added successfully",
            result,
          });
        }

        con.end();
      });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const addCandidate = (req, res) => {
  try {
    const { uid, CandidateName } = req.body;
    const con = db.getConnection();
    const query =
      "INSERT INTO candidatetable (uid, CandidateName) VALUES (?, ?)";

    con.connect((error) => {
      if (error) {
        console.error("Database connection failed:", error);
        res.status(500).json({ error });
        return;
      }

      con.query(query, [uid, CandidateName], (error, result) => {
        if (error) {
          console.error("Error executing query:", error);
          res.status(500).json({ error });
        } else {
          res.json({
            message: "Candidate added successfully",
            result,
          });
        }

        con.end();
      });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateStatus = (req, res) => {
  try {
    const { cid, status } = req.body;
    const con = db.getConnection();
    const query =
      "INSERT INTO candidatestatustable (cid, status) VALUES (?, ?)";

    con.connect((error) => {
      if (error) {
        console.error("Database connection failed:", error);
        res.status(500).json({ error });
        return;
      }

      con.query(query, [cid, status], (error, result) => {
        if (error) {
          console.error("Error executing query:", error);
          res.status(500).json({ error });
        } else {
          res.json({
            message: "Candidate status updated successfully",
            result,
          });
        }

        con.end();
      });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const fetchStatus = async (req, res) => {
  try {
    const { uid } = req.body;
    const con = db.getConnection();

    const query = `
      SELECT
        u.uid AS Uid,
        COUNT(c.cid) AS TotalCandidates,
        SUM(CASE WHEN cs.status = 'joined' THEN 1 ELSE 0 END) AS Joined,
        SUM(CASE WHEN cs.status = 'interview' THEN 1 ELSE 0 END) AS Interview
      FROM
        usertable u
      JOIN
        candidatetable c ON u.uid = c.uid
      LEFT JOIN
        candidatestatustable cs ON c.cid = cs.cid
      WHERE
        u.uid = ?
      GROUP BY
        u.uid;
    `;

    con.connect((error) => {
      if (error) {
        console.error("Database connection failed:", error);
        res.status(500).json({ error });
        return;
      }

      con.query(query, [uid], (error, results) => {
        if (error) {
          console.error("Error executing query:", error);
          res.status(500).json({ error });
        } else {
          if (results.length === 0) {
            return res.status(404).json({ error: "User not found" });
          }

          const statusCounts = {
            Uid: results[0].Uid,
            TotalCandidates: results[0].TotalCandidates,
            Joined: results[0].Joined,
            Interview: results[0].Interview,
          };

          res.json({ message: "Status fetched successfully !!", statusCounts });
        }

        con.end();
      });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  addUser,
  addCandidate,
  updateStatus,
  fetchStatus,
};
