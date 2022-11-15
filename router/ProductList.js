require("dotenv").config();
const express = require("express");
const router = express.Router();

//stockbalance page
const {
  createNewProductList,
  getAllProductList,
  findbyProductList,
  deleteProductList,
  updateProductList,
} = require("../controllers/ProductList");

//PUT request to create new
router.put("/create", createNewProductList);
// GET request to get/find all
router.get("/allproductlist", getAllProductList);

//getbyid
router.put("/:product_name", findbyProductList);

//delete
router.delete("/delete", deleteProductList);

//update
router.patch("/update", updateProductList);

module.exports = router;
