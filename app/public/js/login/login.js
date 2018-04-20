//Use Jquery id to call a click method that will produce an alert for the user.
$("#CompanyLogin").click(function() {
  var data = {
    Username : $("#LoginStudentUsername").val(),
    Password : $("#LoginStudentPassword").val()
  };
  $.ajax({
    url:'/login/remove',
    type:'post',
    dataType:'json',
    data: data
  });
});

$("#UserLogin").click(function() {
  var data = {
    Username : $("#LoginStudentUsername").val(),
    Password : $("#LoginStudentPassword").val()
  };
  $.ajax({
    url:'/login/auth',
    type:'post',
    dataType:'json',
    data: data
  });
});
