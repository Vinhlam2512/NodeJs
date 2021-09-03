
const Course = require('../models/Course')
const { multipleMongooseToObject } = require('../../util/mongoose');

class MeController {
   
    // [GET] /me/stored/courses
    storedCourses(req, res) {
        Course.find({})
            .then((courses) => res.render('me/stored-courses', {
                courses: multipleMongooseToObject(courses) // courses sẽ truyền sang file .hbs
            })) // render trong views
    }
}

module.exports = new MeController();
