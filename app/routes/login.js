let router = require('express').Router();
let StudentController = require('../serverJS/controllers/student');
let CompanyController = require('../serverJS/controllers/company');

router.get('/', function(req, res, next) {
    res.render('pages/login');
});

router.get('/Login-C', function(req,res){
  CompanyController.FindOne(req.query.CompanyName).then(function(user,req){
      if (user.Email == req.query.Email && user.Password == req.query.Password){
        res.responseText="Loggedin"
      }
      else{
        res.responseText="Something went wrong"
      }
      });
});

router.get('/Login-S', function(req,res){
  StudentController.FindOne(req.query.Email).then(function(user,req){
      if (user.Email == req.query.Email && user.Password == req.query.Password){
        res.responseText="Loggedin"
      }
      else{
        res.responseText="Something went wrong"
      }
      });
});

module.exports = router;
