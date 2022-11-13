require("dotenv").config();
const express = require("express");
const router = express.Router();

//stockbalance page
const {
  createNewstockbalance,
  getAllstockbalance,
  findbyid,
  deletestockbalance,
  updatestockbalance,
} = require("../controllers/stock_balance");

//PUT request to create new
router.put("/create", createNewstockbalance);
// GET request to get/find all
router.get("/allstockbalance", getAllstockbalance);

//getbyid
router.put("/:id", findbyid);

//delete
router.delete("/delete", deletestockbalance);

//update
router.patch("/update", updatestockbalance);

module.exports = router;
