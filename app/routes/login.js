let router = require('express').Router();
let StudentController = require('../serverJS/controllers/student');
let Student = require('../serverJS/models/student');
let passport = require('passport');
let LocalStrategy = require('passport-local');
let LinkedInStrategy = require('passport-linkedin');
let CompanyController = require('../serverJS/controllers/company');

router.get('/', function (req, res, next) {
    /*If logged in already, redirect to home page*/
    if (req.user) {
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
                return done(null, false, {message: 'Unknown Student'});
            }

            /*Get the password that the user has provided and compare for authentication*/
            Student.comparePassword(password, student.password, function (err, isMatch) {
                if (err) throw err;
                if (isMatch) {
                    /*if password matches record, return as authenticated*/
                    return done(null, student);
                } else {
                    return done(null, false, {message: 'Invalid password'});
                }
            });
        });
    }));

/*
Configuration of Linkedin Authentication Strategy
Did it in the most in-secure way possible due to time constraints
 */
passport.use(new LinkedInStrategy({
        consumerKey: "77hv6vxoqavolg",
        consumerSecret: "JFAISns62emMcDCF",
        callbackURL: "http://localhost:3000/login/linkedin/callback",
        profileFields: ['id', 'first-name', 'last-name', 'email-address', 'location', 'picture-url']
    },
    function (token, tokenSecret, profile, done) {
        Student.findOrCreate(profile, function (err, student) {
            return done(err, student);
        });
    }
));

passport.serializeUser(function (student, done) {
    done(null, student.id);
});

passport.deserializeUser(function (id, done) {
    Student.getStudentById(id, function (err, student) {
        done(err, student);
    });
});

/*Post reqeust handeler for form in login page */
router.post('/',
    passport.authenticate('local', {successRedirect: '/', failureRedirect: '/login', failureFlash: true}),
    function (req, res) {
        /*If user is Authentcated, redirect to Index page.*/
        res.redirect('/');
    });


/*Authenticate with linkedin when page is loaded*/
router.get('/linkedin',
    passport.authenticate('linkedin', { scope: ['r_basicprofile', 'r_emailaddress'] }));

/*Callback from website that is necissary for Linkedin api*/
router.get('/linkedin/callback',
    passport.authenticate('linkedin', {successRedirect: '/', failureRedirect: '/login'}),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
    });

router.get('/get', function (req, res) {
    StudentController.FindAll().then(function (users) {
        res.json(users);
    });
});

router.post('/remove', function (req, res) {
    StudentController.Remove(req.body.Username);
});


module.exports = router;
