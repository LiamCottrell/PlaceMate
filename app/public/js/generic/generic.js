//If sesson is active, change login to sign out

$('#loginbtn').click(function(){
  var pathname = window.location.pathname;
  pathname = pathname.substring(0, pathname.indexOf("/"));
  pathname += "login";
  window.location.href = pathname;
});

$('#registerbtn').click(function(){
  var pathname = window.location.pathname;
  pathname = pathname.substring(0, pathname.indexOf("/"));
  pathname += "register";
  window.location.href = pathname;
});

