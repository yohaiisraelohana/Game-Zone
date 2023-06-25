const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const mongoose = require("mongoose");

//create toekn
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "60000m" });
};

const usersList = async (req ,res) => {
  try{
    let name = req.params.name;
    if(!name){
      return res.status(400).json({ error: "Name is required" });
    }
    name = new RegExp(name,"i");
    const users = await User.find({name:name});
    res.status(200).json(users);
  }
    catch(error){
      console.error(error);
      return res.status(500).json({error: "Failed to send users name"});
    }
}


//send friend request
const friendRequest = async (req, res) => {
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
      recipient.requests = recipient.requests.filter((i) => i.toString !== senderId.toString());
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

//stay login
const stayLogin = async (req, res) => {
  const { token } = req.cookies;
  try {
    if (token) {
      const decoded = jwt.verify(token, process.env.SECRET);
      const user = await User
        .findById(decoded._id,{password:0})
        .populate('friends', '_id image name level xp')
        .populate('requests', '_id image name');
      console.log(user._id.toString());
      return res.status(200).json(user);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


//accept friend request
const acceptFriendRequest = async(req, res, next) =>{
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
  next();
  // return res.status(200).json(recipient);
}
catch(error){
  console.log(error.message);
  res.status(500).json({ error: 'Friend accept failed' });
}
}


//remove friend 
const removeFriendRequest = async (req, res, next) => {
    const {id : friend_id} = req.params;
    const {_id: user_id} = req;
    let friend = await User.findById(friend_id);
    let user = await User.findById(user_id);
    if(!friend|| !user){
      return res.status(404).json({ message: 'Remove friend failed - User not exist'});
    }
  try {
    friend.friends = friend.friends.filter((i) => i.toString() !== user_id.toString());
    user.friends = user.friends.filter((i) => i.toString() !== friend_id.toString());
    await friend.save();
    await user.save();
    next();
    // return res.status(200).json(user);
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({error:'Friend remove failed'})
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
    user.password = "*****";
    res.status(200).json(user);
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
      sameSite: "strict",
      maxAge: 3600000,
    });
    user.password = "******";
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


//update user
const updateUser = async (req, res) => {
  try {
    console.log(req.body);
    const user = await User.findById(req._id);
    const {xp,level,image,friends} = req.body;
    if (xp)user.xp = xp;
    if (level)user.level = level;
    if (image)user.image = image;
    if (friends)user.friends = friends;
    await user.save();
    res.status(200).json(user);
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
    usersList,
    signUser,
    loginUser,
    stayLogin,
    acceptFriendRequest,
    friendRequest,
    updateUser,
    removeFriendRequest,
}
