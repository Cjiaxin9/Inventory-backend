require("dotenv").config();
const express = require("express");
const client = require("../db/db");

//create New
const createNewCompany = async (req, res) => {
  const company = await client.query(
    `SELECT * FROM company
    WHERE company = '${req.body.company}'`
  );

  if (company.rows[0]?.company) {
    return res
      .status(400)
      .json({ status: "error", message: "duplicate company" });
  }

  const createdcompany = await client.query(
    `INSERT INTO company(company)
    VALUES ('${req.body.company}');`
  );

  try {
    res.json({ status: "ok", message: "saved" });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

//get all
const getAllCompany = async (req, res) => {
  try {
    const company = await client.query(
      `SELECT * FROM company ORDER BY company ASC`
    );
    res.json({ company });
    console.log(company.rows);
  } catch (err) {
    console.error(err.message);
    res.status(400).json({
      status: "error",
      message: "failed to GET all company",
    });
  }
};
//find by company
const findbycompany = async (req, res) => {
  const company = await client.query(
    `SELECT * FROM company where company = '${req.params.company}'`
  );

  res.json(company);
};
//delete
const deleteCompany = async (req, res) => {
  try {
    const company = await client.query(
      `DELETE FROM company where company='${req.body.company}'`
    );

    res.json({ status: "ok", message: "deleted" });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

//update
const updateCompany = async (req, res) => {
  try {
    const getID = await client.query(
      `SELECT * FROM company
      WHERE company = '${req.body.company}'
      ORDER BY company ASC ;`
    );

    const updateCompanyDetailsResult = await client.query(
      `UPDATE company
        SET  
        company = '${req.body.newcompany}'
        WHERE company = '${getID.rows[0].company}' ;`
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
  createNewCompany,
  getAllCompany,
  findbycompany,
  deleteCompany,
  updateCompany,
};
