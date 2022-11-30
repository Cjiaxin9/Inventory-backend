require("dotenv").config();
const express = require("express");
const client = require("../db/db");

//create New
const createNewstockin = async (req, res) => {
  const stockin = await client.query(
    `SELECT * FROM stockin
    WHERE date = '${req.body.date}' `
  );
  if (withdraw.rows[0]?.category) {
    return res
      .status(400)
      .json({ status: "error", message: "duplicate withdraw" });
  }
  const createdpurchasetotal = await client.query(
    `INSERT INTO withdraw (date,category, location)
    VALUES ('${req.body.date}','${req.body.category}','${req.body.location}')
    RETURNING id;`
  );

  try {
    // res.json({ status: "ok", message: "saved" });
    res.json(createdpurchasetotal);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

//get all
const getAllWithdraw = async (req, res) => {
  try {
    const withdraw = await client.query(`SELECT * FROM withdraw `);
    res.json({ withdraw });
    console.log(withdraw.rows);
  } catch (err) {
    console.error(err.message);
    res.status(400).json({
      status: "error",
      message: "failed to GET all withdraw",
    });
  }
};
//find by id
const findbyid = async (req, res) => {
  const withdraw = await client.query(
    `SELECT * FROM withdraw where id = '${req.params.id}'`
  );

  res.json(withdraw);
};

//delete
const deletewithdraw = async (req, res) => {
  try {
    const withdraw = await client.query(
      `DELETE FROM withdraw where id='${req.body.id}'`
    );

    res.json({ status: "ok", message: "deleted" });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

//update
const updatewithdraw = async (req, res) => {
  try {
    // const getID = await client.query(
    //   `SELECT * FROM withdraw
    //     WHERE date = '${req.body.date}'and location= '${req.body.location}';`
    // );

    const updatewithdrawDetailsResult = await client.query(
      `UPDATE withdraw 
        SET  
        date = '${req.body.date}',
        category = '${req.body.category}',
        location= '${req.body.location}'
        WHERE id = '${req.body.id}' 
        RETURNING id;`
    );
    res.json({ updatewithdrawDetailsResult });
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
  createNewWithdraw,
  getAllWithdraw,
  findbyid,
  deletewithdraw,
  updatewithdraw,
};
