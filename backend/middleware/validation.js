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
        name: Joi.string().min(5).max(40).required(),
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
        img_keys:Joi.array()
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
    validateMemoryGame
}


