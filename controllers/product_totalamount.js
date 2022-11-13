require("dotenv").config();
const express = require("express");
const client = require("../db/db");

//create New purchase order
const createNewPurchaseTotal = async (req, res) => {
  const purchaseproduct = await client.query(
    `SELECT * FROM purchase_totalamount 
    INNER JOIN purchase_product
    ON purchase_product.id = purchase_totalamount.purchase_id
    Where purchase_totalamount.purchase_id = '${req.body.purchase_id}'`
  );

  //   console.log(purchaseproduct.rows[0].purchase_id);
  const createdpurchasetotal = await client.query(
    `INSERT INTO purchase_totalamount  (  purchase_id,totalprice, GST, discount, finalamount ) 
  VALUES ('${purchaseproduct.rows[0].purchase_id}' ,'${req.body.totalprice}', '${req.body.GST}','${req.body.discount}','${req.body.finalamount}')`
  );

  try {
    res.json({ status: "ok", message: "saved" });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

//get all purchasetotal amount
const getAllPT = async (req, res) => {
  try {
    const purchasetotal = await client.query(
      `SELECT * FROM purchase_totalamount`
    );
    res.json({ purchasetotal });
    console.log(purchasetotal.rows);
  } catch (err) {
    console.error(err.message);
    res.status(400).json({
      status: "error",
      message: "failed to GET all purchase total amount",
    });
  }
};
//find by id
const findbyid = async (req, res) => {
  const purchasetotal = await client.query(
    `SELECT * FROM purchase_totalamount where id = '${req.params.id}'`
  );

  res.json(purchasetotal);
};

//delete purchase order
const deletePurchaseTotal = async (req, res) => {
  try {
    const purchaseTotal = await client.query(
      `DELETE FROM purchase_totalamount where id='${req.body.id}'`
    );

    res.json({ status: "ok", message: "deleted" });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

//update
const updatePurchaseTotal = async (req, res) => {
  try {
    const getID = await client.query(
      `SELECT * FROM purchase_totalamount
        WHERE purchase_id = '${req.body.purchase_id}' and id= '${req.body.id}';`
    );

    console.log(getID.rows[0].id);
    const updatepurchaseproductDetailsResult = await client.query(
      `UPDATE purchase_totalamount
        SET  
        totalprice = '${req.body.totalprice}',
        GST = '${req.body.GST}',
        discount = '${req.body.discount}',
        finalamount = '${req.body.finalamount}'
        WHERE purchase_id = '${req.body.purchase_id}' and id= '${req.body.id}';`
    );

    res.json({
      status: "ok",
      message: `updated successfully`,
    });
  } catch (err) {
    console.error(err.message);
    res.status(400).json({
      status: "error",
      message: `failed to update `,
    });
  }
};

module.exports = {
  createNewPurchaseTotal,
  getAllPT,
  findbyid,
  deletePurchaseTotal,
  updatePurchaseTotal,
};
