//Author - Nicholas Wright
//Ideally, I would like to have done this on the server side, as it makes more sense
//However, instead I have included this on client side so we could have an API call on the server and one on the client
//It makes use of multiple API calls, one calls our own api to fetch the postcode of the placement
//The second, calls google map api using our key (Another reason I would have rather had this on the server - Security)
//it gathers the information from googles api for the longitude and latitude using our postcode
//then sends that into our leaflet api to generate our map for our placement!
$(document).ready(function(){
  FetchAddress(id)
  })

function FetchAddress(id){
  data = {_id : id}
  $.ajax({
   url: '/placementInfo/GetAddress',
   type:'get',
   dataType:'json',
   data: data
 }).then(function(response){
   FetchCordinates(response)
 }).fail(function(response){
   FetchCordinates(response.responseText)
 })
}

function FetchCordinates(Address){
  url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + Address + '&key=AIzaSyAkXxpVWFmQXFvizcs5fXuBv1hYhvTw1os'
  $.ajax({
   url: url,
   type:'get',
   dataType:'json',
   async: false
 }).then(function(response){
   LatLng = [response.results[0].geometry.location.lat, response.results[0].geometry.location.lng]
   GenerateMap(LatLng)
 })
}

function GenerateMap(latlng){
  var mymap = L.map('placeMap').setView([latlng[0],latlng[1]], 13);
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1IjoiZmFsY28yNDA0IiwiYSI6ImNqZjJyY3F5djE3aTcyeG1hanU3YXc3MjIifQ.KiuTxXCltv6kRxY6n5srAA'
  }).addTo(mymap);
  var marker = L.marker([latlng[0],latlng[1]]).addTo(mymap);
}

$("#Applybtn").click(function() {
  window.location.href = link;
});
