const express = require('express');
const {authentication}  = require('../middleware/requireAuth');
const {getMemories,addMemory} = require('../controllers/memoryGameControllers');
const router = express.Router()

//get all memories
router.get("/getMemories",getMemories);

//add memory route
router.post('/addMenory',authentication,addMemory);


module.exports = router;