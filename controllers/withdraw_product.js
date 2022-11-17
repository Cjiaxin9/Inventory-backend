require("dotenv").config();
const express = require("express");
const client = require("../db/db");

//create New withdraw product
const createNewwithdrawProduct = async (req, res) => {
  // const withdrawproduct = await client.query(
  //   `SELECT * FROM withdraw_product
  //   INNER JOIN withdraw
  //   ON withdraw_product.withdraw_id = withdraw.id
  //   Where withdraw_id = '${req.body.withdraw_id}'`
  // );

  // const unit = await client.query(
  //   `SELECT unit FROM unit where unit = '${req.body.unit}' `
  // );
  // console.log(req.body.unit);
  // const product_name = await client.query(
  //   `SELECT product_name FROM productList where product_name = '${req.body.product_name}' `
  // );
  // `INSERT INTO withdraw_product(Qty,withdraw_id, unit, product_name)
  // VALUES ('${Qty}', '${req.body.withdraw_id}','${unit.rows[0].unit}','${product_name.rows[0].product_name}')`
  // console.log(req.body.withdraw_id);
  // console.log(req.body.Qty);
  const Qty = parseInt(req.body.Qty);
  const createdpurchaseproduct = await client.query(
    `INSERT INTO withdraw_product(Qty,withdraw_id, unit, product_name,remark) 
  VALUES ('${Qty}', '${req.body.withdraw_id}','${req.body.unit}','${req.body.product_name}','${req.body.remark}')`
  );

  try {
    res.json({ status: "ok", message: "saved" });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

//get all purchaseproduct
const getAllWP = async (req, res) => {
  try {
    const withdrawproduct = await client.query(
      `SELECT * FROM withdraw_product`
    );
    res.json({ withdrawproduct });
    console.log(withdrawproduct.rows);
  } catch (err) {
    console.error(err.message);
    res.status(400).json({
      status: "error",
      message: "failed to GET all withdraw products",
    });
  }
};
//find by withdraw id
const findbyid = async (req, res) => {
  const withdrawproduct = await client.query(
    `SELECT * FROM withdraw_product 
    
    where withdraw_id ='${req.params.id}'`
  );

  res.json(withdrawproduct);
};

//delete
const deletewihdrawproduct = async (req, res) => {
  try {
    const withdrawproduct = await client.query(
      `DELETE FROM withdraw_product where withdraw_id='${req.body.id}'`
    );

    res.json({ status: "ok", message: "deleted" });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

//update
const updatewithdrawproduct = async (req, res) => {
  try {
    // console.log(req.body.withdraw_id, req.body.id);
    // const getID = await client.query(
    //   `SELECT * FROM withdraw_product
    //     WHERE withdraw_id = '${req.body.withdraw_id}' and id= '${req.body.id}';`
    // );
    // console.log(getID);
    // const unit = await client.query(
    //   `SELECT unit FROM unit where unit = '${req.body.unit}' `
    // );

    // const product_name = await client.query(
    //   `SELECT product_name FROM productList where product_name = '${req.body.product_name}' `
    // );
    const Qty = parseInt(req.body.Qty);

    const updatepurchaseproductDetailsResult = await client.query(
      `UPDATE withdraw_product
        SET  
        product_name = '${req.body.product_name}',
        Qty = '${Qty}',
        unit = '${req.body.unit}',
        remark = '${req.body.remark}'        
        WHERE withdraw_id = '${req.body.withdraw_id}' and id= '${req.body.id}';`
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
  createNewwithdrawProduct,
  getAllWP,
  findbyid,
  deletewihdrawproduct,
  updatewithdrawproduct,
};
