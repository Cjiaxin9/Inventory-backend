// DEPENDENCIES
const express = require("express");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");
const client = require("../db/db");

const createUser = async (req, res) => {
  try {
    const user = await client.query(
      `SELECT username FROM logintable 
      WHERE username='${req.body.username}';`
    );
    if (user) {
      return res
        .status(400)
        .json({ status: "error", message: "duplicate email" });
    }

    const hash = await bcrypt.hash(req.body.password, 10);
    const createdUser = await client.query(
      `INSERT INTO logintable (username, password) 
    VALUES ('${req.body.username}', '${hash}')`
    );
    console.log("created username:", createdUser);
    res.json({ status: "okay", message: "user created" });
  } catch (err) {
    console.log("Put /users/create", err);
    res.status(400).json({ status: "error", message: "an error has occurred" });
  }
};

// login
const login = async (req, res) => {
  try {
    const user = await client.query(
      `SELECT username FROM logintable 
      WHERE username='${req.body.username}'`
    );
    if (!user) {
      return res
        .status(401)
        .json({ status: "error", message: "not authorised" });
    }

    const result = await bcrypt.compare(req.body.password, user.hash);
    console.log(result);
    if (!result) {
      console.log("username or password error");
      return res.status(401).json({ status: "error", message: "login failed" });
    }

    //create payload and access token and refresh and response

    const payload = {
      id: user._id,
      username: user.username,
    };
    const access = jwt.sign(payload, process.env.ACCESS_SECRET, {
      expiresIn: "20m",
      jwtid: uuidv4(),
    });
    const refresh = jwt.sign(payload, process.env.REFRESH_SECRET, {
      expiresIn: "30d",
      jwtid: uuidv4(),
    });

    const response = { access, refresh };

    res.json(response);
  } catch (err) {
    console.log("POST/ users/create", err);
    res.status(408).json({ status: "error", message: "login failed " });
  }
};

//get all user
const getAllUsers = async (req, res) => {
  try {
    const user = await client.query(`SELECT * FROM logintable`);
    res.json({ user });
    console.log(user.rows);
  } catch (err) {
    console.error(err.message);
    res
      .status(400)
      .json({ status: "error", message: "failed to GET all users" });
  }
};

//create another endpoint for REFRESH
const refresh = async (req, res) => {
  try {
    const decoded = jwt.verify(req.body.refresh, process.env.REFRESH_SECRET);
    const payload = {
      id: decoded.id,
      username: decoded.username,
    };
    const access = jwt.sign(payload, process.env.REFRESH_SECRET, {
      expiresIn: "30d",
      jwtid: uuidv4(),
    });
    const response = {
      access,
    };

    res.json(response);
  } catch (err) {
    console.log("POST /users/refresh", err);
    res.status(401).json({
      status: "error",
      message: "unauthorised",
    });
  }
};

module.exports = {
  createUser,
  refresh,
  login,
  getAllUsers,
};
