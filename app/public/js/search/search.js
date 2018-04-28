//Author - Nicholas Wright
//this is done purely as a method to allow us easy navigation no matter who's hosting it.
//if we used localhost:3000/ as a pathname, it would cause a problem on codio, and visa versa.
//I have come up with teh solution below, so no matter our host. It will load the right page.
$('#searchbtn').click(function() {
  Search = $('#SearchParameters').val()
  if (Search.length > 0) {
    var pathname = window.location.pathname;
    pathname = pathname.substring(0, pathname.indexOf("/"));
    pathname += "/search?SearchParameter=" + Search;
    window.location.href = pathname;
    }
  })

