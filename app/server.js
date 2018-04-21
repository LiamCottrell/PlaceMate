/*Dependancies for our application*/
const express = require("express");
const path = require('path');
const bodyParser = require('body-parser'); // Allows us to Parse JSON
var cookieParser = require('cookie-parser');
var expressValidator = require('express-validator');
const flash = require('connect-flash'); // Create Flash Messages
const session = require('express-session'); // Use of Session to allow us to keep perpetual sessions between pages
const passport = require('passport'); //  authentication middleware for Node.js
const mongoose = require('mongoose');

/*Setup and configure Authentication System strategies*/
const LocalStrategy = require('passport-local').Strategy;

/*Set application to be an express server, define where web assets are in directory structure*/
var app = express();

app.use(express.static(__dirname + '/public'));

/*Set Application vue engine to EJS*/
app.set('view engine', 'ejs');

/*Declare BodyParser Middleware*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser('MyCodeBringsAlltheNerdsTotheYard'));

/*Declare Express session*/
app.use(session({
	secret: 'JohnIsaacs',
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

/*Declare flash*/
app.use(flash());

/*Passport Initialisation*/
app.use(passport.initialize());
app.use(passport.session());

// Express Validator
app.use(expressValidator({
    errorFormatter: function(param, msg, value) {
        var namespace = param.split('.')
            , root    = namespace.shift()
            , formParam = root;

        while(namespace.length) {
            formParam += '[' + namespace.shift() + ']';
        }
        return {
            param : formParam,
            msg   : msg,
            value : value
        };
    }
}));


/*Here is where we link the pages through routes*/
let index = require('./routes/index');
let search = require('./routes/search');
let placementInfo = require('./routes/placementInfo');
let placementEdit = require('./routes/placementEdit');
let login = require('./routes/login');
let account = require('./routes/account');
let register = require('./routes/register');

//Connection to mongodb

mongoose.connect('mongodb://localhost/DataMate');

mongoose.connection.once('open', function(){

  console.log("Connection to DataMate Server Made")

}).on('error',function(error){
  console.log("Attempted Connection Failed - Error: " + error)
});

/*Every Request to our page*/
app.use(function (req,res,next) {
    /*Display to console the request method for testing*/
    console.log("/" + req.method);
    /*Global Variables*/
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    /*Passport specific error messages*/
    res.locals.error = req.flash('error');
    /*Sets the student variable as a variable for our sites if it set on login, else null*/
    res.locals.student = req.user || null;
    next();
});

//Load server-side JS Controllers
const StudentController = require('./serverJS/controllers/student');

const PlacementController = require('./serverJS/controllers/placement');

const CompanyController = require('./serverJS/controllers/company');


/*Define page redirection paths*/
app.use('/', index);

app.use('/search', search);

app.use('/placementInfo', placementInfo);

app.use('/placementEdit', placementEdit);

app.use('/login', login);

app.use('/account', account);

app.use('/register', register);



/*Set Port for our application to be listening to requests on*/
app.listen(3000,function(){
	console.log("Live at Port 3000");
});
