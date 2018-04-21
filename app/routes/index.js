let router = require('express').Router();
let PlacementController = require('../serverJS/controllers/placement');
let CompanyController = require('../serverJS/controllers/company');


router.get('/', function(req, res, next) {
    res.render('pages/index');
});

router.get('/Searchtester', function(req,res){
  PlacementController.SearchPlacements(req.query.SearchParameter).then( function(placements){
       res.json(placements);
  });
});

router.post('/searchtest', function(req,res){
  PlacementController.Add(req.body);
});

router.get('/Seach', function(req,res){
    PlacementController.SearchPlacements(req.query.SearchParameter).then(
        function(placements){       
            var package = ""
            for (var index in placements){
                placement = placements[index]
                console.log(placement)
                Company = CompanyController.FindOne(placement.CompanyName)
                package = package +CreateElement(Company, Placement)
            }
            console.log(package)
            res.send(package)
            })});

router.get('/Panels', function(req,res){
    PlacementController.PanelInfo(req.query.SearchParameter).then(
        function(placements){       
            var package = ""
            for (var index in placements){
                placement = placements[index]
                console.log(placement)
                Company = CompanyController.FindOne(placement.CompanyName)
                package = package +CreatePanelElement(Company, Placement)
            }
            res.send(package)
            })});

module.exports = router;

function CreatePanelElement(Company,Placement){
    Element = ""
    /*Element += <div class="card border-secondary mb-3">
		  <div class="card-header"><img src="images/companylogos/pwc.jpg"> PwC</div>
		  <div class="card-body text-secondary">
		    <h5 class="card-title">Placement.Title<span class="badge badge-pill badge-info">Placement.Length</span></h5>
		    <p class="card-text">Placement.About</p>		    
		  </div>
		  <button type="button" class="btn btn-light">Click for Information</button>
    </div>*/
    //Create each div and add it to element, then export element in order to create an element for that placement
    return Element
}

function CreateSearchElement(Company,Placement){
    Element = ""
    //Create each div and add it to element, then export element in order to create an element for that placement
    return Element
}