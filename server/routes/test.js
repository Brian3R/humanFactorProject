const express = require("express");
const router = express.Router();
const {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    getUserByName,
    loginUser,
    signUpUser
} = require('../controllers/testController')

//immport models
const testModel = require("../models/testModel");

//import controllers
const {getTest} = require("../controllers/testController");


//import middlewares

//api routes
// all users
router.get('/', getUsers)
// user by name
router.get('/search/:name',getUserByName)
//single user
router.get('/:id', getUser)
// login user
router.post('/login', loginUser)
//sign up user
router.post('/signup', signUpUser)
//post user
router.post('/', createUser)
//delete user
router.delete('/:id', deleteUser)
//delete all users
//router.delete('/', deleteUsers)
// update user
router.patch('/:id', updateUser)


module.exports = router;
