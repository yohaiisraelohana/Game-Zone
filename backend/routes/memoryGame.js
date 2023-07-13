const express = require('express');
const {authenticationAdmin, authentication}  = require('../middleware/requireAuth');
const {validateMemoryGame} = require('../middleware/validation');
const {getMemories,addMemory, updateMemory, deleteMemory, getMemoryCount} = require('../controllers/memoryGameControllers');
const router = express.Router()

//get all memories
router.get("/",getMemories);
router.get("/count",getMemoryCount);

//add memory route
router.post("/",authentication,authenticationAdmin,validateMemoryGame,addMemory);

//update memory route
router.put("/:id",authentication,authenticationAdmin,validateMemoryGame,updateMemory);

//delete memory route
router.delete("/:id",authentication,authenticationAdmin,deleteMemory);



module.exports = router;