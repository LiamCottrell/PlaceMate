let router = require('express').Router();

router.get('/', function(req, res, next) {
    res.render('pages/placementInfo');
});

module.exports = router;
