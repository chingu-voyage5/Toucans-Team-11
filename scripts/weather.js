$(document).ready(function() {
  var fahrenheit, celsius;
	var weatherApiUrl="https://api.openweathermap.org/data/2.5/weather";
  var apiKey = "83c792dc1352781699e5826c9c270917"; 
	getLatLong();
	function getWeatherData(){
		$.ajax({
			url: weatherApiUrl,
			type: 'GET',
			dataType: 'json',
			success: function(data) {
				var temperature=data.main.temp;
				celsius=temperature;
				fahrenheit=celsius*1.8+32;
				var icon=data.weather[0].icon;
				var weatherDetail=data.weather[0].main+", "+data.weather[0].description;
				$('.weatherDetail').html(weatherDetail);
				$('.iconpic>img').attr('src','http://openweathermap.org/img/w/'+icon+'.png');
				$('.temp').html(temperature+"&#8451;");
			},
			error: function(err) {
				alert('Oops something went wrong, Please try again.');
				console.log(err);
			}
		});
	}
	function getLatLong(){
		$.ajax({
			url: "https://geoip-db.com/json/",
			type: 'GET',
      dataType: 'json',
			success: function(data){
        var lat = data.latitude;
        var long = data.longitude;
        $('.city').html(data.city);
				$('.country').html(data.country_name);
        weatherApiUrl += "?lat="+lat+"&lon="+long+"&APPID="+apiKey+"&units=metric";
        getWeatherData();
      },
			error: function(err) {
				alert('Oops something went wrong, Please try again.');
				console.log(err);
			}
		});
	}
	//toggle between celsius and fahrenheit
	$('.toggle .btn').click(function(){
		// if the div has id as c then convert temperature to fahrenheit
		if($('.toggle').attr('id')=='c'){
			$('.temp').html(fahrenheit+"&#8457;");
			$('.toggle').attr('id','f');
		}
	 else if($('.toggle').attr('id')=='f'){
		 //else if div as id as f than convert temprature to celsius
			$('.temp').html(celsius+"&#8451;");
			$('.toggle').attr('id','c');
		}
	});
});