const Placement = require('../models/placement');
module.exports = {
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
      Link: body.String,
      Pay: body.Pay
    });

    placement.save().then(function(){
      console.log(placement.CompanyName + " has added: " + placement.Title + ", to the Placement collection /n Full Information - ", placement)
    });
  },

  PlacementInfo: function (_id) {
    return Placement.findOne({_id : _id})
  },

  SearchPlacements: function(SearchParameter) {
    return Placement.find().or(
        [{CompanyName: new RegExp(SearchParameter, 'i')},
        {Title: new RegExp(SearchParameter, 'i')},
        {About: new RegExp(SearchParameter, 'i')},
        {Role: new RegExp(SearchParameter, 'i')},
        {Requirements: new RegExp(SearchParameter, 'i')},
        {Location: new RegExp(SearchParameter, 'i')},
        {Subject: new RegExp(SearchParameter, 'i')},
        {Length: new RegExp(SearchParameter, 'i')}])
  },

    PanelInfo: function(SearchParameter) {
    console.log(SearchParameter)
    return Placement.find({Subject: new RegExp(SearchParameter, 'i')}).limit(4)
  }
}
