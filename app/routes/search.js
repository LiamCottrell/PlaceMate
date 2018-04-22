/*
    Author: Liam Cottrell,
    Purpose: Handle the retrieval of Placement information, using our Placement Controller,
    to populate the page with search results.
*/

/*Dependencies*/
let router = require('express').Router();
let PlacementController = require('../serverJS/controllers/placement.js');

/*On load of search index*/
router.get('/', function(req, res, next) {
    /*Query the Placement controller and search for all relivent placements with
    the "GET" paramiter of SearcgParameter*/
    PlacementController.SearchPlacements(req.query.SearchParameter).then(function(results){
        /*Send the result of the query to the search page to be handled*/
        res.render('pages/search', {
          placement: results
        });
    })
});

module.exports = router;
