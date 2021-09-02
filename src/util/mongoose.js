

module.exports = { 
    multipleMongooseToObject: function(mongoose){
        return mongoose.map(mongoose => mongoose.toObject()); // change mongoose to object
    },
    mongooseToObject: function(mongoose){
        return mongoose ? mongoose.toObject() : mongoose;
    }
};

