const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const authentication = async (req, res, next) => {
  const {token} = req.cookies;
  if (!token) {
    //res.redirect("/login");
    return res.status(401).json({
      message: "Authentication Failed",
    });
  }
  
  try {
    const { _id } = jwt.verify(token, process.env.SECRET);
    const user = await User.findOne({ _id }).select("_id");
    req._id = _id;
    next();
  } catch (err) {
    console.log("FAILED");
    res.status(401).json({ message: err.message });
  }
};

const authenticationAdmin = (req,res,next) => {
  console.log("coming soon");
  next();
}

module.exports = {authentication,authenticationAdmin};
