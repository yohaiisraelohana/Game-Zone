const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const cloudinaryGameImgSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    route:{
        type:String,
        required:true
    },
    src:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("cloudinaryGameImg",cloudinaryGameImgSchema);

