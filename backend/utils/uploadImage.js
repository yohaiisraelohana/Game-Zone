const cloudinary = require('cloudinary').v2;

const cloud_name = 'dhojbnefp';
const api_key = '755684193658436';
const api_secret = 'vk4p7PmBI7p5rPKKH7HtJQQNTXs';

cloudinary.config({
  cloud_name,
  api_key,
  api_secret,
});

const getSignature = (req, res) => {
    const timestamp = Math.round(new Date().getTime() / 1000); // Current UNIX timestamp
    const signature = cloudinary.utils.api_sign_request(
      { timestamp },
      api_secret
    );
  
    res.json({ signature, timestamp ,api_key});
}

module.exports = {
    getSignature
}

