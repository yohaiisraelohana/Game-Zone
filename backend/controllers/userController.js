const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const mongoose = require("mongoose");

//create toekn
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "60000m" });
};

//send friend request
const friendRequest2 = async (req, res) => {
  const { _id: senderId } = req;
  const { id: recipientId } = req.params;
  if (!recipientId) {
    return res.status(400).json({ error: "Recipient not found" });
  }
  try {
    let recipient = await User.findById(recipientId);
    console.log(recipient.requests);
    const exist = recipient.requests.find((i) =>i.toString() === senderId.toString());
    if (exist) {
      recipient.requests = recipient.requests.filter((i) => i !== senderId);
      await recipient.save();
      return res.status(202).json({message:"Declined friend request"})
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
  let recipient = await User.findById(recipientId);
  let sender = await User.findById(senderId);
  if(!recipient || !sender){
    return res.status(404).json({ message: 'Accept friend request failed' });
  }
 try{
  const exist = recipient.requests.find((i) => i.toString() === senderId.toString());
  console.log(exist);
  if(exist){
    recipient.requests = recipient.requests.filter((i) => i.toString() !== senderId.toString());
    recipient.friends.push(senderId);
    sender.friends.push(recipientId);
  }
  else{
    return res.status(404).json({ message:'Failed'});
  }
  await recipient.save();
  await sender.save();
  return res.status(200).json({ message: "Friend request sent" });
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
      const user = await User.findById(decoded._id,{password:0});
      console.log(user._id.toString());
      return res.status(200).json(user);
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

const updateImage = async (req, res) => {
  
}

module.exports = {
    signUser,
    loginUser,
    stayLogin,
    acceptFriendRequest,
    friendRequest2,
}
