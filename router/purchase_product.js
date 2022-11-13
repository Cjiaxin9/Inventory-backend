require("dotenv").config();
const express = require("express");
const router = express.Router();

//puchase order page
const {
  createNewPurchaseProduct,
  getAllPP,
  findbyid,
  deletePurchaseproduct,
  updatePurchaseproduct,
} = require("../controllers/purchase_product");

//PUT request to create new puchase order
router.put("/create", createNewPurchaseProduct);

// GET request to get/find all puchase order
router.get("/allpurchaseproduct", getAllPP);

//getbyid
router.put("/:id", findbyid);

//delete
router.delete("/delete", deletePurchaseproduct);

//update
router.patch("/update", updatePurchaseproduct);

module.exports = router;
