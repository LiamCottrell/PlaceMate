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
    password: String,
    linkedin: String,
    image: String
});

let Student = module.exports = mongoose.model('students', StudentSchema);


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
    var query = {email: email};
    Student.findOne(query, callback);
};

/*Gets Students details with provided id*/
module.exports.getStudentById = function(id, callback){
    Student.findById(id, callback);
};

/*Find if a LinkedIn Profile exists, and if not, create one.*/
module.exports.findOrCreate = function (profile, callback){
    var studentObj = new Student;
    Student.findOne({linkedin : profile.id},function(err,result){
        /*console.log(result);*/
        if(!result){
            studentObj.first_name = profile.name.givenName;
            studentObj.last_name = profile.name.familyName;
            studentObj.linkedin = profile.id;
            studentObj.email = profile.emails[0].value;
            studentObj.image = profile._json.pictureUrl;
            studentObj.city = profile._json.location.name;
            studentObj.date_of_birth = new Date();

            studentObj.save(callback);
        }else{
            callback(err,result);
        }
    });
};

/*Find student by linkedin id*/
module.exports.getStudentByLinkedInId = function(id, callback){
    var query = {linkedin: id};
    Student.findOne(query, callback);
};


/*Takes password from cleartext and compares it to the hashed password provided.*/
module.exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
        if(err) throw err;
        callback(null, isMatch);
    });
};
