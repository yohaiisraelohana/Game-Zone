const express = require('express');
const {authenticationAdmin, authentication}  = require('../middleware/requireAuth');
const {validateCLoudinaryGameImage} = require('../middleware/validation');
const { getGameImages, getGameImagesCount, addGameImage, upadateGameImage, deleteGameImages } = require('../controllers/cloudinaryGameImgesController');
const router = express.Router()

//get all memories
router.get("/",getGameImages);
router.get("/count",getGameImagesCount);

//add memory route
router.post("/",authentication,authenticationAdmin,validateCLoudinaryGameImage,addGameImage);

//update memory route
router.put("/:id",authentication,authenticationAdmin,validateCLoudinaryGameImage,upadateGameImage);

//delete memory route
router.delete("/:id",authentication,authenticationAdmin,deleteGameImages);



module.exports = router;