require("dotenv").config();
const express = require("express");
const client = require("../db/db");

//create New purchase order
const createNewPurchaseProduct = async (req, res) => {
  const purchaseproduct = await client.query(
    `SELECT purchase_id FROM purchase_product 
    INNER JOIN purchase
    ON purchase_product.purchase_id = purchase.id
    Where purchase.id = '${req.body.purchase_id}'`
  );
  const unit = await client.query(
    `SELECT unit FROM unit where unit = '${req.body.unit}' `
  );

  const product_name = await client.query(
    `SELECT product_name FROM productList where product_name = '${req.body.product_name}' `
  );
  const Qty = parseInt(req.body.Qty);

  const createdpurchaseproduct = await client.query(
    `INSERT INTO purchase_product (product_name, purchase_id, Qty, unit, unitprice,totalprice ) 
  VALUES ('${product_name.rows[0].product_name}', '${purchaseproduct.rows[0].purchase_id}','${Qty}','${unit.rows[0].unit}','${req.body.unitprice}','${req.body.totalprice}')`
  );

  try {
    res.json({ status: "ok", message: "saved" });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

//get all purchaseproduct
const getAllPP = async (req, res) => {
  try {
    const purchasproduct = await client.query(`SELECT * FROM purchase_product`);
    res.json({ purchasproduct });
    console.log(purchasproduct.rows);
  } catch (err) {
    console.error(err.message);
    res.status(400).json({
      status: "error",
      message: "failed to GET all purchase products",
    });
  }
};
//find by id
const findbyid = async (req, res) => {
  const purchaseproduct = await client.query(
    `SELECT * FROM purchase_product where id='${req.params.id}'`
  );

  res.json(purchaseproduct);
};

//delete purchase order
const deletePurchaseproduct = async (req, res) => {
  try {
    const purchaseorder = await client.query(
      `DELETE FROM purchase_product where id='${req.body.id}'`
    );

    res.json({ status: "ok", message: "deleted" });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

//update
const updatePurchaseproduct = async (req, res) => {
  try {
    const getID = await client.query(
      `SELECT * FROM purchase_product
        WHERE purchase_id = '${req.body.purchase_id}' and id= '${req.body.id}';`
    );

    const unit = await client.query(
      `SELECT unit FROM unit where unit = '${req.body.unit}' `
    );

    const product_name = await client.query(
      `SELECT product_name FROM productList where product_name = '${req.body.product_name}' `
    );

    console.log(getID.rows[0].id);
    const updatepurchaseproductDetailsResult = await client.query(
      `UPDATE purchase_product
        SET  
        product_name = '${product_name.rows[0].product_name}',
        Qty = '${req.body.Qty}',
        unit = '${unit.rows[0].unit}',
        unitprice = '${req.body.unitprice}',
        totalprice = '${req.body.totalprice}'
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
  createNewPurchaseProduct,
  getAllPP,
  findbyid,
  deletePurchaseproduct,
  updatePurchaseproduct,
};
