const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const mongoose = require("mongoose");

//create toekn
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "60000m" });
};

// //send friend request
// const friendRequest = async (req, res) => {
//   const { _id: senderId } = req;
//   const { id: recipientId } = req.params;
//   if (!recipientId) {
//     return res.status(400).json({ error: "Recipient not found" });
//   }
//   try {
//     const [sender, recipient] = await Promise.all([
//       await User.findOneAndUpdate(
//         {
//           _id: senderId,
//           pendingFriendRequests: { $nin: [recipientId] },
//         },
//         { $push: { pendingFriendRequests: recipientId } }
//       ),
//       await User.findOneAndUpdate(
//         { _id: recipientId },
//         { $addToSet: { requests: senderId } }
//       ),
//     ]);
//     if(!recipient || !sender) {
//       return res.status(400).json({ error: "Could not send request"});
//     }
//     return res.status(200).json({ message: "Friend request sent" });
//   } catch (error) {
//     console.log(error.message);
//    res.status(500).json({ error: "Friend request failed" });
//   }
// };


//send friend request
const friendRequest2 = async (req, res) => {
  const { _id: senderId } = req;
  const { id: recipientId } = req.params;
  if (!recipientId) {
    return res.status(400).json({ error: "Recipient not found" });
  }
  try {
    let recipient = await User.findById(recipientId);

    const exist = recipient.requests.find((i) => i === senderId);
    if (exist) {
      recipient.requests = recipient.requests.filter((i) => i !== senderId);
    } else {
      recipient.requests.push(senderId);
    }

    await recipient.save();
    return res.status(200).json({ message: "Friend request sent" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: 'Friend request failed' });
  }
};


//accept friend request
  const acceptFriendRequest = async(req,res) =>{
    const { _id: recipientId } = req;
    const { id: senderId } = req.params;
   try{
    let recipient = await User.findById(recipientId);
    let sender = await User.findById(senderId);
    const exist = recipient.requests.find((i) => i === senderId);
    if(exist){
      recipient.requests = recipient.requests.filter((i) => i !== senderId);
      recipient.friends.push(senderId);
      sender.friends.push(recipientId);
    }
    await recipient.save();
    await sender.save();
  }
  catch(error){
    console.log(error.message);
    res.status(500).json({ error: 'Friend accept failed' });
  }
  }


//login user
const loginUser = async (req, res) => {
  //console.log(req.body);
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    // res.setHeader(['set-Cookie'],['token',token]);
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 3600000,
    });
    res.status(200).json({ name: user.name, id: user.id });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//stay login
const stayLogin = async (req, res) => {
  const { token } = req.cookies;
  try {
    if (token) {
      const decoded = jwt.verify(token, process.env.SECRET);
      const user = await User.findById(decoded._id);
      console.log(user._id.toString());
      return res.status(200).json({ name: user.name, id: user._id.toString() });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


//signup user
const signUser = async (req, res) => {
  console.log(req.body);
  const { email, password, name } = req.body;
  try {
    if (!name) {
      throw Error("Name is required");
    }
    const user = await User.signup(email, password, name);
    const token = createToken(user._id);
    // res.setHeader(['set-Cookie'],['token',token]);
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 3600000,
    });
    res.status(200).json({ name });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete user
const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findByIdAndDelete(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
    signUser,
    loginUser,
    stayLogin,
<<<<<<< HEAD
    friendRequest
=======
    friendRequest2,
>>>>>>> 482c2e6449449f81f589697dcd23b6eb078a33a6
}
