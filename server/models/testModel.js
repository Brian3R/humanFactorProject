const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    password:{
        type: Number,
        required: true
    },
    clothing:{
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('User', userSchema)


//User.find()