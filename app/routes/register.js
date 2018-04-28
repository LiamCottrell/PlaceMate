let router = require('express').Router();
let StudentController = require('../serverJS/controllers/student.js');

router.get('/', function(req, res, next) {
    /*If logged in already, redirect to home page*/
    if(req.user){
        res.redirect('/');
    } else {
        res.render('pages/register');
    }

});

router.post('/createUser', function(req, res, next) {
    StudentController.Add(req.body);
    res.redirect("/");
    return res.send();
});

module.exports = router;
