const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  port: "5432",
  user: "db_user",
  password: "123456",
  database: "vendingnation",
});

client.connect((err) => {
  if (err) {
    console.error("connection error", err.stack);
  } else {
    console.log("connected to vending nation database");
  }
});

//Create table in database
//uuid
client.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`, function (err) {
  if (err) throw err;
  console.log("uuid created");
});

//Create login table
client.query(
  `CREATE TABLE IF NOT EXISTS logintable(
    id uuid DEFAULT uuid_generate_v4 () PRIMARY KEY,
    username VARCHAR(50) NOT NULL, 
    password VARCHAR(10) NOT NULL 
    )`,
  function (err) {
    if (err) throw err;
    console.log("login table created");
  }
);
//Create company list
client.query(
  `CREATE TABLE IF NOT EXISTS company(
   id SERIAL UNIQUE NOT NULL PRIMARY KEY,
  company VARCHAR(100) NOT NULL 
    )`,
  function (err) {
    if (err) throw err;
    console.log("company list created");
  }
);

//Create location list
client.query(
  `CREATE TABLE IF NOT EXISTS location(
    id SERIAL UNIQUE NOT NULL PRIMARY KEY,
    location VARCHAR(100) NOT NULL 
    )`,
  function (err) {
    if (err) throw err;
    console.log("location list created");
  }
);

//Create unit list
client.query(
  `CREATE TABLE IF NOT EXISTS unit(
    id SERIAL UNIQUE NOT NULL PRIMARY KEY,
    unit VARCHAR(20) NOT NULL 
    )`,
  function (err) {
    if (err) throw err;
    console.log("unit list created");
  }
);

//Create category list
client.query(
  `CREATE TABLE IF NOT EXISTS category(
    id SERIAL UNIQUE NOT NULL PRIMARY KEY,
    category VARCHAR(50) NOT NULL 
    )`,
  function (err) {
    if (err) throw err;
    console.log("category list created");
  }
);

//Create product list
client.query(
  `CREATE TABLE IF NOT EXISTS productList(
    id SERIAL UNIQUE NOT NULL PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL 
    )`,
  function (err) {
    if (err) throw err;
    console.log("product list created");
  }
);

// create purchase table
client.query(
  `CREATE TABLE IF NOT EXISTS purchase(
    id SERIAL UNIQUE NOT NULL PRIMARY KEY,
    receipt_nos VARCHAR(50) NOT NULL,
    date DATE NOT NULL DEFAULT CURRENT_DATE,
    company_id int,
    FOREIGN KEY (company_id) REFERENCES company(id),
    category_id int,
    FOREIGN KEY (category_id) REFERENCES category(id)
    )`,
  function (err) {
    if (err) throw err;
    console.log("purchase table created");
  }
);

// create purchase_product table
client.query(
  `CREATE TABLE IF NOT EXISTS purchase_product(
    id SERIAL UNIQUE NOT NULL PRIMARY KEY,
    Qty int NOT NULL,
    unitprice numeric(10,2) NOT NULL,
    totalprice numeric(10,2) NOT NULL,
    remark text,
    unit_id int,
    FOREIGN KEY (unit_id) REFERENCES unit(id),
    productlist_id int,
    FOREIGN KEY (productlist_id) REFERENCES productList(id),
    purchase_id int,
    FOREIGN KEY (purchase_id ) REFERENCES purchase(id)
    )`,
  function (err) {
    if (err) throw err;
    console.log("purchase product table created");
  }
);

// create purchase_totalamount table
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

// create withdraw table
client.query(
  `CREATE TABLE IF NOT EXISTS withdraw(
    id SERIAL UNIQUE NOT NULL PRIMARY KEY ,
    date DATE NOT NULL DEFAULT CURRENT_DATE,
    category_id int,
    FOREIGN KEY (category_id) REFERENCES category(id),
    location_id int,
    FOREIGN KEY (location_id) REFERENCES location(id) 
    )`,
  function (err) {
    if (err) throw err;
    console.log("withdraw table created");
  }
);

// create withdraw_product table
client.query(
  `CREATE TABLE IF NOT EXISTS withdraw_product(
    id SERIAL UNIQUE NOT NULL PRIMARY KEY ,
    Qty int NOT NULL,
    remark text,
    productlist_id int,
    FOREIGN KEY (productlist_id) REFERENCES productList(id),
    unit_id int,
    FOREIGN KEY (unit_id) REFERENCES unit(id),
    withdraw_id int,
    FOREIGN KEY (withdraw_id) REFERENCES withdraw(id)
    )`,
  function (err) {
    if (err) throw err;
    console.log("withdraw product table created");
  }
);

// create stockbalance table
client.query(
  `CREATE TABLE IF NOT EXISTS stockbalance(
    id SERIAL UNIQUE NOT NULL PRIMARY KEY , 
    Qty int NOT NULL,
    remark text,
    productlist_id int,
    FOREIGN KEY (productlist_id) REFERENCES productList(id),
    purchase_id int,
    FOREIGN KEY (purchase_id ) REFERENCES purchase(id),
    withdraw_id int,
    FOREIGN KEY (withdraw_id) REFERENCES withdraw(id),
    unit_id int,
    FOREIGN KEY (unit_id) REFERENCES unit(id)
    )`,
  function (err) {
    if (err) throw err;
    console.log("stock balance table created");
  }
);

module.exports = {
  query: (text, params, callback) => {
    return client.query(text, params, callback);
  },
};
