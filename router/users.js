require("dotenv").config();
const express = require("express");
const router = express.Router();
// const auth = require("../middleware/auth");

//login page
const {
  createUser,
  refresh,
  login,
  getAllUsers,
  updateuser,
  deleteuser,
} = require("../controllers/users");

//POST request to login
router.post("/login", login);

//POST request to refresh to get the new access token if the user has already login and have the refresh token
router.post("/refresh", refresh);

//PUT request to create new user
router.put("/create", createUser);

// router.get("/allusers", auth, getAllUsers);

//GET request to get/find all users
router.get("/allusers", getAllUsers);

router.patch("/update", updateuser);

router.delete("/delete", deleteuser);

module.exports = router;
