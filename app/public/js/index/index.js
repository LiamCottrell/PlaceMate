$(document).ready(function(){
  FetchPanels()
  })

function FetchPanels(){
  data = {SubjectParameter: "Computing"}
  $.ajax({
   url: '/panels',
   type:'get',
   dataType:'json',
   data: data
 }).done(function(){
      //this doesn't fire for some reason
     alert("suc");
  }).fail(function(response) {
     $('#CardDeck').html(response.responseText)
     $("#CardDeck button").on("click", function() {
         alert(this.id);})
   });
}
