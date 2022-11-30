require("dotenv").config();
const express = require("express");
const router = express.Router();

//puchase order page
const {
  createNewstockinProduct,
  getAllstockin,
  findbyid,
  deletestockinproduct,
  updatestockinproduct,
} = require("../controllers/stockin_product");

//PUT request to create new puchase order
router.put("/create", createNewstockinProduct);

// GET request to get/find all puchase order
router.get("/allstockinproduct", getAllstockin);

//getbyid
router.put("/:id", findbyid);

//delete
router.delete("/delete", deletestockinproduct);

//update
router.patch("/update", updatestockinproduct);

module.exports = router;
