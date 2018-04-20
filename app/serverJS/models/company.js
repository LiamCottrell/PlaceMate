const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema and Model

const CompanySchema = new Schema({
  Name: String,
  Logo: String,
  Email: String,
  Password: String
});

const Company = mongoose.model('company', CompanySchema);

module.exports = Company;
