const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const sudokuSchema = new Schema({
    level:{
        type:String,
        required:true
    },
    template:{
        type:Array,
        required:true
    }
})

module.exports = mongoose.model("sudoku",sudokuSchema);

