require("dotenv").config;
const express = require("express");
const cors = require("cors");
const client = require("./db/db");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//app listener Port
const PORT = process.env.PORT || 5001;

// app.get("/", (request, response) => {
//   client.query("SELECT * FROM student", (error, results) => {
//     if (error) {
//       throw error;
//     }
//     response.status(200).json(results.rows);
//   });
// });

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});

// for Login
const users = require("./router/users");
app.use("/users", users);
