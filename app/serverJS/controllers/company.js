const Company = require('../models/company');
//Author - Nicholas Wright
//We have seperated up our mongoose functions into different 'Controllers', inside you will find functions for each different action we use for the database. 
//These controllers allow us to manipulate the data inside the database when they are called.
//They have been seperated up to allow us an easier time controlling the different features we need our database to have instead of one massive controller.
module.exports = {
    //Within we grab the contents of body, and import it as a new entity into the database.
    //As of now, we don't do any error checking inside our database, this is because the data we recieve in should not be in anyway invalid.
  Add: function (body) {
    var company = new Company({
      CompanyName: body.CompanyName,
      Logo: body.Logo,
      Password: body.Password,
      About: body.About
    });
     //I have included a section to log our console each time a company is created, along with its full data, this makes sure we can monitor it in real time.  
    company.save().then(function(){
      console.log(company.CompanyName + " has been added to the Company Collection /n Full Information - " + company)
    });
  },
  //See above comment,
  //We use our company name as our username for their account, its their unique identify
  FindOne: function (CompanyName) {
    console.log("A request has been made to find: " + CompanyName + ", in the Company Collection")
    return Company.findOne({CompanyName: CompanyName})
    }
  }