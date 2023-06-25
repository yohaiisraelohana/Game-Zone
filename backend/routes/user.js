const express = require('express');
const {removeFriendRequest,usersList,signUser,loginUser,friendRequest,stayLogin,acceptFriendRequest, updateUser} = require('../controllers/userController')
const {authentication}  = require('../middleware/requireAuth');
const {validateSignUp,validateLogin, validateUpdateUser} = require('../middleware/validation');
const { getSignature } = require('../utils/uploadImage');

const router = express.Router()

//upload image route
router.get("/uploadImage",authentication,getSignature);

//users List
router.get("/usersList/:name",usersList);

//login route
router.post('/login',validateLogin,loginUser)

//stay login route
router.post('/stayLogin',stayLogin)

//signup route
router.post('/signup',validateSignUp,signUser)

//send friend request 
router.post('/sendFriendRequest/:id',authentication,friendRequest);

//accept friend request
router.post('/acceptFriendRequest/:id',authentication,acceptFriendRequest);

//remove friend request
router.post('/removeFriendRequest/:id',authentication,removeFriendRequest);

//update user
router.put('/:id',authentication,validateUpdateUser,updateUser);


module.exports = router;