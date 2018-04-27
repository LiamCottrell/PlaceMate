const Student = require('../models/student');
const bcrypt = require('bcryptjs');

module.exports = {

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
        
        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(student.password, salt, function (err, hash) {
                student.password = hash;
                 student.save().then(function(){
                  console.log(student.first_name + " has created an account /n Full Information - ", student)
                });
            });
        });
    },

    FindAll: function () {
        return Student.find()
    },

    FindOne: function (name) {
        return Student.findOne({first_name: name})
    
    }
};
