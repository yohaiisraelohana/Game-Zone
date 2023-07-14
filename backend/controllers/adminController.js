const User = require('../models/userModel');
const mongoose = require("mongoose");

const usersListByAdmin = async (req ,res) => {
    try{
      let filter = {};
      const per_page = req.query.per_page || 50;
      const page = req.query.page - 1 || 0;
      const name = req.query.name;
      const sort = req.query.sort || "_id";
      const reverse = req.query.reverse == "yes" ? 1 : -1;
      console.log(sort);

      if(name) {
        filter.name = new RegExp(name,"i");
      }
      
      const users = await User.find(filter,{password:0})
        .limit(per_page)
        .skip(per_page * page)
        .sort({[sort]:reverse});

      res.status(200).json(users);
    }
      catch(error){
        console.log(error);
        return res.status(500).json({error,location:"usersList"});
      }
}

//update user
const updateUserByAdmin = async (req, res) => {
    try {
      const admin = await User.find({_id:req._id,role:req.role}); // check if role is in the req
      if(!admin) return res.status(400).json("unutherized for update");
      const user = await User.findById(req.params.id);
      const {xp,level,role} = req.body;
      if (xp)user.xp = xp;
      if (level)user.level = level;
      if (role)user.role = role;
      await user.save();
      res.status(200).json(user);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error,location:"updateUser" });
    }
};

//delete user
const deleteUserByAdmin = async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      user.name = "Deleted Account";
      user.email = user._id + "@gmail.com";
      user.image = "https://img.freepik.com/free-vector/cute-cat-gaming-cartoon_138676-2969.jpg?w=1380&t=st=1686294308~exp=1686294908~hmac=067c1c77b764a597964985eae7d9ce98257146f8acfb48443919a2785a246c4f";
      await user.save();
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ error,location:"deleteUser" });
    }
};

module.exports = {
    updateUserByAdmin,
    deleteUserByAdmin,
    usersListByAdmin
}


