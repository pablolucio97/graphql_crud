import mongoose from 'mongoose'

const Schema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    email:{
        type: String,
    },
    active:{
        type: Boolean,
    },

})

const userModel = mongoose.model('User', Schema)

export {userModel}