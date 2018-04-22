const Student = require('../models/student');
module.exports = {

    Add: function(body){
        var student = new Student({
          first_name: body.first_name,
          last_name: body.last_name,
          email: body.email,
          city: body.city,
          date_of_birth: body.date_of_birth,
          password: body.password
        });

        student.save().then(function(){
          console.log(student.first_name + " has created an account /n Full Information - ", student)
        });
    },

    FindAll: function () {
        return Student.find()
    },

    FindOne: function (name) {
        return Student.findOne({first_name: name})
    },

    Remove: function (name) {
        Student.findOne({first_name: name}, function (err, model) {
            if (err) {
                return;
            }
            Student.remove(function (err) {

                console.log(name + " has been removed from the database")
            });
        });
    }
};
