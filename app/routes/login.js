let router = require('express').Router();
let StudentController = require('../serverJS/controllers/student')

router.get('/', function(req, res, next) {
    res.render('pages/login');
});

router.post('/auth', function(req,res){
  StudentController.Add(req);
});

router.get('/get', function(req,res){
  StudentController.FindAll().then( function(users){
       res.json(users);
  });
});

router.post('/remove', function(req,res){
  StudentController.Remove(req.body.Username);
});

router.get('/fineOne', function(req,res){
  StudentController.FindOne(req.query.Firstname).then( function(users){
       res.json(users);
  });
});
module.exports = router;
