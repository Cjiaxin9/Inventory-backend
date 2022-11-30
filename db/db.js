const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  port: "5432",
  user: "db_user",
  password: "123456",
  database: "vendingworld",
});

client.connect((err) => {
  if (err) {
    console.error("connection error", err.stack);
  } else {
    console.log("connected to vending nation database");
  }
});

module.exports = {
  query: (text, params, callback) => {
    return client.query(text, params, callback);
  },
};
