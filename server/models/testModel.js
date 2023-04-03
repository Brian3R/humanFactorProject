const mongoose = require('mongoose')

const Schema = mongoose.Schema

const clothing = new Schema({

            title: String,
            clothing_type: String,
            description: String,
            body_region: Number,
            color: String,
            favorability: Number
    })
    

const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    password:{
        type: Number,
        required: true
    },
    inventory:{
        type: Array,
        items: [clothing]
    },
    
}, {timestamps: true})

module.exports = mongoose.model('User', userSchema)


//User.find()