import mongoose from 'mongoose'

const Schema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },

    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

})

const postModel = mongoose.model('Post', Schema)

export { postModel }