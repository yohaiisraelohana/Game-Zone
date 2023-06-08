const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const memoryGameSchema = new Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    api:{
        type:String,
        required:true,
    },
    img_url:{
        type:String,
        required:false
    },
})




module.exports = mongoose.model("MemoryGame",memoryGameSchema);