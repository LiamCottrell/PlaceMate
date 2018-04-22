$(document).ready(function(){
  GenerateInfo()
  })

function GenerateInfo(){
  data = {Title : "First Line"}
  $.ajax({
   url: '/placementinfo/populate',
   type:'get',
   dataType:'json',
   data: data
 }).done(function(){
      //this doesn't fire for some reason
     alert("suc");
  }).fail(function(response) {
     $('#PlacementDetails').html(response.responseText)
     createMap() 
     $("#PlacementDetails button").on("click", function() {
         alert(this.id);
   });
})}

function createMap(){
  var mymap = L.map('placeMap').setView([57.14333850000001, -2.1099314000000504], 13);
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1IjoiZmFsY28yNDA0IiwiYSI6ImNqZjJyY3F5djE3aTcyeG1hanU3YXc3MjIifQ.KiuTxXCltv6kRxY6n5srAA'
  }).addTo(mymap);
  var marker = L.marker([57.14333850000001, -2.1099314000000504]).addTo(mymap);
  marker.bindPopup("<b>PwC</b><br /> The Capitol, 431 Union St, Aberdeen AB11 6DA").openPopup();
}
