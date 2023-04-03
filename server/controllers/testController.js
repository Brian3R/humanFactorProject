const testModel = require('../models/testModel');
const mongoose = require('mongoose')

//get all users
const getUsers = async (req, res) => {
    const users = await testModel.find({}).sort({createdAt: -1})
    res.status(200).json(users)
}

// get single user
const getUser = async (req,res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No Such User'})
    }
    const user = await testModel.findById(id)
    if(!user){
        return res.status(404).json({error: 'No user'})
    }
    res.status(200).json(user)
}

//post new user
const createUser = async (req,res) => {
    const {name, password, clothing} = req.body
    try{
        const user = await testModel.create({name, password, clothing})
        res.status(200).json(user)
    }catch (error){
        res.status(400).json({error: error.message})
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
    updateUser
}