const testModel = require('../models/testModel');
const mongoose = require('mongoose')

//get all users
const getUsers = async (req, res) => {
    const users = await testModel.find({}).sort({createdAt: -1})
    res.status(200).json(users)
}

// get single user
const getUser = async (req,res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No Such User here'})
    }
    const user = await testModel.findById(id)
    if(!user){
        return res.status(404).json({error: 'No user'})
    }
    res.status(200).json(user)
}

//get user by username
const getUserByName = async (req,res) => {
    const user = await testModel.findOne({name: req.params.name})
    if(!user){
        return res.status(404).json({error: 'No user found'})
    }
    res.status(200).json(user)
}
//post new user
const createUser = async (req,res) => {
    const {name, password, inventory} = req.body
    try{
        const user = await testModel.create({name, password, inventory})
        res.status(200).json(user)
    }catch (error){
        res.status(400).json({error: error.message})
    }
}
//login
const loginUser = async (req,res) => {
    const {name, password} = req.body
    const user = await testModel.findOne({name})
    if(!user){
        return res.status(404).json({error: 'No user found'})
    }
    const pass_check = password === user.password
    if(pass_check){
        res.json({success: true})
    }
    else{
        res.json({success: false, message: 'Invalid password'})
    }
}
//sign up user
const signUpUser = async (req,res) => {
    const {name, password} = req.body
    const user = await testModel.findOne({name})
    if(!user){
        res.json({success: true, message: 'Open UserName'})
    }
    else{
        res.status(404).json({success: false, message: 'Username Taken'}) 
    }
    
}
//delete workout
const deleteUser = async (req, res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No Such User'})
    }
    const user = await testModel.findOneAndDelete({_id: id})
    if(!user){
        return res.status(404).json({error: 'No user'})
    }
    res.status(200).json(user)
}

//delete all users
//delete workout
/*const deleteUsers = async (req, res) =>{
    const users = await testModel.findOneAndDelete({})
    res.status(200).json(users)
}*/

//update workout
const updateUser = async (req, res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No Such User'})
    }
    const user = await testModel.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    if(!user){
        return res.status(404).json({error: 'No user'})
    }
    res.status(200).json(user)
}

//export
module.exports ={
    getUsers,
    getUser,
    createUser,
    deleteUser,
    //deleteUsers,
    updateUser,
    getUserByName,
    loginUser,
    signUpUser
}