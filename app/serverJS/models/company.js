const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema and Model

const CompanySchema = new Schema({
  CompanyName: {
      type: String,
      index: true
  },
  Logo: String,
  Password: String,
  About: String
});

const Company = mongoose.model('company', CompanySchema);

module.exports = Company;
