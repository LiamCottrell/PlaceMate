var express = require("express");
var app = express();

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs')

let index = require('./routes/index');

app.use('/', index);

app.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

app.listen(3000,function(){
  console.log("Live at Port 3000");
});