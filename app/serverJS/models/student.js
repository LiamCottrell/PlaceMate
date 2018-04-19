const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

/*const Schema = mongoose.Schema;*/

//Create Schema and Model

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

/*module.exports = Student*/

module.exports.createStudent = function(newStudent, callback){
	bcrypt.genSalt(10, function(err, salt) {
		bcrypt.hash(newStudent.password, salt, function(err, hash){
			newStudent.password = hash;
			newStudent.save(callback);
		});
	});
}
