const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Author - Nicholas Wright
//Create Schema and Model

const PlacementSchema = new Schema({
  CompanyName: String,
  Title: {
      type: String,
      index: true
  },
  About: String,
  Role: String,
  Requirements: Array,
  HowToApply: String,
  Location: String,
  Subject: String,
  Length: String,
  Address: String,
  City: String,
  Postcode: String,
  DateAdded: String,
  Pay: String,
  Link: String
});

const Placement = mongoose.model('placement', PlacementSchema);

module.exports = Placement;
