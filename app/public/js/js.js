$("#deleteAccount").click(function() {
  alert("Your account has been deleted");
})

$("#CompanyLogin").click(function() {
  alert("Logging you in for company");
})

$("#UserLogin").click(function() {
  alert("Logging you in user");
})

$("#ChangeEmail").click(function() {
  alert("Changing your email");
})

$("#ChangePassword").click(function() {
  alert("Changing Password");
})

$("#UpdateName").click(function() {
  alert("Changing Name");
})

$("#ApplyPlacement").click(function() {
  alert("Redirecting you, hold on.")
})

$("#indexButton").click(function() {
  var pathname = window.location.pathname;
  pathname = pathname.substring(0, pathname.indexOf("/"));
  window.location.href = pathname;

})
$("#loginButton").click(function() {
  var pathname = window.location.pathname;
  pathname = pathname.substring(0, pathname.indexOf("/"));
  pathname += "login";
  window.location.href = pathname;
})
$("#infoButton").click(function() {
  var pathname = window.location.pathname;
  pathname = pathname.substring(0, pathname.indexOf("/"));
  pathname += "placementInfo";
  window.location.href = pathname;

})
$("#accountButton").click(function() {
  var pathname = window.location.pathname;
  pathname = pathname.substring(0, pathname.indexOf("/"));
  pathname += "account";
  window.location.href = pathname;
})
$("#searchButton").click(function() {
  var pathname = window.location.pathname;
  pathname = pathname.substring(0, pathname.indexOf("/"));
  pathname += "search";
  window.location.href = pathname;
})
