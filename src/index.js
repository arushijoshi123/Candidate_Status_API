var mysql = require("mysql");
const db = require("./database");
const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

const userRouter = require("./routes/user");
const port = process.env.PORT || 3000;

app.use("/user", userRouter);
app.get("/", (req, res) => {
  res.send("MYSQL WITH NODE TASK ");
});

//mysql database connection
const con = db.getConnection();
con.connect((error) => {
  if (error) {
    console.error("Database connection failed:", error);
    res.status(500).json({ error: "Internal server error" });
    return;
  } else {
    console.log("Database connected successfully !");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }
});
