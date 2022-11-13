require("dotenv").config();
const express = require("express");
const client = require("../db/db");

//create New purchase order
const createNewPurchaseOrder = async (req, res) => {
  // search for the receipt in the purchase
  const purchaseReceipt = await client.query(
    `SELECT receipt_nos FROM purchase 
    WHERE receipt_nos='${req.body.receipt_nos}';`
  );
  if (purchaseReceipt.rows[0]?.receipt_nos) {
    return res
      .status(400)
      .json({ status: "error", message: "duplicate receipt" });
  }

  const category = await client.query(
    `SELECT category FROM category where category = '${req.body.category}' `
  );

  const company = await client.query(
    `SELECT company FROM company where company = '${req.body.company}' `
  );

  const createdPurchaseOrder = await client.query(
    `INSERT INTO purchase (receipt_nos, company,category,date ) 
  VALUES ('${req.body.receipt_nos}', '${company.rows[0].company}','${category.rows[0].category}','${req.body.date}')`
  );

  try {
    // await createdPurchaseOrder.save();
    res.json({ status: "ok", message: "saved" });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

//get all purchase order
const getAllPO = async (req, res) => {
  try {
    const purchaseorder = await client.query(`SELECT * FROM purchase`);
    res.json({ purchaseorder });
    console.log(purchaseorder.rows);
  } catch (err) {
    console.error(err.message);
    res
      .status(400)
      .json({ status: "error", message: "failed to GET all purchase order" });
  }
};
//find by id
const findbyid = async (req, res) => {
  const purchaseorder = await client.query(
    `SELECT * FROM purchase where id='${req.params.id}'`
  );
  // SELECT * FROM purchase where id = '${req.params.id}
  res.json(purchaseorder);
};

//delete purchase order
const deletePurchaseOrder = async (req, res) => {
  try {
    const purchaseorder = await client.query(
      `DELETE FROM purchase where id='${req.body.id}'`
    );

    res.json({ status: "ok", message: "deleted" });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

//update
const updatePurchaseOrder = async (req, res) => {
  try {
    // find the  id based on PurchaseOrder
    const getID = await client.query(
      `SELECT * FROM purchase
        WHERE receipt_nos='${req.body.receipt_nos}';`
    );

    const category = await client.query(
      `SELECT category FROM category where category = '${req.body.category}' `
    );

    const company = await client.query(
      `SELECT company FROM company where company = '${req.body.company}' `
    );

    console.log(getID.rows[0].id);
    const updatepurchaseDetailsResult = await client.query(
      `UPDATE purchase
        SET  
        company = '${company.rows[0].company}',
        category = '${category.rows[0].category}',
        date = '${req.body.date}'
        WHERE id= '${getID.rows[0].id}';`
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
  createNewPurchaseOrder,
  getAllPO,
  findbyid,
  deletePurchaseOrder,
  updatePurchaseOrder,
};
