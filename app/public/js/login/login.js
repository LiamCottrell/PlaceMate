//Use Jquery id to call a click method that will produce an alert for the user.
$("#StudentLogin").click(function() {
  var data = {
    Email : $("#student-email").val(),
    Password : $("#student-password").val()
  };

  if (!validateEmail(data.Email) || data.Email != "" || data.Password != ""){
    $('#FieldError').hide()
    $.ajax({
     url: '/login/login-s',
     type:'get',
     dataType:'json',
     data: data
   })
  }
  else{
    $('#FieldError').show()
  }
});

//Source - https://stackoverflow.com/questions/2507030/email-validation-using-jquery
//Searched for email validator function, came across the prebuilt sub-routine above
function validateEmail($email) {
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return emailReg.test( $email );
}
