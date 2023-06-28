const express = require('express');
const { validateSudoku } = require('../middleware/validation');
const { authenticationAdmin, authentication } = require('../middleware/requireAuth');
const { getSudoku, getSudokuCount, addSudoku, upadateSudoku, deleteSudoku } = require('../controllers/sudokuControllers');
const router = express.Router()


//get all sudoku
router.get("/",getSudoku);
//get sudoku count
router.get("/count",getSudokuCount);

//add sudoku route
router.post("/",authentication,authenticationAdmin,validateSudoku,addSudoku);

//update sudoku
router.put("/:id",authentication,authenticationAdmin,validateSudoku,upadateSudoku);

//delete sudoku
router.delete("/:id",authentication,authenticationAdmin,deleteSudoku);

module.exports = router;