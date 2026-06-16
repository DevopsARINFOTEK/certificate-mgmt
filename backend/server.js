const express = require("express");
const cors = require("cors");
const pool = require("./db/db");

const app = express();

app.use(cors());
app.use(express.json());

pool.query("SELECT NOW()")
  .then(() => {
    console.log(
      "PostgreSQL Connected"
    );
  })
  .catch((err) => {
    console.error(
      "Database Error:",
      err.message
    );
  });

app.use(
  "/api/certificates",
  require("./routes/certificateRoutes")
);

app.listen(5000, () => {
  console.log(
    "Server running on port 5000"
  );
});