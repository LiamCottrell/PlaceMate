var express = require("express");
var app = express();

app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/views'));

app.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

app.get("/",function(req,res){
	res.render('partials/site');
});

app.listen(3000,function(){
  console.log("Live at Port 3000");
});
