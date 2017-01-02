$(document).ready(function() {
  weather();
  setInterval(weather, 600000); //Update the weather every 10 minutes.
});

function weather() {
  $.ajax({
    url: 'https://api.apixu.com/v1/forecast.json?key=27152cd6b9024f3da18212146170201&q=32801',
    type: 'GET',
    datatype: 'json',
    success: function(weather) {
      console.log(weather);
      var current = weather['current'],
          temp = Math.round(current['temp_f']),
          currentCondition = current['condition']['text'],
          currentConditionIcon = 'http:'+current['condition']['icon'],
          forecast = weather['forecast']['forecastday'][0]['day'],
          forecastHigh = Math.round(forecast['maxtemp_f']),
          forecastLow = Math.round(forecast['mintemp_f']);
      console.log(temp, currentCondition,currentConditionIcon);
      $('.weather').html('<div class="weather__temp">'+temp+' &deg;</div><div class="weather__condition">'+currentCondition+'</div><div class="weather__forecast">High of '+forecastHigh+'&deg;<br>Low of '+ forecastLow+'&deg;');
    },
    error: function(err) { console.log('err', err); },
  });
}
