let router = require('express').Router();

router.get('/', function(req, res, next) {
    res.render('pages/searchResults');
});

module.exports = router;
