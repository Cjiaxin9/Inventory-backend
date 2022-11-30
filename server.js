require("dotenv").config(); // to read the env file
const express = require("express"); //import your library
const cors = require("cors"); //import your CORS package

const app = express(); //create an app for your library

//create the table - comment out after first run
const table = require("./Create_table/create_table");
table();

//input the insert- comment out after first run
const input = require("./Create_table/input");
input();

app.use(cors()); //tell server please IGNORE the CORS, do not need to lock it down
app.use(express.json()); //is a method inbuilt in express to recognize the incoming Request Object as a JSON Object.
app.use(express.urlencoded({ extended: false })); //express.urlencoded() is a method inbuilt in express to recognize the incoming Request Object as strings or arrays.

//app listener Port
const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});

// for Login
const users = require("./router/users");

app.use("/users", users);

// for purchase
const purchase = require("./router/purchase");

app.use("/purchase", purchase);

// for purchase_product
const purchase_product = require("./router/purchase_product");

app.use("/purchaseproduct", purchase_product);

// for purchase_totalamount page
const purchase_totalamount = require("./router/product_totalamount");

app.use("/purchasetotalamount", purchase_totalamount);

// for withdraw page
const withdraw = require("./router/withdraw");

app.use("/withdraw", withdraw);

// for withdraw product page
const withdrawproduct = require("./router/withdraw_product");

app.use("/withdrawproduct", withdrawproduct);

// for stockbalance page
const stockbalance = require("./router/stock_balance");

app.use("/stockbalance", stockbalance);

// for company page
const company = require("./router/company");

app.use("/company", company);

// for unit page
const unit = require("./router/unit");

app.use("/unit", unit);

// for location page
const location = require("./router/location");

app.use("/location", location);

// for category page
const category = require("./router/category");

app.use("/category", category);

// for Product List page
const productList = require("./router/ProductList");

app.use("/productlist", productList);
// for Product List page
const role = require("./router/role");

app.use("/role", role);
//for stockin
const stockin = require("./router/stockin");

app.use("/stockin", stockin);
//for stockinproduct
const stockinproduct = require("./router/stockin_product");

app.use("/stockinproduct", stockinproduct);
