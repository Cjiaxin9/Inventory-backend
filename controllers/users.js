// DEPENDENCIES
require("dotenv").config();
const express = require("express");
const bcrypt = require("bcrypt"); //import package that will encrypt passwords
const jwt = require("jsonwebtoken"); //import jwt
const { v4: uuidv4 } = require("uuid"); //import to Create a version 4 (random) UUID
const client = require("../db/db"); // import client from db

// create new user
const createUser = async (req, res) => {
  try {
    // search for the username in the login table
    const user = await client.query(
      `SELECT username FROM logintable 
      WHERE username='${req.body.username}';`
    );
    // console.log("user.rows: ", user.rows);
    // if req.body.user found in the logintable, print error
    if (user.rows[0]?.username) {
      return res
        .status(400)
        .json({ status: "error", message: "duplicate username" });
    }

    // encrypt the password and store as hash
    const hash = await bcrypt.hash(req.body.password, 10);

    //if the role is not in the role table, it will print the error
    const role = await client.query(
      `SELECT role FROM role where role = '${req.body.role}' `
    );

    // if (!role) {
    //   return res.status(400).json({ status: "error", message: "invalid role" });
    // }

    //insert the username, password(hash) and role to the logintable if all the element is there
    const createdUser = await client.query(
      `INSERT INTO logintable (username, password,role) 
    VALUES ('${req.body.username}', '${hash}','${role.rows[0].role}')`
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
    // search for the username in the login table
    const user = await client.query(
      `SELECT * FROM logintable 
      WHERE username='${req.body.username}'`
    );

    // if unable to find the username, error will be printed
    if (!user) {
      return res
        .status(401)
        .json({ status: "error", message: "not authorised" });
    }

    //compart the input password by user with the logintable
    const result = await bcrypt.compare(
      req.body.password, // input password by user
      user.rows[0].password // password in the logintable
    );

    console.log("result:", result);

    //print error if the password does not match
    if (!result) {
      console.log("username or password error");
      return res.status(401).json({ status: "error", message: "login failed" });
    }

    //create payload and access token and refresh and response

    //save the username,id and the password as payload
    const payload = {
      id: user.rows[0].id,
      username: user.rows[0].username,
      password: user.rows[0].password,
    };

    //identify an authenticated user to generate the access and refresh token
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
    console.log("POST/ users/login", err);
    res.status(408).json({ status: "error", message: "login failed " });
  }
};

//get all user
const getAllUsers = async (req, res) => {
  try {
    // search for the username in the login table
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

//create another endpoint for REFRESH to get the new a access token
const refresh = async (req, res) => {
  try {
    const decoded = jwt.verify(req.body.refresh, process.env.REFRESH_SECRET);
    const payload = {
      id: decoded.id,
      username: decoded.username,
    };
    //using the same payload as before to create the access token below
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
