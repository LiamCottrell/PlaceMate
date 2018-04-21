const Student = require('../models/student');
module.exports = {
  Add: function (body) {
    var student = new Student({
      First_Name: body.FirstName,
      Last_Name: body.Last_Name,
      Email: body.Email,
      Password: body.Password,
      City: body.City,
      DoB: body.DoB,
      Profession: body.Profession
    });
    student.save().then(function(){
      console.log(body.Email + " has worked")
      console.log(body)
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
