//Use Jquery id to call a click method that will produce an alert for the user.
$('#searchbtn').click(function() {
  Search = $('#SearchParameters').val()
  if (Search.length > 0) {
      var Search = {SearchParameter: Search}
       $.ajax({
        url: '/panels',
        type:'get',
        dataType:'json',
        data: Search
      }).done(function(){
           //this doesn't fire for some reason
          alert("suc");
       }).fail(function(response) {
          $('#CardDeck').html(response.responseText)
        });}})

