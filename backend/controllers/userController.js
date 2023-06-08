const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

//create toekn
const createToken = (_id) => {
    return jwt.sign({_id},process.env.SECRET,{expiresIn:'60000m'}); 
}



//login user
const loginUser = async(req,res) =>{
   //console.log(req.body);
     const {email,password} = req.body;
    try{
        const user = await User.login(email,password);
        const token = createToken(user._id);
        // res.setHeader(['set-Cookie'],['token',token]);
        res.cookie('token', token,{
          httpOnly:true,
          sameSite:'lax',
          maxAge:3600000,
        });
        res.status(200).json({name: user.name,id: user.id}); 
     }
     catch(error){
       res.status(400).json({error: error.message})
     }
}
//stay login
const stayLogin = async(req,res) =>{
  const  { token } = req.cookies;

  try {
    if(token){
      const decoded = jwt.verify(token,process.env.SECRET);
      const user = await User.findById(decoded._id);
      console.log(user._id.toString());
      return res.status(200).json({name: user.name, id: user._id.toString()});
    }
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}




//signup user
const signUser= async(req,res) =>{
  console.log(req.body);
    const { email , password ,name} = req.body;
    try{
      if (!name) {
        throw Error('Name is required');
      }
      const user = await User.signup(email,password,name);
      const token = createToken(user._id)
      // res.setHeader(['set-Cookie'],['token',token]);
      res.cookie('token', token, {
        httpOnly:true,
        sameSite:'lax',
        maxAge:3600000,
      });
      res.status(200).json({name}) 
    }
    catch(error){
      
      res.status(400).json({error: error.message})
    }
}

//delete user 
const deleteUser = async(req,res) => {
  const id = req.params.id;
  try {
     const workout = await User.deleteMany({user:id})
     const user = await User.findByIdAndDelete(id);
     res.status(200).json(user);
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}



module.exports = {
    signUser,
    loginUser,
    stayLogin,
}
