//Use Jquery id to call a click method that will produce an alert for the user.
$('#searchbtn').click(function() {
  Search = $('#SearchParameters').val()
  if (Search.length > 0) {
    var pathname = window.location.pathname;
    pathname = pathname.substring(0, pathname.indexOf("/"));
    pathname += "/search?SearchParameter=" + Search;
    window.location.href = pathname;
    }
  })
