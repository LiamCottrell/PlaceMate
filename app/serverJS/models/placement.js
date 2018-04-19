const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema and Model

const PlacementSchema = new Schema({
  Title: String,
  About: String,
  Requirements: String
});

const Placement = mongoose.model('placement', PlacementSchema);

module.exports = Placement
