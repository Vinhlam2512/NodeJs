
const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');


const Schema = mongoose.Schema;

// define model for database

const Course = new Schema({
    name : {type: String, required: true},
    description : {type: String},
    image : {type: String},
    videoId : {type: String,required: true},
    level : {type: String},
    slug: { type: String, slug: 'name', unique: true },
}, {
    timestamps: true, // get time created and updated
    autoIndex: true 
});

// add pulgin
mongoose.plugin(slug);
Course.plugin(mongooseDelete, { 
    overrideMethods: 'all',
    deletedAt : true, 
});

module.exports = mongoose.model('Course', Course);