const Student = require('../models/student');
const bcrypt = require('bcryptjs');
//Author - Nicholas Wright
//We have seperated up our mongoose functions into different 'Controllers', inside you will find functions for each different action we use for the database. 
//These controllers allow us to manipulate the data inside the database when they are called.
//They have been seperated up to allow us an easier time controlling the different features we need our database to have instead of one massive controller.
module.exports = {
    //Within we grab the contents of body, and import it as a new entity into the database.
    //As of now, we don't do any error checking inside our database, this is because the data we recieve in should not be in anyway invalid.
    Add: function(body){
        var student = new Student({
          first_name: body.first_name,
          last_name: body.last_name,
          email: body.email,
          city: body.city,
          date_of_birth: body.date_of_birth,
          password: body.password,
          subject: body.subject
        });
        //Before we enter the user into the database, we want to encrypt it using bcrypt
        //We have done this so that if we suffer a databreach, the hacker will have to decrypt our data before using it to comply with the DPA and soon to be GDPR
        //I have also included a section to log our console each time a user is created, along with its full data, this makes sure we can monitor it in real time.
        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(student.password, salt, function (err, hash) {
                student.password = hash;
                 student.save().then(function(){
                  console.log(student.first_name + " has created an account /n Full Information - ", student)
                });
            });
        });
    },
    //This function will only be used on log in, to find a student record and return it
    //We don't include the password in this search, we do this because we want the user to know they have the right credentials but not the right password.
    FindOne: function (name) {
        return Student.findOne({first_name: name})
    
    }
};
