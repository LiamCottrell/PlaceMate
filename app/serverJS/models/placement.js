const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema and Model

const PlacementSchema = new Schema({
  Firstname: String,
  Lastname: String,
  Email: String,
  Password: String,
  Course: String,
  City: String
});

const Placement = mongoose.model('placement', PlacementSchema);

module.exports = Placement
