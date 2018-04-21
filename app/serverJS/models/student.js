/*Purpose of this file is to specify the data the the Student collection will be storing*/

/*Declare necessary dependencies*/
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

/*Create Schema using mongoose and apply schema as a template of how our data will be stored*/

const StudentSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    email: {
        type: String,
        index : true
    },
    city: String,
    date_of_birth: Date,
    password: String
});

let Student = module.exports = mongoose.model('Students', StudentSchema);


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


/*Aquires Student details with provided email address*/

module.exports.getStudentByEmail = function(email, callback){
    console.log('now here');
    var query = {email: email};
    Student.findOne(query, callback);
};

/*Gets Students details with provided id*/
module.exports.getStudentById = function(id, callback){
    Student.find({id:id}, callback);
};


/*Takes password from cleartext and compares it to the hashed password provided.*/
module.exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
        if(err) throw err;
        callback(null, isMatch);
    });
};
