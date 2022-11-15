require("dotenv").config();
const express = require("express");
const client = require("../db/db");

//create New
const createNewlocation = async (req, res) => {
  const location = await client.query(
    `SELECT * FROM location
    WHERE location = '${req.body.location}'
    ORDER BY location ASC;`
  );

  if (location.rows[0]?.location) {
    return res
      .status(400)
      .json({ status: "error", message: "duplicate location" });
  }

  const createdlocation = await client.query(
    `INSERT INTO location(location)
    VALUES ('${req.body.location}');`
  );

  try {
    res.json({ status: "ok", message: "saved" });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

//get all
const getAlllocation = async (req, res) => {
  try {
    const location = await client.query(
      `SELECT * FROM location ORDER BY location ASC;`
    );
    res.json({ location });
    // console.log(location.rows);
  } catch (err) {
    console.error(err.message);
    res.status(400).json({
      status: "error",
      message: "failed to GET all location",
    });
  }
};
//find
const findbylocation = async (req, res) => {
  const location = await client.query(
    `SELECT * FROM location where location= '${req.params.location}'`
  );

  res.json(location);
};
//delete
const deletelocation = async (req, res) => {
  try {
    const location = await client.query(
      `DELETE FROM location where location='${req.body.location}'`
    );

    res.json({ status: "ok", message: "deleted" });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

//update
const updatelocation = async (req, res) => {
  try {
    const getID = await client.query(
      `SELECT * FROM location
      WHERE location = '${req.body.location}';`
    );

    const updatelocationDetailsResult = await client.query(
      `UPDATE location
        SET  
        location = '${req.body.newlocation}'
        WHERE location = '${getID.rows[0].location}' ;`
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
  createNewlocation,
  getAlllocation,
  findbylocation,
  deletelocation,
  updatelocation,
};
