require("dotenv").config();
const express = require("express");
const router = express.Router();

//puchase order page
const {
  createNewPurchaseOrder,
  getAllPO,
  findbyid,
  deletePurchaseOrder,
  updatePurchaseOrder,
} = require("../controllers/purchase");

//PUT request to create new puchase order
router.put("/create", createNewPurchaseOrder);

//GET request to get/find all puchase order
router.get("/allpurchaseorder", getAllPO);

//getbyid
router.put("/:id", findbyid);

//delete
router.delete("/delete", deletePurchaseOrder);

//update
router.patch("/update", updatePurchaseOrder);

module.exports = router;
