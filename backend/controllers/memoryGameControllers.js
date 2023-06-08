const MemoryGame = require('../models/memoryGameModel');



//get
const getMemories = async (req,res) => {
    try {
        const {name} = req.query;
        let filter = {};
        if (name) {filter.name = name};

        const memory = await MemoryGame.find(filter);
        res.json(memory)
    } catch (error) {
        
    }
}

//add 
const addMemory = async (req,res) => {
    try {
        

    } catch (error) {
        
    }
}

