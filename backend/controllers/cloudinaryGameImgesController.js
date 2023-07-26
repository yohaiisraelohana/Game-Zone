const GameImage = require('../models/cloudinaryGamesImgModel');

//GET
const getGameImages= async(req,res) => {
    try {
        const per_page = req.query.per_page || 12;
        const page = req.query.page -1 || 0;

        const data = await GameImage
            .find()
            .skip(page*per_page)
            .limit(per_page);
        res.json(data);
    } catch (error) {
        res.status(502).json({error});
    }
}

const getGameImagesCount = async(req,res) => {
    try {
        const per_page = req.query.per_page || 12;
        const dataCount = await GameImage.countDocuments();
        res.json({count:dataCount,pages:Math.ceil(dataCount/per_page)});
    } catch (error) {
        res.status(502).json({error});
    }
}


//POST 
const addGameImage = async (req,res) => {
    try {
        const image = new GameImage(req.body);
        await image.save();
        res.json(image);
    } catch (error) {
        console.log(error);
        res.status(502).json({error});
    }
}

//PUT
const upadateGameImage= async (req,res) => {
    try {
        const {id} = req.params;
        const data = await GameImage.findByIdAndUpdate(id,req.body);
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(502).json({error});
    }
}

const deleteGameImages= async (req,res) => {
    try {
        const {id} = req.params;
        const data = await GameImage.findByIdAndDelete(id);
        res.json(data);
    } catch (error) {
        res.status(502).json({error});
    }
}


module.exports = {
    getGameImages,
    getGameImagesCount,
    addGameImage,
    upadateGameImage,
    deleteGameImages
}