require("dotenv").config();
const express = require("express");
const router = express.Router();

//stockbalance page
const {
  createNewunit,
  getAllunit,
  findbyunit,
  deleteunit,
  updateunit,
} = require("../controllers/unit");

//PUT request to create new
router.put("/create", createNewunit);
// GET request to get/find all
router.get("/allunit", getAllunit);

//getbyid
router.put("/:unit", findbyunit);

//delete
router.delete("/delete", deleteunit);

//update
router.patch("/update", updateunit);

module.exports = router;
