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
    keys:{
        type:Array,
        required:false,
        default:[]
    },
    img_keys:{
        type:Array,
        required:false,
        default:[]
    },
    headers:{
        type:Object,
        required:false,
        default:{}
    }

})


module.exports = mongoose.model("MemoryGame",memoryGameSchema);



//access key
//xtNRe-AoJuMXYuvPwwKuJ2zQJl0v9eKShc0Wqwvt_Os

//secret key
//H2_y_nm_7IAYw5Q7nUTn6yiIddXyhtSylEL-1qvCDik
