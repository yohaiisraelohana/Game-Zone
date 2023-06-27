const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')
const validator = require('validator');



const userSchema = new Schema({
  email:{
      type:String,
      required:true,
      unique:true,
  },
  password:{
      type:String,
      required:true,
  },
  name:{
    type:String,
    required:false,
    unique:true,
  },
  level:{
    type:Number,
    required:false,
    default:1,
  },
  xp:{
    type:Number,
    required:false,
    default:0,
  },
  image: {
    type: String,
    required:false,
    default: "https://img.freepik.com/free-vector/cute-cat-gaming-cartoon_138676-2969.jpg?w=1380&t=st=1686294308~exp=1686294908~hmac=067c1c77b764a597964985eae7d9ce98257146f8acfb48443919a2785a246c4f",
  },
  refresh_token:{
    type:String,
    required:false,
  },
  friends:[
    {
      type: Schema.Types.ObjectId,
      ref:'User',
      required:false,
    }
  ],
  requests:[
    {
      type:Schema.Types.ObjectId,
      ref:'User',
      required:false,
    }
  ],
  role:{
    type:String,
    required:false,
    default:'user',
    enum:['user','admin']
  }
},{timestamps:true})

userSchema.statics.signup = async function (email,password,name){

    //validation
    if(!email || !password){
        throw Error('All fields must be filled ')
    }
    if(!validator.isEmail(email)){
        throw Error('Email is not valid')
    }
    if(!validator.isStrongPassword(password)){
         throw Error('Passowrd not strong enough');
    }
  const exists = await this.findOne({ email })
  if(exists){
    throw Error('Email already in use')
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user  = await this.create({email,password:hash,name})

  return user;
}



userSchema.statics.login = async function(email,password) {
    if(!email || !password){
        throw Error('All fields must be filled ')
    }
    
    const user = await this
      .findOne({ email })
      .populate('friends', '_id image name level xp')
      .populate('requests', '_id image name');
    if(!user){
      throw Error('Incorrect email')
    }

    const match = await bcrypt.compare(password,user.password)
    if(!match){
      throw Error('Incorrect password');
    }
    return user;
}


module.exports = mongoose.model('User',userSchema);