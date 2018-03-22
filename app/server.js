var express = require("express");
var app = express();

const mongoose = require('mongoose')
const bodyParser = require('body-parser')

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

//Here is where those links are then used when the user adds a key word after the / in the url

app.use('/', index);
app.use('/search', searchResults);
app.use('/placementInfo', placementInfo);
app.use('/placementEdit', placementEdit);
app.use('/login', login);
app.use('/account', account);
app.use('/register', register);

app.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

app.listen(3000,function(){
  console.log("Live at Port 3000");
});
