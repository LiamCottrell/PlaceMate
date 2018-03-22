var express = require("express");
var app = express();

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs')

//Here is where we link the pages through routes
let index = require('./routes/index');

let searchResults = require('./routes/searchResults');

let placementInfo = require('./routes/placementInfo');

let placementEdit = require('./routes/placementEdit');

let login = require('./routes/login');

let account = require('./routes/account');

//Here is where those links are then used when the user adds a key word after the / in the url

app.use('/', index);
app.use('/search', searchResults);
app.use('/placementInfo', placementInfo);
app.use('/placementEdit', placementEdit);

app.use('/login', login);
app.use('/account', account);

app.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

app.listen(3000,function(){
  console.log("Live at Port 3000");
});
