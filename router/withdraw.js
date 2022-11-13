require("dotenv").config();
const express = require("express");
const router = express.Router();

//puchase order page
const {
  createNewWithdraw,
  getAllWithdraw,
  findbyid,
  deletewithdraw,
  updatewithdraw,
} = require("../controllers/withdraw");

//PUT request to create new puchase total
router.put("/create", createNewWithdraw);
// GET request to get/find all puchase order
router.get("/allwithdraw", getAllWithdraw);

//getbyid
router.put("/:id", findbyid);

//delete
router.delete("/delete", deletewithdraw);

//update -change and location
router.patch("/update", updatewithdraw);

module.exports = router;
