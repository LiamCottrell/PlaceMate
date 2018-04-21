let router = require('express').Router();
let StudentController = require('../serverJS/controllers/student');
let Student = require('../serverJS/models/student');
let passport = require('passport');
let LocalStrategy = require('passport-local');

router.get('/', function(req, res, next) {
    /*If logged in already, redirect to home page*/
    if(req.user){
        res.redirect('/');
    } else {
        res.render('pages/login');
    }
});

/*
    Create Passport JS strategy to take form details and perform authentication
*/
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    },
    function (email, password, done) {
        /*Get the student from the specified form email*/
        Student.getStudentByEmail(email, function (err, student) {
            if (err) throw err;
            if (!student) {
                /*No student with that email is found then retrun with flash error*/
                return done(null, false, { message: 'Unknown Student' });
            }

            /*Get the password that the user has provided and compare for authentication*/
            Student.comparePassword(password, student.password, function (err, isMatch) {
                if (err) throw err;
                if (isMatch) {
                    /*if password matches record, return as authenticated*/
                    return done(null, student);
                } else {
                    return done(null, false, { message: 'Invalid password' });
                }
            });
        });
    }));

passport.serializeUser(function(student, done) {
    done(null, student.id);
});

passport.deserializeUser(function(id, done) {
    Student.getStudentById(id, function(err, student) {
        done(err, student);
    });
});

/*Post reqeust handeler for form in login page */
router.post('/',
    passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login', failureFlash: true }),
    function (req, res) {
        /*If user is Authentcated, redirect to Index page.*/
        res.redirect('/');
    });

router.get('/get', function(req,res){
  StudentController.FindAll().then( function(users){
       res.json(users);
  });
});

router.post('/remove', function(req,res){
  StudentController.Remove(req.body.Username);
});

router.get('/findOne', function(req,res){
  StudentController.FindOne(req.query.Firstname).then( function(users){
       res.json(users);
  });
});

module.exports = router;
