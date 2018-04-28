//If sesson is active, change login to sign out
//Author - Nicholas Wright
//this is purely a method to allow us easy navigation no matter who's hosting it.
//if we used localhost:3000/ as a pathname, it would cause a problem on codio, and visa versa.
//I have come up with teh solution below, so no matter our host. It will load the right page.
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

