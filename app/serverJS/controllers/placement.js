const Placement = require('../models/placement');
//Author - Nicholas Wright
//We have seperated up our mongoose functions into different 'Controllers', inside you will find functions for each different action we use for the database. 
//These controllers allow us to manipulate the data inside the database when they are called.
//They have been seperated up to allow us an easier time controlling the different features we need our database to have instead of one massive controller.
module.exports = {
    //Within we grab the contents of body, and import it as a new entity into the database.
    //As of now, we don't do any error checking inside our database, this is because the data we recieve in should not be in anyway invalid.
  Add: function (body) {
    var placement = new Placement({
      CompanyName: body.CompanyName,
      Title: body.Title,
      About: body.About,
      Role: body.Role,
      Requirements: body.Requirements,
      HowToApply: body.HowToApply,
      Location: body.Location,
      Subject: body.Subject,
      Length: body.Length,
      Address: body.Address,
      City: body.City,
      Postcode: body.Postcode,
      DateAdded: body.DateAdded,
      Link: body.Link,
      Pay: body.Pay
    });
    //I have included a section to log our console each time a placement is created, along with its full data, this makes sure we can monitor it in real time.
    placement.save().then(function(){
      console.log(placement.CompanyName + " has added: " + placement.Title + ", to the Placement collection /n Full Information - ", placement)
    });
  },

  //Here we simply search for a specific placement, which will be called only when trying to load a placement info page
  PlacementInfo: function (_id) {
    return Placement.findOne({_id : _id})
  },
    
  //Within Search Placements, we will search for any and all placements that match our regular expression
  //I convert our entry into the search bar into an array to allow me to search for each term against our database entrys. 
  //If ANY find a match, that entry will be populated for a user,
  //this is done to help make the search as easy for the user as possible
  //If I was to fix this in the future I would probably make sure that the user isn't inputting common words like 'this, and' ect..
  SearchPlacements: function(SearchParameter) {
        array = SearchParameter.split(" ")
    var regex = [];
    for (var i = 0; i< array.length; i++){
      regex[i] = new RegExp(array[i], 'i');
    }
    console.log(regex)
    return Placement.find({$or:
        [{CompanyName: {$in: regex}},
        {Title:{$in: regex}},
        {About:{$in: regex}},
        {Role:{$in: regex}},
        {Requirements: {$in: regex}},
        {Location: {$in: regex}},
        {Subject: {$in: regex}},
        {Length: {$in: regex}}]}

      )},
    //See above statement.
    PanelInfo: function(SearchParameter) {
    array = SearchParameter.split(" ")
    var regex = [];
    for (var i = 0; i< array.length; i++){
      regex[i] = new RegExp(array[i], 'i');
    }
    console.log(SearchParameter)
    return Placement.find({Subject: {$in: regex}}).limit(4)
  }
}
