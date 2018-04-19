/*Dependancies for our application*/
var express = require("express");
var path = require('path');
var bodyParser = require('body-parser'); // Allows us to Parse JSON
const { check, validationResult } = require('express-validator/check'); // Simple package to allow us to validate HTML forms
const { matchedData, sanitize } = require('express-validator/filter'); // More Instruction: https://github.com/ctavan/express-validator
var flash = require('connect-flash'); // Create Flash Messages 
var session = require('express-session'); // Use of Session to allow us to keep perpetual sessions between pages
var passport = require('passport'); //  authentication middleware for Node.js
const mongoose = require('mongoose');

/*Setup and configure Authentication System strategies*/
var LocalStrategy = require('passport-local').Strategy;

/*Set application to be an express server, define where web assets are in directory structure*/
var app = express();
app.use(express.static(__dirname + '/public'));

/*Set Application vue engine to EJS*/
app.set('view engine', 'ejs')

/*Declare BodyParser Middleware*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/*Declare Express session*/
app.use(session({
	secret: 'JohnIsaacs',
	saveUninitialized: true,
	resave: true
}));

/*Passport Initialisation*/
app.use(passport.initialize());
app.use(passport.session());

/*Declare flash*/
app.use(flash());

/*Here is where we link the pages through routes*/
let index = require('./routes/index');
let searchResults = require('./routes/searchResults');
let placementInfo = require('./routes/placementInfo');
let placementEdit = require('./routes/placementEdit');
let login = require('./routes/login');
let account = require('./routes/account');
let register = require('./routes/register');



var app = express();


//Connection to mongodb

mongoose.connect('mongodb://localhost/DataMate');



mongoose.connection.once('open', function(){

  console.log("Connection made")

}).on('error',function(error){

  console.log("Attempted Connection Failed")

});



app.use(express.static(__dirname + '/public'));



app.use(bodyParser.urlencoded({extended:true}))



app.set('view engine', 'ejs')



//Here is where we link the pages through routes

let index = require('./routes/index');



let searchResults = require('./routes/searchResults');



let placementInfo = require('./routes/placementInfo');



let placementEdit = require('./routes/placementEdit');



let login = require('./routes/login');



let account = require('./routes/account');



let register = require('./routes/register');



//Configure serverside JS
var StudentController = require('./serverJS/controllers/student')

var placementController = require('./serverJS/controllers/placement')

var companyController = require('./serverJS/controllers/company')

/*Define page redirection paths*/
app.use('/', index);

app.use('/search', searchResults);

app.use('/placementInfo', placementInfo);

app.use('/placementEdit', placementEdit);

app.use('/login', login);

app.use('/account', account);

app.use('/register', register);

/*Every Request to our page*/
app.use(function (req,res,next) {
	/*Display to console the request method for testing*/
  	console.log("/" + req.method);
	/*Global Variables*/
  	res.locals.success_msg = req.flash('success_msg');
  	res.locals.error_msg = req.flash('error_msg');
  	/*Passport specific error messages*/
  	res.locals.error = req.flash('error');
  	next();
});

/*Set Port for our application to be listening to requests on*/
app.listen(3000,function(){
	console.log("Live at Port 3000");
});


app.use(function (req,res,next) {

  console.log("/" + req.method);

  next();

});
