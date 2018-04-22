let router = require('express').Router();

//Here is where the route will get the specific page from the Pages folder
router.get('/', function(req, res, next) {
    res.render('pages/createPlacement');
});

module.exports = router;
