require("dotenv").config();

const jwt = require("jsonwebtoken");
const auth = (req, res, next) => {
  // console.log("step 1");
  const token = req.headers["authorization"].replace("Bearer ", "");

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.ACCESS_SECRET);
      req.decoded = decoded;
      next();
    } catch (err) {
      //console.log("step 3");
      return res.status(401).send({
        status: "error",
        message: "unauthories",
      });
    }
  } else {
    return res.status(403).json({ status: "error", message: "unauthories" });
  }
};

module.exports = auth;
