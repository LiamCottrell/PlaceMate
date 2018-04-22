//
$(document).ready(function(){
  $("#CardDeck button").on("click", function() {
    LoadPlacement(this.id);
  });
})



function LoadPlacement(_id){
  var pathname = window.location.pathname;
  pathname = pathname.substring(0, pathname.indexOf("/"));
  pathname += "/placementinfo?_id=" + _id;
  window.location.href = pathname;
}
