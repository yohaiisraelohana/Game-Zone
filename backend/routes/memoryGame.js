const express = require('express');
const {authenticationAdmin}  = require('../middleware/requireAuth');
const {validateMemoryGame, validateSudoku} = require('../middleware/validation');
const {getMemories,addMemory, updateMemory, deleteMemory, getMemoryCount} = require('../controllers/memoryGameControllers');
const router = express.Router()

//get all memories
router.get("/",getMemories);
router.get("/count",getMemoryCount);

//add memory route
router.post("/",authenticationAdmin,validateMemoryGame,addMemory);

//update memory route
router.put("/:id",authenticationAdmin,validateSudoku,updateMemory);

//delete memory route
router.delete("/:id",authenticationAdmin,deleteMemory);



module.exports = router;