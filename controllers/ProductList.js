require("dotenv").config();
const express = require("express");
const client = require("../db/db");

//create New stockbalance
const createNewProductList = async (req, res) => {
  const productList = await client.query(
    `SELECT * FROM productList
    WHERE product_name = '${req.body.product_name}'`
  );

  if (productList.rows[0]?.product_name) {
    return res.status(400).json({ status: "error", message: "duplicate unit" });
  }

  const productListInsert = await client.query(
    `INSERT INTO productList(product_name)
    VALUES ('${req.body.product_name}');`
  );

  try {
    res.json({ status: "ok", message: "saved" });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

//get all
const getAllProductList = async (req, res) => {
  try {
    const productList = await client.query(`SELECT * FROM productList `);
    res.json({ productList });
    // console.log(productList.rows);
  } catch (err) {
    console.error(err.message);
    res.status(400).json({
      status: "error",
      message: "failed to GET all  product list",
    });
  }
};
//find by company
const findbyProductList = async (req, res) => {
  const productList = await client.query(
    `SELECT * FROM productList where product_name= '${req.params.product_name}'`
  );

  res.json(productList);
};
//delete
const deleteProductList = async (req, res) => {
  try {
    const productList = await client.query(
      `DELETE FROM productList where product_name='${req.body.product_name}'`
    );

    res.json({ status: "ok", message: "deleted" });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

//update
const updateProductList = async (req, res) => {
  try {
    const getID = await client.query(
      `SELECT * FROM productList
      WHERE product_name = '${req.body.product_name}';`
    );

    const updateProductListDetailsResult = await client.query(
      `UPDATE productList
        SET  
        product_name = '${req.body.newproduct_name}'
        WHERE product_name = '${getID.rows[0].product_name}' ;`
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
  createNewProductList,
  getAllProductList,
  findbyProductList,
  deleteProductList,
  updateProductList,
};
