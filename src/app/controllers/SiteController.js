class SiteController {
    // [GET] /
    index(req, res) {
        res.render('home');
    }

    // [GET] /search
    search(req, res) {
        res.render('search'); // render trong views
    }
}

module.exports = new SiteController();
