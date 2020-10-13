const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

//DB Schema
const tagSchema = mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true,
        unique: true
    },
    time_created: {
        type: Number,
        required: true
    },
    time_updated: {
        type: Number,
        required: true
    }
});

tagSchema.plugin(uniqueValidator)
module.exports = mongoose.model('Tag', tagSchema);