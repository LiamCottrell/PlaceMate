let router = require('express').Router();

<<<<<<< HEAD:app/routes/account.js
router.get('/', function (req, res, next) {
    res.render('pages/account');
=======
//Here is where the route will get the specific page from the Pages folder
router.get('/', function(req, res, next) {
    res.render('pages/createPlacement');
>>>>>>> master:app/routes/createPlacement.js
});

module.exports = router;
