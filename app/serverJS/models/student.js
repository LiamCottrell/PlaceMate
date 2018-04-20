/*Purpose of this file is to specify the data the the Student collection will be storing*/

/*Declare necissary dependancies*/
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

/*Create Schema using mongoose and apply schema as a template of how our data will be stored*/

const StudentSchema = mongoose.Schema({
  first_name: {
  	type: String
  },
  last_name: {
  	type: String
  },
  email: {
  	type: String,
  	index : true
  },
  password: {
  	type: String
  },
  city: {
  	type: String
  },
  date_of_birth: {
  	type: Date
  }
});

var Student = module.exports = mongoose.model('Students', StudentSchema);


/*Export function called "CreateStudent"
This will allow us to pass in an object with student information
It will then hash the password, then save the user to the database.*/
module.exports.createStudent = function(newStudent, callback){
	bcrypt.genSalt(10, function(err, salt) {
		bcrypt.hash(newStudent.password, salt, function(err, hash){
			newStudent.password = hash;
			newStudent.save(callback);
		});
	});
};
