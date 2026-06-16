const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "arinfotek",
  password: "1234",
  port: 5432,
});

pool.connect((err) => {
  if (err) {
    console.error("Database Error:", err.message);
  } else {
    console.log("PostgreSQL Connected");
  }
});

module.exports = pool;