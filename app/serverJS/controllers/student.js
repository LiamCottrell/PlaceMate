const Student = require('../models/student');
module.exports = {

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
