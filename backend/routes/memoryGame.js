const express = require('express');
const {authentication}  = require('../middleware/requireAuth');
const {validateMemoryGame} = require('../middleware/validation');
const {getMemories,addMemory} = require('../controllers/memoryGameControllers');
const router = express.Router()

//get all memories
router.get("/",getMemories);

//add memory route
router.post("/",validateMemoryGame,addMemory);
//router.post('/',authentication,addMemory);


module.exports = router;