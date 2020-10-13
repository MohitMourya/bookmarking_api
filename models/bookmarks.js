const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

//DB Schema
const bookmarkSchema = mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    url: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    time_created: {
        type: Number,
        required: true
    },
    time_updated: {
        type: Number,
        required: true
    },
    publisher: {
        type: String,
        required: true,
    },
    tags: {
        type: Array
    }
});

bookmarkSchema.plugin(uniqueValidator)
module.exports = mongoose.model('Bookmark', bookmarkSchema);