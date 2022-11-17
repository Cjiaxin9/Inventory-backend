require("dotenv").config();
const express = require("express");
const client = require("../db/db");

//create New role
const createNewrole = async (req, res) => {
  const role = await client.query(
    `SELECT * FROM role
    WHERE role = '${req.body.role}'`
  );

  if (role.rows[0]?.role) {
    return res.status(400).json({ status: "error", message: "duplicate role" });
  }

  const createdrole = await client.query(
    `INSERT INTO role(role)
    VALUES ('${req.body.role}');`
  );

  try {
    res.json({ status: "ok", message: "saved" });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

//get all
const getAllrole = async (req, res) => {
  try {
    const role = await client.query(`SELECT * FROM role ORDER BY role ASC;`);
    res.json({ role });
  } catch (err) {
    console.error(err.message);
    res.status(400).json({
      status: "error",
      message: "failed to GET all role",
    });
  }
};
//find by company
const findbyrole = async (req, res) => {
  const role = await client.query(
    `SELECT * FROM role where role = '${req.params.role}'`
  );

  res.json(role);
};
//delete
const deleterole = async (req, res) => {
  try {
    const role = await client.query(
      `DELETE FROM role where role='${req.body.role}'`
    );

    res.json({ status: "ok", message: "deleted" });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

//update
const updaterole = async (req, res) => {
  try {
    const getID = await client.query(
      `SELECT * FROM role
      WHERE role = '${req.body.role}';`
    );

    const updateroleDetailsResult = await client.query(
      `UPDATE role
        SET  
        role = '${req.body.newrole}'
        WHERE role = '${getID.rows[0].role}' ;`
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
  createNewrole,
  getAllrole,
  findbyrole,
  deleterole,
  updaterole,
};
