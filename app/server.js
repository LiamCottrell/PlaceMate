/*Dependancies for our application*/
var express = require("express");
var path = require('path');
var bodyParser = require('body-parser'); // Allows us to Parse JSON
var expressValidator = require('express-validator'); // Simple package to allow us to validate HTML forms
var flash = require('flash'); // Create Flash Messages 
var session = require('express-session'); // Use of Session to allow us to keep perpetual sessions between pages
var passport = require('passport'); //  authentication middleware for Node.js

/*Setup and configure Authentication System strategies*/
var LocalStrategy = require('passport-local');
var LocalStrategy = require('Strategy');

/*Set application to be an express server, define where web content is in directory structure*/
var app = express();
app.use(express.static(__dirname + '/public'));

/*Set Application vue engine to EJS*/
app.set('view engine', 'ejs')

/*Here is where we link the pages through routes*/
let index = require('./routes/index');
let searchResults = require('./routes/searchResults');
let placementInfo = require('./routes/placementInfo');
let placementEdit = require('./routes/placementEdit');
let login = require('./routes/login');
let account = require('./routes/account');
let register = require('./routes/register');

/*Define page redirection paths*/

app.use('/', index);
app.use('/search', searchResults);
app.use('/placementInfo', placementInfo);
app.use('/placementEdit', placementEdit);
app.use('/login', login);
app.use('/account', account);
app.use('/register', register);

/*Every Request to our page, display to console the request method for testing*/
app.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

/*Set Port for our application to be listening to requests on*/
app.listen(3000,function(){
  console.log("Live at Port 3000");
});
