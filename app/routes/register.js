let router = require('express').Router();


var Student = require('../serverJS/models/student.js');

router.get('/', function(req, res, next) {
    /*If logged in already, redirect to home page*/
    if(req.user){
        res.redirect('/');
    } else {
        res.render('pages/register');
    }

});

router.post('/', function(req, res, next) {

	/*Aquire Information from POST Request and asign to variables*/
    var first_name = req.body.first_name;
    var last_name = req.body.last_name;
    var email = req.body.email;
    var city = req.body.city;
    var date_of_birth = req.body.date_of_birth;
    var password = req.body.password;
    var password_confirm = req.body.password_confirm;

    var newStudent = new Student({
    	first_name: first_name,
    	last_name: last_name,
    	email: email,
    	city: city,
    	date_of_birth: date_of_birth,
    	password: password
    });

    Student.createStudent(newStudent, function(err, student){
    	if(err) throw err;
    	console.log(student);
    });

    res.redirect('/');

});

module.exports = router;