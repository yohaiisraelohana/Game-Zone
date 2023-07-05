const Joi = require('joi');


const validateLogin = (req,res,next) =>{
    console.log("login");
    const schema = Joi.object({
        email: Joi.string().min(8).max(40).required(),
        password: Joi.string().min(5).max(40).required(),
    })
    const {error} = schema.validate(req.body)
    if(error){
        return res.status(400).json({
            error: error.details[0].message
        })
    }
    next();
}

const validateSignUp = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().min(8).max(40).email().required(),
        password: Joi.string().min(5).max(40).required(),
        name: Joi.string().min(2).max(40).required(),
    })
    const { error } = schema.validate(req.body);
    if(error){
        return res.status(400).json({
            error: error.details[0].message
        })
    }
    next();
}

const validateUpdateUser = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().min(8).max(40).email(),
        password: Joi.string().min(5).max(40),
        name: Joi.string().min(2).max(40),
        friends: Joi.array(),
        image: Joi.string().min(3).max(400),
        xp: Joi.number().min(0).max(10000000000000),
        level:Joi.number().min(1).max(1000000000),
        requests:Joi.array(),
    })
    const { error } = schema.validate(req.body);
    if(error){
        return res.status(400).json({
            error: error.details[0].message
        })
    }
    next();
}

const validateMemoryGame = (req,res,next) => {
    const schema = Joi.object({
        name:Joi.string().min(2).max(30).required(),
        img_url:Joi.string().min(2).max(400),
        api:Joi.string().min(3).max(300).required(),
        keys:Joi.array(),
        img_keys:Joi.array(),
        headers:Joi.object()
    });
    const {error} = schema.validate(req.body);
    if (error) {
        return res.status(400).json({
            error: error.details[0].message
        })
    }
    next();
} 

const validateSudoku = (req,res,next) => {
    const schema = Joi.object({
        level:Joi.string().min(2).max(50).required(),
        template:Joi.array().required()
    });
    const {error} = schema.validate(req.body);
    if (error) {
        return res.status(400).json({
            error: error.details[0].message
        })
    }
    next();
}

const validateCLoudinaryGameImage = (req,res,next) => {
    const schema = Joi.object({
        name:Joi.string().min(2).max(300).required(),
        route:Joi.string().max(300).required(),
        src:Joi.string().min(2).max(300).required()
    });
    const {error} = schema.validate(req.body);
    if (error) {
        return res.status(400).json({
            error: error.details[0].message
        })
    }
    next();
}



module.exports = {
    validateLogin,
    validateSignUp,
    validateUpdateUser,
    validateMemoryGame,
    validateSudoku,
    validateCLoudinaryGameImage
}


