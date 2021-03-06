
const mongoose = require('mongoose');
async function connect() {

    try {
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("connect done");
    } catch (err) {
        console.log("connect fail");
    }
}

module.exports = { connect };