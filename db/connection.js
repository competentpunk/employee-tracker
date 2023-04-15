require("dotenv").config();
const mysql = require("mysql2");
console.log(process.env);

const connection = mysql.createConnection({
  host: "localhost",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 3306,
  database: "employee_tracker_db",
});

connection.connect((err) => (err ? console.error(err) : null));

module.export=connection