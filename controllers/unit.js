require("dotenv").config();
const express = require("express");
const client = require("../db/db");

//create New stockbalance
const createNewunit = async (req, res) => {
  const unit = await client.query(
    `SELECT * FROM unit
    WHERE unit = '${req.body.unit}'`
  );

  if (unit.rows[0]?.unit) {
    return res.status(400).json({ status: "error", message: "duplicate unit" });
  }

  const createdunit = await client.query(
    `INSERT INTO unit(unit)
    VALUES ('${req.body.unit}');`
  );

  try {
    res.json({ status: "ok", message: "saved" });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

//get all
const getAllunit = async (req, res) => {
  try {
    const unit = await client.query(`SELECT * FROM unit ORDER BY unit ASC;`);
    res.json({ unit });
    // console.log(unit.rows);
  } catch (err) {
    console.error(err.message);
    res.status(400).json({
      status: "error",
      message: "failed to GET all unit",
    });
  }
};
//find by company
const findbyunit = async (req, res) => {
  const unit = await client.query(
    `SELECT * FROM unit where unit = '${req.params.unit}'`
  );

  res.json(unit);
};
//delete
const deleteunit = async (req, res) => {
  try {
    const unit = await client.query(
      `DELETE FROM unit where unit='${req.body.unit}'`
    );

    res.json({ status: "ok", message: "deleted" });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

//update
const updateunit = async (req, res) => {
  try {
    const getID = await client.query(
      `SELECT * FROM unit
      WHERE unit = '${req.body.unit}';`
    );

    const updateunitDetailsResult = await client.query(
      `UPDATE unit
        SET  
        unit = '${req.body.newunit}'
        WHERE unit = '${req.body.unit}' ;`
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
  createNewunit,
  getAllunit,
  findbyunit,
  deleteunit,
  updateunit,
};
