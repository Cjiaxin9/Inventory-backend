require("dotenv").config();
const express = require("express");
const client = require("../db/db");

//create New stockbalance
const createNewcategory = async (req, res) => {
  const category = await client.query(
    `SELECT * FROM category
    WHERE category = '${req.body.category}'
    ORDER BY category ASC`
  );

  if (category.rows[0]?.category) {
    return res
      .status(400)
      .json({ status: "error", message: "duplicate category" });
  }

  const createdcategory = await client.query(
    `INSERT INTO category(category)
    VALUES ('${req.body.category}');`
  );

  try {
    res.json({ status: "ok", message: "saved" });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

//get all
const getAllcategory = async (req, res) => {
  try {
    const category = await client.query(
      `SELECT * FROM category ORDER BY category ASC `
    );
    res.json({ category });
    // console.log(category.rows);
  } catch (err) {
    console.error(err.message);
    res.status(400).json({
      status: "error",
      message: "failed to GET all category",
    });
  }
};
//find
const findbycategory = async (req, res) => {
  const category = await client.query(
    `SELECT * FROM category where category= '${req.params.category}'`
  );

  res.json(category);
};
//delete
const deletecategory = async (req, res) => {
  try {
    const category = await client.query(
      `DELETE FROM category where category='${req.body.category}'`
    );

    res.json({ status: "ok", message: "deleted" });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

//update
const updatecategory = async (req, res) => {
  try {
    const getID = await client.query(
      `SELECT * FROM category
      WHERE category = '${req.body.category}';`
    );

    const updatecategoryDetailsResult = await client.query(
      `UPDATE category
        SET  
        category = '${req.body.newcategory}'
        WHERE category = '${getID.rows[0].category}' ;`
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
  createNewcategory,
  getAllcategory,
  findbycategory,
  deletecategory,
  updatecategory,
};
