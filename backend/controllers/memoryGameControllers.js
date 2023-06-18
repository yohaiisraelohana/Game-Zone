const MemoryGame = require('../models/memoryGameModel');



//get 
const getMemories = async (req,res) => {
    try {
        const {name} = req.params;
        let {page,per_page} = req.query;
        let filter = {};
        if (name) {filter.name = name};
        if (page) {page--} else {page=0}
        if (!per_page) {per_page = 20};
        const memory = await MemoryGame.find(filter);
        res.json(memory)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getMemoryCount = async(req,res) => {
    try {
        let filter = {};
        let {per_page} = req.query;
        if (!per_page) {per_page = 20};
        const memoryCount = await Sudoku.countDocuments(filter);
        res.json({count:memoryCount,pages:Math.ceil(memoryCount/per_page)});
    } catch (error) {
        res.status(502).json({error});
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

const updateMemory = async(req,res) => {
    try {
        const {id} = req.params;
        const memory = await MemoryGame.findByIdAndUpdate(id,req.body);
        res.json(memory);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const deleteMemory = async (req,res) => {
    try {
        const {id} = req.params;
        const memory = await MemoryGame.findByIdAndDelete(id)
        res.json(memory);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    getMemories,
    addMemory,
    updateMemory,
    deleteMemory,
    getMemoryCount
}