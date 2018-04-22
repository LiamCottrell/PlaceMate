let router = require('express').Router();
let PlacementController = require('../serverJS/controllers/placement');
let CompanyController = require('../serverJS/controllers/company');


router.get('/', function(req, res, next) {
  PlacementController.PanelInfo("Computing").then(function(results){
    res.render('pages/index', {
        placement: results
      });
    })
  });

router.post('/AddPlacement', function(req,res){
  console.log(req.body.Requirements)
  PlacementController.Add(req.body);
  return res.send()
});

module.exports = router;
