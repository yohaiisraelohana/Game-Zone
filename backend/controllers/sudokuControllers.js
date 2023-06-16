const Sudoku = require('../models/sudokuModal');


//GET
const getSudoku = async(req,res) => {
    try {
        let filter = {};
        const {level,page,per_page} = req.query;
        if (level) {filter.level = level}; 
        if (page) {page--}  else {page = 0}; 
        if (!per_page) {per_page = 30};
        const sudoku = await Sudoku
            .find(filter)
            .skip(page*per_page)
            .limit(per_page);

        res.json(sudoku);
    } catch (error) {
        res.status(502).json({error});
    }
}

const getSudokuCount = async(req,res) => {
    try {
        let filter = {};
        const {level,per_page} = req.query;
        if (level) {filter.level = level}; 
        if (!per_page) {per_page = 30};
        const sudokuCount = await Sudoku.countDocuments(filter);
        res.json({count:sudokuCount,pages:Math.ceil(sudokuCount/per_page)});
    } catch (error) {
        res.status(502).json({error});
    }
}


//POST 
const addSudoku = async (req,res) => {
    try {
        const sudoku = new Sudoku(req.body);
        await sudoku.save();
        res.json(sudoku);
    } catch (error) {
        res.status(502).json({error});
    }
}

//PUT
const upadateSudoku = async (req,res) => {
    try {
        const {id} = req.params;
        const sudoku = await Sudoku.findByIdAndUpdate(id,req.body);
        res.json(sudoku);
    } catch (error) {
        res.status(502).json({error});
    }
}

const deleteSudoku = async (req,res) => {
    try {
        const {id} = req.params;
        const sudoku = await Sudoku.findByIdAndDelete(id);
        res.json(sudoku);
    } catch (error) {
        res.status(502).json({error});
    }
}


module.exports = {
    getSudoku,
    getSudokuCount,
    addSudoku,
    upadateSudoku,
    deleteSudoku
}