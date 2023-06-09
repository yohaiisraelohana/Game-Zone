const MemoryGame = require('../models/memoryGameModel');



//get
const getMemories = async (req,res) => {
    try {
        const {name} = req.params;
        let filter = {};
        if (name) {filter.name = name};
        const memory = await MemoryGame.find(filter);
        res.json(memory)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

//add 
const addMemory = async (req,res) => {
    try {
        const memory = new MemoryGame(req.body);
        await memory.save();
        res.json(memory);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    getMemories,
    addMemory
}