require("dotenv").config();
const client = require("../db/db"); // import client from db

function table() {
  //Create table in database
  //uuid create if not exist in database
  client.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`, function (err) {
    if (err) throw err;
    console.log("uuid created");
  });

  //role list create if not exist in database
  client.query(
    `CREATE TABLE IF NOT EXISTS role(
      role VARCHAR(50) NOT NULL PRIMARY KEY
      )`,
    function (err) {
      if (err) throw err;
      console.log("role list created");
    }
  );

  //Create login table create if not exist in database
  client.query(
    `CREATE TABLE IF NOT EXISTS logintable(
          id uuid DEFAULT uuid_generate_v4 () PRIMARY KEY,
          username VARCHAR(50) NOT NULL, 
          password VARCHAR(100) NOT NULL ,
          role VARCHAR(50) ,
          FOREIGN KEY (role) REFERENCES role(role)
          )`,
    function (err) {
      if (err) throw err;
      console.log("login table created");
    }
  );
  //Create company list create if not exist in database
  client.query(
    `CREATE TABLE IF NOT EXISTS company(
          company VARCHAR(100) NOT NULL PRIMARY KEY
          )`,
    function (err) {
      if (err) throw err;
      console.log("company list created");
    }
  );

  //Create location list create if not exist in database
  client.query(
    `CREATE TABLE IF NOT EXISTS location(
          
          location VARCHAR(100) NOT NULL PRIMARY KEY
          )`,
    function (err) {
      if (err) throw err;
      console.log("location list created");
    }
  );

  //Create unit list create if not exist in database
  client.query(
    `CREATE TABLE IF NOT EXISTS unit(
          
          unit VARCHAR(20) NOT NULL PRIMARY KEY
          )`,
    function (err) {
      if (err) throw err;
      console.log("unit list created");
    }
  );

  //Create category list create if not exist in database
  client.query(
    `CREATE TABLE IF NOT EXISTS category(
        
          category VARCHAR(50) NOT NULL PRIMARY KEY
          )`,
    function (err) {
      if (err) throw err;
      console.log("category list created");
    }
  );

  //Create product list create if not exist in database
  client.query(
    `CREATE TABLE IF NOT EXISTS productList(
          
          product_name VARCHAR(100) NOT NULL PRIMARY KEY
          )`,
    function (err) {
      if (err) throw err;
      console.log("product list created");
    }
  );

  // create purchase table create if not exist in database
  client.query(
    `CREATE TABLE IF NOT EXISTS purchase(
          id SERIAL UNIQUE NOT NULL PRIMARY KEY,
          receipt_nos VARCHAR(50) NOT NULL,
          date DATE NOT NULL DEFAULT CURRENT_DATE,
          company VARCHAR(100),
          FOREIGN KEY (company) REFERENCES company(company),
          category VARCHAR(50),
          FOREIGN KEY (category) REFERENCES category(category)
          )`,
    function (err) {
      if (err) throw err;
      console.log("purchase table created");
    }
  );

  // create purchase_product table create if not exist in database
  client.query(
    `CREATE TABLE IF NOT EXISTS purchase_product(
          id SERIAL UNIQUE NOT NULL PRIMARY KEY,
          Qty int NOT NULL,
          unitprice numeric(10,2) NOT NULL,
          totalprice numeric(10,2) NOT NULL,
          remark text,
          unit VARCHAR(20),
          FOREIGN KEY (unit) REFERENCES unit(unit),
          product_name VARCHAR(100),
          FOREIGN KEY (product_name) REFERENCES productList(product_name),
          purchase_id int,
          FOREIGN KEY (purchase_id ) REFERENCES purchase(id)
          )`,
    function (err) {
      if (err) throw err;
      console.log("purchase product table created");
    }
  );

  // create purchase_totalamount table create if not exist in database
  client.query(
    `CREATE TABLE IF NOT EXISTS purchase_totalamount( 
          id SERIAL UNIQUE NOT NULL PRIMARY KEY, 
          totalprice numeric(10,2) NOT NULL,  
          GST numeric(10,2) NOT NULL,
          discount numeric(10,2) NOT NULL,
          finalamount numeric(10,2) NOT NULL,
          purchase_id int,
          FOREIGN KEY (purchase_id ) REFERENCES purchase(id) 
          )`,
    function (err) {
      if (err) throw err;
      console.log("purchase total amount table created");
    }
  );

  // create withdraw table create if not exist in database
  client.query(
    `CREATE TABLE IF NOT EXISTS withdraw(
          id SERIAL UNIQUE NOT NULL PRIMARY KEY ,
          date DATE,
          category VARCHAR(50),
          FOREIGN KEY (category) REFERENCES category(category),
          location VARCHAR(100),
          FOREIGN KEY (location) REFERENCES location(location) 
          )`,
    function (err) {
      if (err) throw err;
      console.log("withdraw table created");
    }
  );

  // create withdraw_product table create if not exist in database
  client.query(
    `CREATE TABLE IF NOT EXISTS withdraw_product(
          id SERIAL UNIQUE NOT NULL PRIMARY KEY ,
          Qty int NOT NULL,
          remark text,
          product_name VARCHAR(100),
          FOREIGN KEY (product_name) REFERENCES productList(product_name),
          unit VARCHAR(20),
          FOREIGN KEY (unit) REFERENCES unit(unit),
          withdraw_id int,
          FOREIGN KEY (withdraw_id) REFERENCES withdraw(id)
          )`,
    function (err) {
      if (err) throw err;
      console.log("withdraw product table created");
    }
  );

  // create stockbalance table create if not exist in database
  client.query(
    `CREATE TABLE IF NOT EXISTS stockbalance(
          id SERIAL UNIQUE NOT NULL PRIMARY KEY , 
          Qty int NOT NULL,
          remark text,
          product_name VARCHAR(100),
          FOREIGN KEY (product_name) REFERENCES productList(product_name),
          purchase_id int,
          FOREIGN KEY (purchase_id ) REFERENCES purchase(id),
          withdraw_id int,
          FOREIGN KEY (withdraw_id) REFERENCES withdraw(id),
          unit VARCHAR(20),
          FOREIGN KEY (unit) REFERENCES unit(unit)
          )`,
    function (err) {
      if (err) throw err;
      console.log("stock balance table created");
    }
  );
}
//create Stockin table create if not exist in database
client.query(
  `CREATE TABLE IF NOT EXISTS stockin(
        id SERIAL UNIQUE NOT NULL PRIMARY KEY,
        date DATE NOT NULL DEFAULT CURRENT_DATE
        )`,
  function (err) {
    if (err) throw err;
    console.log("Stockin created");
  }
);
// create stockin table create if not exist in database
client.query(
  `CREATE TABLE IF NOT EXISTS stockin_product(
        id SERIAL UNIQUE NOT NULL PRIMARY KEY ,
        Qty int NOT NULL,
        remark text,
        product_name VARCHAR(100),
        FOREIGN KEY (product_name) REFERENCES productList(product_name),
        unit VARCHAR(20),
        FOREIGN KEY (unit) REFERENCES unit(unit),
        stockin_id int,
        FOREIGN KEY (stockin_id) REFERENCES stockin(id)
        )`,
  function (err) {
    if (err) throw err;
    console.log("stockin product table created");
  }
);

module.exports = table;
