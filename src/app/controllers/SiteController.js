
const Course = require('../models/Course')
const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    // [GET] /
    index(req, res, next) {
        Course.find({})
            .then(courses => {

                res.render('home', { 
                    courses: multipleMongooseToObject(courses)
                 })
            })
            // {courses} <=> {courses: courses}
            .catch(next); // next is function

        // Course.find({}, function(err, courses) {
        //     if(!err){
        //         res.json(courses);
        //     }else{
        //         res.status(400).json({error: 'fail'});
        //     }
        // })

        
    }

    // [GET] /search
    search(req, res) {
        res.render('search'); // render trong views
    }
}

module.exports = new SiteController();
