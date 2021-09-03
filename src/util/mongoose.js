

module.exports = { 
    multipleMongooseToObject: function(mongoose){
        return mongoose.map(mongoose => mongoose.toObject()); // change mongoose to object (when have many document)
    },
    mongooseToObject: function(mongoose){
        return mongoose ? mongoose.toObject() : mongoose; // change mongoose to object (when have one document)
    }
};

