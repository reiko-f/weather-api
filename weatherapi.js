$('#city-btn').click(function() {

  let city = $('#city-name')[0].value;

  $.getJSON("https://api.openweathermap.org/data/2.5/forecast?q=" + city + 

",US&units=imperial&appid=168c59fa9d454fc2fc50577992d1b57d", function(data) {
  console.log(data);  

  let icon = "https://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png";
  // console.log(icon);

  let weather = data.list[0].weather[0].main;

  let temp = data.list[0].main.temp + ' F';

  $("#city").append(city);
  $("#icon").attr("src", icon);
  $("#weather").append(weather);
  $("#temp").append(temp);
  $("#city-name").hide();
  $("#city-btn").hide();
  $("#weather-container").css("background", "rgb(111, 247, 217)");
  $("#weather-container").css("text-align", "center");

});
});


