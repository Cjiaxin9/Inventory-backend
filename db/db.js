const { Client } = require("pg");

const client = new Client({
  host: "dpg-ce3h9a2rrk02ufihqma0-a.singapore-postgres.render.com",
  port: "5432",
  user: "vendingworld_user",
  password: "J7lO1QmzfFHtUf2yLTY9m7HLlM480o3k",
  database: "vendingworld",
  ssl: true,
  // host: "localhost",
  // port: "5432",
  // user: "db_user",
  // password: "123456",
  // database: "vendingworld",
});

postgres: client.connect((err) => {
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
