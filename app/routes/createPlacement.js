let router = require('express').Router();


//Here is where the route will get the specific page from the Pages folder
router.get('/', function(req, res, next) {
    res.render('pages/createPlacement');

});

router.post('/AddPlacement', function(req,res){
  console.log(req.body.Requirements)
  PlacementController.Add(req.body);
  return res.send()
});

module.exports = router;
