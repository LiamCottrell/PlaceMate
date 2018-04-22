let router = require('express').Router();
let PlacementController = require('../serverJS/controllers/placement');
let CompanyController = require('../serverJS/controllers/company');


router.get('/', function(req, res, next) {
    res.render('pages/index');
});

router.post('/AddPlacement', function(req,res){
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
            res.send(package)
            })});

router.get('/Panels', function(req,res){
    PlacementController.PanelInfo(req.query.SubjectParameter).then(
        function(placements){
            var package = ""
            for (var index in placements){
                placement = placements[index]
                console.log(placement)
                Company = CompanyController.FindOne(placement.CompanyName)
                console.log(Company.CompanyName)
                package += CreatePanelElement(Company, placement)
            }
            res.send(package)
            })});

module.exports = router;

function CreatePanelElement(Company,Placement){
    Element = ""
    Element += '<div class="card border-secondary mb-3">'
		Element += '  <div class="card-header"><img src="images/companylogos/pwc.jpg">' + Company.CompanyName
    Element += '  </div>'
		Element += '  <div class="card-body text-secondary">'
		Element += '    <h5 class="card-title">'+ Placement.Title + '<span class="badge badge-pill badge-info">' + Placement.Length + '</span></h5>'
		Element += '    <p class="card-text">'+ Placement.About + '</p>'
		Element += '  </div>'
		Element += '  <button type="button" class="btn btn-light" id="' + Placement.Title +'">Click for Information</button>'
    Element += '</div>'
    //Create each div and add it to element, then export element in order to create an element for that placement
    return Element
}

function CreateSearchElement(Company,Placement){
    Element = ""
    //Create each div and add it to element, then export element in order to create an element for that placement
    return Element
}
