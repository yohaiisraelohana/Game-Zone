const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const generateToken = require("../utils/generatToken");



const authentication = async (req, res, next) => {
  const errorObject = { message: "unauthorized" };
  let userPayload = {};
  try {
      // checking if the access token is valid
      const accessToken = req.cookies.accessToken;
      if (!accessToken) throw {...errorObject,type:"accessToken"};

      try {
          // checking that the access token is not expired
          const {_id,role} = jwt.verify(accessToken, process.env.SECRET);
          userPayload = {_id,role};
          req._id = _id;
          return next();
      }
      catch {
          //if the access token expired, we need to continue and check if the refresh token is valid
          console.log("checking if refresh token is valid");
      }
      // checking if the refresh token is valid token
      const refreshToken = req.cookies.refreshToken;

      if (!refreshToken) throw {...errorObject,type:"refresh"};
      try {
          // checking that the refresh token is not expired
          const {_id,role} = jwt.verify(refreshToken, process.env.SECRET);
          userPayload = {_id,role};
          req._id = _id;
      }
      catch {
          // if the refresh token expired the user will need to login again.
          throw errorObject;
      }
      
      // in case the refresh token is valid, 
      //  we need to make a new access and refresh token
      // and update in db

      // creating a new refresh token
      const newRefreshToken = generateToken({ _id:userPayload._id , role: userPayload.role }, "30m");

      // updating the refresh in db
      const { modifiedCount } = await User.updateOne({ _id: userPayload._id,refresh_token:refreshToken},{refresh_token:refreshToken} );

      //  if the refresh not exsist in the db  
      if (modifiedCount != 1) throw errorObject;
      res.cookie('refreshToken', newRefreshToken);
      
      // creating a new access token
      const newAccessToken = generateToken({ _id:userPayload._id, role: userPayload.role }, "5m");
      res.cookie('accessToken',newAccessToken);
      next();
  }
  catch (error) {
      console.log({error,function:"authentication"});
      return res.status(401).json(error);
  }
}


const authenticationAdmin = ({ user: { role } }, res, next) => {
  if (role == "admin") next();
  else {
      return res.status(401).json({ message: "unauthorized" })
  }
}
module.exports = {authentication,authenticationAdmin};
