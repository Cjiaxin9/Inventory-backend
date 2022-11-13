require("dotenv").config();
const express = require("express");
const client = require("../db/db");

//create New stockbalance
const createNewstockbalance = async (req, res) => {
  const stockbalance = await client.query(
    `SELECT * FROM stockbalance
    WHERE purchase_id = '${req.body.purchase_id}' and withdraw_id = '${req.body.withdraw_id}' and product_name= '${req.body.product_name}'`
  );

  if (stockbalance.rows[0]?.category) {
    return res
      .status(400)
      .json({ status: "error", message: "duplicate stockbalance" });
  }

  const unit = await client.query(
    `SELECT unit FROM unit where unit = '${req.body.unit}' `
  );

  const product_name = await client.query(
    `SELECT product_name FROM productList where product_name = '${req.body.product_name}' `
  );

  const createdstockbalance = await client.query(
    `INSERT INTO stockbalance(Qty,product_name, unit,purchase_id,withdraw_id)
    VALUES ('${req.body.Qty}','${product_name.rows[0].product_name}','${unit.rows[0].unit}',
    '${req.body.purchase_id}','${req.body.withdraw_id}');`
  );

  try {
    res.json({ status: "ok", message: "saved" });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

//get all
const getAllstockbalance = async (req, res) => {
  try {
    const stockbalance = await client.query(`SELECT * FROM stockbalance `);
    res.json({ stockbalance });
    console.log(stockbalance.rows);
  } catch (err) {
    console.error(err.message);
    res.status(400).json({
      status: "error",
      message: "failed to GET all stock balance",
    });
  }
};
//find by id
const findbyid = async (req, res) => {
  const stockbalance = await client.query(
    `SELECT * FROM stockbalance where id = '${req.params.id}'`
  );

  res.json(stockbalance);
};

//delete
const deletestockbalance = async (req, res) => {
  try {
    const stockbalance = await client.query(
      `DELETE FROM stockbalance where id='${req.body.id}'`
    );

    res.json({ status: "ok", message: "deleted" });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

//update
const updatestockbalance = async (req, res) => {
  try {
    const getID = await client.query(
      `SELECT * FROM stockbalance
      WHERE purchase_id = '${req.body.purchase_id}' and withdraw_id = '${req.body.withdraw_id}' and product_name= '${req.body.product_name}';`
    );

    const updatestockbalanceDetailsResult = await client.query(
      `UPDATE stockbalance 
        SET  
        Qty = '${req.body.Qty}'
        WHERE id = '${getID.rows[0].id}' ;`
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
  createNewstockbalance,
  getAllstockbalance,
  findbyid,
  deletestockbalance,
  updatestockbalance,
};
