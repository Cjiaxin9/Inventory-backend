require("dotenv").config();
const express = require("express");
const router = express.Router();

//stockbalance page
const {
  createNewrole,
  getAllrole,
  findbyrole,
  deleterole,
  updaterole,
} = require("../controllers/role");

//PUT request to create new
router.put("/create", createNewrole);
// GET request to get/find all
router.get("/allrole", getAllrole);

//getbyid
router.put("/:role", findbyrole);

//delete
router.delete("/delete", deleterole);

//update
router.patch("/update", updaterole);

module.exports = router;
