let router = require('express').Router();
let PlacementController = require('../serverJS/controllers/placement.js');
let CompanyController = require('../serverJS/controllers/company');

router.get('/', function(req, res, next) {
    PlacementController.PlacementInfo(req.query._id).then(function(placement){
      var placement = placement
        CompanyController.FindOne(placement.CompanyName).then(function(company){
          console.log(placement.CompanyName, company)
          res.render('pages/placementInfo',{
            placement: placement,
            company: company
          });
      })
    })
  });

router.get('/GetAddress', function(req,res){
    PlacementController.PlacementInfo(req.query._id).then(
        function(placement){
          res.send(placement.Postcode)
          })
    });
    
module.exports = router;
