
const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

// define model for database

const Course = new Schema({
    name : {type: String, required: true},
    description : {type: String},
    image : {type: String},
    videoId : {type: String,required: true},
    slug: { type: String, slug: 'name', unique: true },
    level : {type: String},
}, {
    timestamps: true, // get time created and updated
    autoIndex: true 
} );

module.exports = mongoose.model('Course', Course);