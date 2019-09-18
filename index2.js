function getLocation(){
  var data = document.getElementById("location").value
  var api = 'https://api.apixu.com/v1/current.json?key=960d80c99b0644fb923114708193105&q=' + data;
  $.getJSON(api, function(value) {
      var weatherData = value
      var wind = weatherData.current.wind_mph;
      var city = weatherData.location.name;
      var country_name = weatherData.location.country;
      var ftemp = weatherData.current.temp_f;
      var ctemp = weatherData.current.temp_c;
      $("#city").html(city + ", " + country_name);
      $("#temp").html(ftemp + " &#8457;");
      $("#temp").html(ctemp + " &#8451");
      $("#windspeed").html(wind + " mph");

      $('body').css('background-image', 'url(http://il8.picdn.net/shutterstock/videos/6765919/thumb/1.jpg)');
     $("#wicon").html("<img src='https://docs.arnoldrenderer.com//download/attachments/35457902/cloud-2.jpg'>");
  });
}
          
          
          

    
  
