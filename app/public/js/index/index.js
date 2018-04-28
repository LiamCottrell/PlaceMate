//Author - Nicholas Wright
//The buttons that are created through our templating engine makes it difficult to generate a onclick method for these entitys.
//Instead I have simply re advertised the on click method to include 'Load Placement' as it was simpler
//All it does is figure out the url, then load the new one using the ID of the object in question
$(document).ready(function(){
  $("#CardDeck button").on("click", function() {
    LoadPlacement(this.id);
  });
})

//this is purely a method to allow us easy navigation no matter who's hosting it.
//if we used localhost:3000/ as a pathname, it would cause a problem on codio, and visa versa.
//I have come up with teh solution below, so no matter our host. It will load the right page.
function LoadPlacement(_id){
  var pathname = window.location.pathname;
  pathname = pathname.substring(0, pathname.indexOf("/"));
  pathname += "/placementinfo?_id=" + _id;
  window.location.href = pathname;
}
