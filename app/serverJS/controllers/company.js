const Company = require('../models/company');
module.exports = {
  Add: function (body) {
    var company = new Company({
      CompanyName: body.CompanyName,
      Logo: body.Logo,
      Password: body.Password,
      About: body.About
    });

    company.save().then(function(){
      console.log(company.CompanyName + " has been added to the Company Collection /n Full Information - " + company)
    });
  },
    
  FindOne: function (CompanyName) {
    console.log("A request has been made to find: " + CompanyName + ", in the Company Collection")
    return Company.findOne({CompanyName: CompanyName})
    }
  }