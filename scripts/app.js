// ========== DATE AND TIME FUNCTIONALITY ==========

//  Collecting the clock div from the HTML
let clock = document.querySelector('.time');

// startTime() gathers the current date and runs checkTime() to update the date
const startTime = () => {
  let today = new Date();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();

  minute = checkTime(minute);
  second = checkTime(second);

  clock.innerHTML = `${hour} : ${minute}`

  let t = setTimeout(startTime, 500);
}

// checkTime() maintains 0s in front of the date unless it's a double-digit number
const checkTime = (i) => {
  if (i < 10) {
    i = '0' + i
  };
  return i;
}

// ========== TODOLIST FUNCTIONALITY ==========

let list = [];
const taskInput = document.getElementById('task-input');

taskInput.onkeyup = function(e){
  if (e.keyCode == 13){
    addToList();
  }
}

const addToList = () => {
  let taskValue = document.getElementById('task-input');
  let todoList = document.getElementById('todo-list');
  let listItem = document.createElement('li');
  let trashCanButton = document.createElement('span');

  //Add remove functionality to each trash can span
  trashCanButton.onclick = removeFromList.bind(this, list.length);

  //Add trash can symbol to trashCanButton
  trashCanButton.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';

  //Add strikethrough functionality to each list items
  listItem.onclick = function() {
    this.classList.toggle('striked-out');
  }
  //Adding new task text to created item
  listItem.innerText = taskValue.value;
  //Adding Item to todo
  listItem.insertBefore(trashCanButton, listItem.childNodes[0]);
  todoList.appendChild(listItem);
  list.push(taskValue.value);

  //Resetting the innerText
  taskValue.value = '';
}

const removeFromList = (index) => {
  let todoList = document.getElementById('todo-list');
  console.log(index);
  list.splice(index, 1);
  //clear the DOM list, array of list items will still be there
  todoList.innerHTML = '';
  reconstructList();
}

const reconstructList = () => {
  let todoList = document.getElementById('todo-list');

  list.map((task, index) => {
    let listItem = document.createElement('li');
    let trashCanButton = document.createElement('span');
    //Add remove functionality to each trash can span
    trashCanButton.onclick = removeFromList.bind(this, index);
    //Add trash can symbol to trashCanButton
    trashCanButton.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';
    //Add strikethrough functionality to each list items
    listItem.onclick = function() {
      this.classList.toggle('striked-out');
    }
    //Adding new task text to created item
    listItem.innerText = task;
    //Adding Item to todo
    todoList.appendChild(listItem);
    //Add trash can to list item
    listItem.insertBefore(trashCanButton, listItem.childNodes[0]);
  })
}

// ========== BACKGROUND IMAGE FUNCTIONALITY ==========

// function getRandomBackgroundImage(min, max) {
//   var index = Math.floor(Math.random() * (max - min)) + min;
//   var url = 'url(' + background_images[index] + ')';
//   return url;
// }

// ========== WEATHER APP FUNCTIONALITY ==========

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


// ========== QUOTE FUNCTIONALITY ==========
//https://forismatic.com/en/api/

var displayQuote = document.querySelector('.quote');

function populate(text) {
	console.log(text.quoteText);
	// FIXME put the text on the page
  displayQuote.innerHTML = text.quoteText;
}
function newQuoteGenerator() {
  var quoteUrl = "http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=populate"

  var getSettings = {
  	url: quoteUrl,
  	dataType: "jsonp",
  	crossDomain: true
  };

  $.get(getSettings);
}

newQuoteGenerator();
