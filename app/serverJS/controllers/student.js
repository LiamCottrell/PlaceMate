const Student = require('../models/student');
module.exports = {
  Add: function (req) {
    var student = new Student({
      Firstname: req.body.Username,
      Password: req.body.Password
    });
    student.save().then(function(){
      console.log(req.body.Username + " has worked")
    });
  },

  FindAll: function () {
    return Student.find()
  },

  FindOne: function (name) {
    return Student.findOne({Firstname : name})
  },

  Remove: function (name) {
    Student.findOne({ Firstname : name}, function (err, model) {
    if (err) {
        return;
    }
    Student.remove(function (err) {
        
        console.log(name + " has been removed from the database")
    });
});
  }
};
