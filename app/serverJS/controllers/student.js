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
    Student.find().then(function(result){
      result.forEach(function(item){
        console.log(item._id)
      })
    })
  },

  FindOne: function (name, password) {
    Student.find().then(function(result){
      result.forEach(function(item){
        console.log(item.username)
      })
    })
  },

  Remove: function (name) {
    Student.remove({Firstname:name})
  }
};
