require("dotenv").config();
const express = require("express");
const router = express.Router();

const {
  createNewcategory,
  getAllcategory,
  findbycategory,
  deletecategory,
  updatecategory,
} = require("../controllers/category");

//PUT request to create new
router.put("/create", createNewcategory);
// GET request to get/find all
router.get("/allcategory", getAllcategory);

//getbyid
router.put("/:category", findbycategory);

//delete
router.delete("/delete", deletecategory);

//update
router.patch("/update", updatecategory);

module.exports = router;
