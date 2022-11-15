require("dotenv").config();
const express = require("express");
const router = express.Router();

//stockbalance page
const {
  createNewCompany,
  getAllCompany,
  findbycompany,
  deleteCompany,
  updateCompany,
} = require("../controllers/company");

//PUT request to create new
router.put("/create", createNewCompany);
// GET request to get/find all
router.get("/allcompany", getAllCompany);

//getbyid
router.put("/:company", findbycompany);

//delete
router.delete("/delete", deleteCompany);

//update
router.patch("/update", updateCompany);

module.exports = router;
