const Company = require('../models/company');
module.exports = {
  Add: function (name) {
    var company = new Company({
    });

    company.save().then(function(){
      console.log(name + "added to database")
    });
  },
  FindOne: function () {
    company.find().then(function(result){
      result.forEach(function(item){
        console.log(item.username)
      })
    })
  }
};
