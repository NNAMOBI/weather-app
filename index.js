$(function() {
  var api= 'https://api.apixu.com/v1/current.json?key=a0e38d959bb44046933154705193105&q=Lagos'
   $.getJSON(api, function(data) {
     var weatherData = data; 
     var wind = weatherData.current.wind_mph;
     var city = weatherData.location.name;
     var country_name = weatherData.location.country;
     var ftemp = weatherData.current.temp_f;
     var ctemp = weatherData.current.temp_c;
     $("#city").html(city + "," + country_name);
     $("#temp").html(ftemp + " &#8457;");
     $("#temp").html(ctemp + " &#8451");
     $("#windspeed").html(wind + " mph");
     $("#temp").on('click', function() {
       var mydata=$("#temp").text();
       if (mydata.indexOf(ctemp)>-1){
         $("#temp").html(ftemp + "&#8457;")
       }else{
         $("#temp").html(ctemp + "&#8451;")
       
     }});
     $('body').css('background-image', 'url(http://il8.picdn.net/shutterstock/videos/6765919/thumb/1.jpg)');
     $("#wicon").html("<img src='https://docs.arnoldrenderer.com//download/attachments/35457902/cloud-2.jpg'>");
       
     });
  });



  
     
   
  