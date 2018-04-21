let router = require('express').Router();
let PlacementController = require('../serverJS/controllers/placement.js');
let CompanyController = require('../serverJS/controllers/company');

router.get('/', function(req, res, next) {
    res.render('pages/placementInfo');
    });

router.get('/populate', function(req,res){
    PlacementController.PlacementInfo(req.query.Title).then(
        function(placement){
          console.log(placement)
            package = []
            Company = CompanyController.FindOne(placement.CompanyName)
            package[0] = GeneratePlacement(Company, placement)
            res.send(package)
          })
    });

module.exports = router;

function GeneratePlacement(Company,Placement){
    Element = ' <div class="container">'
    Element += ' <!-- Added in a nifty image of the Company Logo -->'
    Element += '    <img src="./images/companylogos/pwc.jpg" alt="Logo">'
    Element += '      <h5 class="placementTitle">' + Placement.Title + '-' + Company.CompanyName + '</h5>'
    Element += '      <!-- This is where all the content will go for the Placement-->'
    Element += '      <div class="row">'
    Element += '        <div class="col-md-8">'
    Element += '          <h6><u>About <span id="companyname">' + Company.CompanyName + '</span>:</u></h6>'
    Element += '          <p>' + Company.About + '</p>'
    Element += '          <h6><u>Your Role: </u></h6>'
    Element += '          <p>' + Placement.Role + '</p>'
    Element += '          <h6><u>Requirements: </u></h6>'
    Element += '<ul>'
    for (var requirement in Placement.Requirements){
    Element += '<li>' + requirement + '</li>'
    }
    Element += '</ul>'
    Element += '        </div>'
    Element += '        <!-- Here is a nice map to show where the Company is located -->'
    Element += '<div class="col-md-4 col-sm-12">'
    Element += '<p class="lead">Location of Placement</p>'
    Element += '<div id="placeMap" class="pull-right mapObject"></div>'
    Element += '</div>'
    Element += '      <!-- This is where the Apply Button is, once clicked it will redirect the user to a certain external webpage -->'
    Element += '      <button type="button" class="applyButton" style="float:left;" id="'+ Placement.Title + '">Apply Now!</button>'
    Element += '</div>'

    return Element
  }
