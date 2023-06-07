const express = require('express');
const {signUser,loginUser,test,stayLogin} = require('../controllers/userController')
const {authentication}  = require('../middleware/requireAuth');
const {validateSignUp,validateLogin} = require('../middleware/validation');

const router = express.Router()

//login route
router.post('/login',validateLogin,loginUser)

//stay login route
router.post('/stayLogin',stayLogin)

//signup route
router.post('/signup',validateSignUp,signUser)

//authentication
router.get('/test',authentication,test);


module.exports = router;