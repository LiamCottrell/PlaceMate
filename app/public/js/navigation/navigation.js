//User jquery so when a button is clicked
//get the current url loaded into the interacted window
//produce a substring of that url so we cut off the end
//Replace that with our destination and load it.
//These are for test purposes.
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

$("#regButton").click(function() {
  var pathname = window.location.pathname;
  pathname = pathname.substring(0, pathname.indexOf("/"));
  pathname += "register";
  window.location.href = pathname;
})
