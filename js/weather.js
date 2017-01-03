$(document).ready(function() {
  weather();
  setInterval(weather, 600000); //Update the weather every 10 minutes.
});

function weather() {
  $.ajax({
    url: 'https://api.apixu.com/v1/forecast.json?key=27152cd6b9024f3da18212146170201&q=32801&days=7',
    type: 'GET',
    datatype: 'json',
    success: function(weather) {
      console.log(weather);
      var current = weather['current'],
          temp = Math.round(current['temp_f']),
          currentCondition = current['condition']['text'],
          currentConditionIcon = 'http:'+current['condition']['icon'],
          forecast = weather['forecast']['forecastday'];

      // console.log(forecast);
      $('.weather').html('<div class="weather__temp">'+temp+' &deg;</div><div class="weather__condition">'+currentCondition+'</div><ul class="weather__forecast"></ul>');
      $.each(forecast, function( index, forecastDay) {
        var fDay = forecastDay['date'],
            fHigh = Math.round(forecastDay['day']['maxtemp_f']),
            fLow = Math.round(forecastDay['day']['mintemp_f']);
            fIcon = 'http:' + forecastDay['day']['condition']['icon']
        $('.weather__forecast').append('<li><img src="'+fIcon+'"><span>'+fDay+' </span><span>'+fHigh+' &deg;</span><span>'+fLow+' &deg;</span></li>');
        console.log(fDay, fHigh, fLow);
      });
    },
    error: function(err) { console.log('err', err); },
  });
}
