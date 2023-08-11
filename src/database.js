const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config();

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

function getConnection() {
  return mysql.createConnection(dbConfig);
}

module.exports = {
  getConnection,
};
