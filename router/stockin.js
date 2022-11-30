require("dotenv").config();
const express = require("express");
const router = express.Router();
// const auth = require("../middleware/auth");

//puchase order page
const {
  createNewstockin,
  getAllstockin,
  findbyid,
  deletestockin,
  updatestockin,
} = require("../controllers/stockin");

//PUT request to create new puchase total
router.put("/create", createNewstockin);
// GET request to get/find all puchase order
router.get("/allstockin", getAllstockin);

//getbyid
router.put("/:id", findbyid);

//delete
router.delete("/delete", deletestockin);

//update -change and location
router.patch("/update", updatestockin);

module.exports = router;
