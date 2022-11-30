require("dotenv").config();
const express = require("express");
const client = require("../db/db");

//create New
const createNewstockin = async (req, res) => {
  const stockin = await client.query(
    `SELECT * FROM stockin
    WHERE date = '${req.body.date}'and company= '${req.body.company}' and category = '${req.body.category}'`
  );
  if (stockin.rows[0]?.company) {
    return res
      .status(400)
      .json({ status: "error", message: "duplicate stockin" });
  }

  const createdstockin = await client.query(
    `INSERT INTO stockin (date,company,category)
    VALUES ('${req.body.date}','${req.body.company}','${req.body.category}')
    RETURNING id;`
  );

  try {
    // res.json({ status: "ok", message: "saved" });
    res.json(createdstockin);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

//get all
const getAllstockin = async (req, res) => {
  try {
    const stockin = await client.query(`SELECT * FROM stockin `);
    res.json({ stockin });
    console.log(stockin.rows);
  } catch (err) {
    console.error(err.message);
    res.status(400).json({
      status: "error",
      message: "failed to GET all stockin",
    });
  }
};
//find by id
const findbyid = async (req, res) => {
  const stockin = await client.query(
    `SELECT * FROM stockin where id = '${req.params.id}'`
  );

  res.json(stockin);
};

//delete
const deletestockin = async (req, res) => {
  try {
    const stockin = await client.query(
      `DELETE FROM stockin where id='${req.body.id}'`
    );

    res.json({ status: "ok", message: "deleted" });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

//update
const updatestockin = async (req, res) => {
  try {
    // const getID = await client.query(
    //   `SELECT * FROM withdraw
    //     WHERE date = '${req.body.date}'and location= '${req.body.location}';`
    // );

    const updatewstockinDetailsResult = await client.query(
      `UPDATE stockin 
        SET  
        date = '${req.body.date}',
        category = '${req.body.category}',
        company= '${req.body.company}'
        WHERE id = '${req.body.id}' 
        RETURNING id;`
    );
    res.json({ updatewstockinDetailsResult });
    // res.json({
    //   status: "ok",
    //   message: `updated successfully`,
    // });
  } catch (err) {
    console.error(err.message);
    res.status(400).json({
      status: "error",
      message: `failed to update `,
    });
  }
};

module.exports = {
  createNewstockin,
  getAllstockin,
  findbyid,
  deletestockin,
  updatestockin,
};
