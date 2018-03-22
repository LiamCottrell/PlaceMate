const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema and Model

const StudentSchema = new Schema({
  Firstname: String,
  Lastname: String,
  Email: String,
  Password: String,
  City: String
});

const Student = mongoose.model('students', StudentSchema);

module.exports = Student
