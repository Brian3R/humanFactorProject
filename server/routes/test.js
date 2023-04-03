const express = require("express");
const router = express.Router();
const {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
} = require('../controllers/testController')

//immport models
const testModel = require("../models/testModel");

//import controllers
const {getTest} = require("../controllers/testController");


//import middlewares

//api routes

// all users
router.get('/', getUsers)
//single user
router.get('/:id', getUser)
//post user
router.post('/', createUser)
//delete user
router.delete('/:id', deleteUser)
// update user
router.patch('/:id', updateUser)


module.exports = router;
