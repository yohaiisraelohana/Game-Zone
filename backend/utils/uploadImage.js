const cloudinary = require('cloudinary').v2;
require('dotenv').config();

const cloud_name = process.env.CLOUD_NAME; 
const api_key = process.env.API_KEY;
const api_secret = process.env.API_SECRET;

cloudinary.config({
  cloud_name,
  api_key,
  api_secret,
});

const getSignature = (req, res) => {
    const timestamp = Math.round(new Date().getTime() / 1000); // Current UNIX timestamp
    const signObject = {timestamp};

    const public_id = req.query.public_id;
    if (public_id) signObject.public_id = public_id;

    const signature = cloudinary.utils.api_sign_request(
      signObject,
      api_secret
    );
    const returnedSign = {signature,timestamp,api_key};
    if (public_id) returnedSign.public_id = public_id;
  
    res.json(returnedSign);
}

module.exports = {
    getSignature
}

