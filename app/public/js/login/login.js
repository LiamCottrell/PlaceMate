$("#CompanyLogin").click(function() {
  alert("Logging you in for company");
})

$("#UserLogin").click(function() {
  alert("Logging you in user");
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
