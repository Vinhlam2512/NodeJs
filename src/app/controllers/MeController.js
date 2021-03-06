
const Course = require('../models/Course')
const { multipleMongooseToObject } = require('../../util/mongoose');

class MeController {
   
    // [GET] /me/stored/courses
    storedCourses(req, res, next) {

        Promise.all([Course.find({}), Course.countDocumentsDeleted()]) // Destructuring
            .then(([courses, deletedCount]) => res.render('me/stored-courses', {
                deletedCount, // deletedCount: deletedCount,
                courses: multipleMongooseToObject(courses) // courses sẽ truyền sang file .hbs
            }))
            .catch(next);


        // Course.countDocumentsDeleted()
        //     .then(deletedCount => {
        //         console.log('deleted count: ' + deletedCount)
        //     })
        //     .catch(next);

        // Course.find({})
        //     .then((courses) => res.render('me/stored-courses', {
        //         courses: multipleMongooseToObject(courses) // courses sẽ truyền sang file .hbs
        //     })) // render trong views
        //     .catch(next);
    }
    
    // [GET] /me/trash/courses
    trashCourses(req, res, next) {
        Course.findDeleted({})
            .then((courses) => res.render('me/trash-courses', {
                courses: multipleMongooseToObject(courses) // courses sẽ truyền sang file .hbs
            })) // render trong views
            .catch(next);
    }
}

module.exports = new MeController();
