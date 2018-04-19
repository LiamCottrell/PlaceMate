const Placement = require('../models/placement');
module.exports = {
  Add: function (name) {
    var placement = new Placement({
    });

    placement.save().then(function(){
      console.log(name + "added to database")
    });
  },
  FindOne: function () {
    Placement.find().then(function(result){
      result.forEach(function(item){
        console.log(item.username)
      })
    })
  }
};
