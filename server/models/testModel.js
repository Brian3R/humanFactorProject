const mongoose = require('mongoose')

const Schema = mongoose.Schema

const subSchema = new Schema({

            title: String,
            body_region: Number,
            color: String,
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
        items: [subSchema]
    },
    
}, {timestamps: true})

module.exports = mongoose.model('User', userSchema)


//User.find()