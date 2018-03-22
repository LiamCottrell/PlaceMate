let router = require('express').Router();
let StudentController = require('../serverJS/controllers/student')

router.get('/', function(req, res, next) {
    res.render('pages/login');
});

router.post('/auth', function(req,res){
  StudentController.Add(req);
});

router.get('/get', function(req,res){
  StudentController.FindAll();
});

module.exports = router;
