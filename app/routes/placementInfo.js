let router = require('express').Router();
let PlacementController = require('../serverJS/controllers/placement.js');
let CompanyController = require('../serverJS/controllers/company');
//Author - Nicholas Wright
//before the page is even created we need to obtain the nesseary information
//in order to generate it. I have done that below using .then functions as 
//that allowed me to wait for the database response before executing the next database request
//If I didn't, I would end up with an undefined placement entry.
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

//This is the database request to fetch our placement identifer, this is explained in more detail at the jquery side of the project,
//But the jist is - To generate the map, we need the cordinates, to get the cordinates we need the postcode, which we get from below.
router.get('/GetAddress', function(req,res){
    PlacementController.PlacementInfo(req.query._id).then(
        function(placement){
          res.send(placement.Postcode)
          })
    });
    
module.exports = router;
