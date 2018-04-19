const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

//Create Schema and Model

const StudentSchema = new Schema({
  Firstname: String,
  Lastname: String,
  Email: String,
  Password: String,
  City: String,
  Birthday: Date
});

const Student = module.exports = mongoose.model('students', StudentSchema);

/*module.exports = Student*/

module.exports.createStudent = function(newStudent, callback){
	bcrypt.genSalt(10, function(err, salt) {
		bcrypt.has(newStudent.Password, salt, function(err, hash){
			newStudent.Password = hash;
			newStudent.save(callback);
		});
	});
}
