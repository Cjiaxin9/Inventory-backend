require("dotenv").config();
const express = require("express");
const client = require("../db/db");

//create New
const createNewstockinProduct = async (req, res) => {
  // const stockinproduct = await client.query(
  //   `SELECT * FROM stockin_product
  //   INNER JOIN stockin
  //   ON stockin_product.stockin_id = stockin.id
  //   Where stockin_id = '${req.body.stockin_id}'`
  // );

  // const unit = await client.query(
  //   `SELECT unit FROM unit where unit = '${req.body.unit}' `
  // );
  // console.log(req.body.unit);
  // const product_name = await client.query(
  //   `SELECT product_name FROM productList where product_name = '${req.body.product_name}' `
  // );
  // `INSERT INTO stockin_product(Qty,stockin_id, unit, product_name)
  // VALUES ('${Qty}', '${req.body.stockin_id}','${unit.rows[0].unit}','${product_name.rows[0].product_name}')`
  // console.log(req.body.stockin_id);
  // console.log(req.body.Qty);
  const Qty = parseInt(req.body.Qty);
  const createdpurchaseproduct = await client.query(
    `INSERT INTO stockin_product(Qty,stockin_id, unit, product_name,remark) 
  VALUES ('${Qty}', '${req.body.stockin_id}','${req.body.unit}','${req.body.product_name}','${req.body.remark}')`
  );

  try {
    res.json({ status: "ok", message: "saved" });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

//get all purchaseproduct
const getAllstockin = async (req, res) => {
  try {
    const stockinproduct = await client.query(`SELECT * FROM stockin_product`);
    res.json({ stockinproduct });
    console.log(stockinproduct.rows);
  } catch (err) {
    console.error(err.message);
    res.status(400).json({
      status: "error",
      message: "failed to GET all stockin products",
    });
  }
};
//find by stockin id
const findbyid = async (req, res) => {
  const stockinproduct = await client.query(
    `SELECT * FROM stockin_product 
    
    where id ='${req.params.id}'`
  );

  res.json(stockinproduct);
};

//delete
const deletestockinproduct = async (req, res) => {
  try {
    const stockinproduct = await client.query(
      `DELETE FROM stockin_product where id='${req.body.id}'`
    );

    res.json({ status: "ok", message: "deleted" });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

//update
const updatestockinproduct = async (req, res) => {
  try {
    // console.log(req.body.stockin_id, req.body.id);
    // const getID = await client.query(
    //   `SELECT * FROM stockin_product
    //     WHERE stockin_id = '${req.body.stockin_id}' and id= '${req.body.id}';`
    // );
    // console.log(getID);
    // const unit = await client.query(
    //   `SELECT unit FROM unit where unit = '${req.body.unit}' `
    // );

    // const product_name = await client.query(
    //   `SELECT product_name FROM productList where product_name = '${req.body.product_name}' `
    // );
    const Qty = parseInt(req.body.Qty);

    const updatestockinproductDetailsResult = await client.query(
      `UPDATE stockin_product
        SET  
        product_name = '${req.body.product_name}',
        Qty = '${Qty}',
        unit = '${req.body.unit}',
        remark = '${req.body.remark}'        
        WHERE stockin_id = '${req.body.stockin_id}' and id= '${req.body.id}';`
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
  createNewstockinProduct,
  getAllstockin,
  findbyid,
  deletestockinproduct,
  updatestockinproduct,
};
