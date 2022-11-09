require("dotenv").config();
// const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();
// const client = require("./db/db");

const {
  createUser,
  refresh,
  login,
  getAllUsers,
} = require("../controllers/users");

router.post("/login", login);

router.post("/refresh", refresh);

router.put("/create", createUser);

router.get("/allusers", getAllUsers);

module.exports = router;
