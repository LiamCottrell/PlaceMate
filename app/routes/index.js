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
  PlacementController.PanelInfo(subject).then(function(results){
    res.render('pages/index', {
        placement: results
      });
    })
  });

module.exports = router;
