const { Client } = require("pg");

const client = new Client({
  host: "dpg-ce3kkada4999gmf8muig-a.singapore-postgres.render.com",
  port: "5432",
  user: "vendingworld_k1z9_user",
  password: "u9gugib3MNaok3nNKqqM46NWImSZmM0i",
  database: "vendingworld_k1z9",
  ssl: true,
  // host: "localhost",
  // port: "5432",
  // user: "db_user",
  // password: "123456",
  // database: "vendingworld",
});
// postgres://vendingworld_k1z9_user:u9gugib3MNaok3nNKqqM46NWImSZmM0i@dpg-ce3kkada4999gmf8muig-a.singapore-postgres.render.com/vendingworld_k1z9
postgres: client.connect((err) => {
  if (err) {
    console.error("connection error", err.stack);
  } else {
    console.log("connected to vending world database");
  }
});

module.exports = {
  query: (text, params, callback) => {
    return client.query(text, params, callback);
  },
};
