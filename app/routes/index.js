let router = require('express').Router();
let PlacementController = require('../serverJS/controllers/placement');
let CompanyController = require('../serverJS/controllers/company');


router.get('/', function(req, res, next) {
  console.log(req.user)
  if (!req.user){
      subject = ""
  }
    else{
        subject = req.user.subject
    }
  //Author - Nicholas Wright
  PlacementController.PanelInfo(subject).then(function(results){
    res.render('pages/index', {
        placement: results
      });
    })
  });

router.post('/createplacement', function(req, res, next) {
    PlacementController.Add(req.body);
});

module.exports = router;
