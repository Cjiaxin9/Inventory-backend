require("dotenv").config();
const express = require("express");
const router = express.Router();

const {
  createNewlocation,
  getAlllocation,
  findbylocation,
  deletelocation,
  updatelocation,
} = require("../controllers/location");

//PUT request to create new
router.put("/create", createNewlocation);
// GET request to get/find all
router.get("/alllocation", getAlllocation);

//getbyid
router.put("/:location", findbylocation);

//delete
router.delete("/delete", deletelocation);

//update
router.patch("/update", updatelocation);

module.exports = router;
