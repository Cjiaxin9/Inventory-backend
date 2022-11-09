require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  port: "5432",
  user: "db_user",
  password: "123456",
  database: "vendingnation",
});

client.connect((err) => {
  if (err) {
    console.error("connection error", err.stack);
  } else {
    console.log("connected");
  }
});

// app.get("/", (req, res) => {
//   res.send("hello");
// });

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});

app.get("/", (request, response) => {
  client.query("SELECT * FROM student", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
});

// create table

client.query(
  "CREATE TABLE session(sessionguid UUID NOT NULL, created text NOT NULL, sessionlife integer NOT NULL)",
  (err, res) => {
    console.log(err, res);
    client.end();
  }
);
