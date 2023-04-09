const mongoose = require('mongoose')

const Schema = mongoose.Schema

const clothing = new Schema({

            title: String,
            clothing_type: String,
            body_region: Number,
            color: String,
            favorability: Number
    })
    
    const body_region = new Schema({

        type: Array,
        items: [clothing]
})

const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    inventory:{
        type: Array,
        items: [body_region]
    },
    
}, {timestamps: true})

module.exports = mongoose.model('User', userSchema)


//User.find()