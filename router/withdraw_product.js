require("dotenv").config();
const express = require("express");
const router = express.Router();

//puchase order page
const {
  createNewwithdrawProduct,
  getAllWP,
  findbyid,
  deletewihdrawproduct,
  updatewithdrawproduct,
} = require("../controllers/withdraw_product");

//PUT request to create new puchase order
router.put("/create", createNewwithdrawProduct);

// GET request to get/find all puchase order
router.get("/allwithdrawproduct", getAllWP);

//getbyid
router.put("/:id", findbyid);

//delete
router.delete("/delete", deletewihdrawproduct);

//update
router.patch("/update", updatewithdrawproduct);

module.exports = router;
