const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema and Model

const CompanySchema = new Schema({
  Firstname: String,
  Lastname: String,
  Email: String,
  Password: String,
  Course: String,
  City: String
});

const Company = mongoose.model('company', CompanySchema);

module.exports = Company
