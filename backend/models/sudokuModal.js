<<<<<<< HEAD
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

=======

module.exports = mongoose.model("MemoryGame",memoryGameSchema);
>>>>>>> 0db21738b4897392b7120b5c1e6fa062db93dfe5
