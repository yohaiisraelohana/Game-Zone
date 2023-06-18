const express = require('express');
const { validateSudoku } = require('../middleware/validation');
const { authenticationAdmin } = require('../middleware/requireAuth');
const { getSudoku, getSudokuCount, addSudoku, upadateSudoku, deleteSudoku } = require('../controllers/sudokuControllers');
const router = express.Router()


//get all sudoku
router.get("/",getSudoku);
//get sudoku count
router.get("/count",getSudokuCount);

//add sudoku route
router.post("/",authenticationAdmin,validateSudoku,addSudoku);

//update sudoku
router.put("/:id",authenticationAdmin,validateSudoku,upadateSudoku);

//delete sudoku
router.delete("/:id",authenticationAdmin,deleteSudoku);

module.exports = router;