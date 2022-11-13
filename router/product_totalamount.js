require("dotenv").config();
const express = require("express");
const router = express.Router();

//puchase order page
const {
  createNewPurchaseTotal,
  getAllPT,
  findbyid,
  deletePurchaseTotal,
  updatePurchaseTotal,
} = require("../controllers/product_totalamount");

//PUT request to create new puchase total
router.put("/create", createNewPurchaseTotal);
// GET request to get/find all puchase order
router.get("/allpurchaseproduct", getAllPT);

//getbyid
router.put("/:id", findbyid);

//delete
router.delete("/delete", deletePurchaseTotal);

//update
router.patch("/update", updatePurchaseTotal);

module.exports = router;
