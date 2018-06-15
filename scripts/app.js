
//code for local time (https://codepen.io/deegill/pen/iqJFK)
$(document).ready(function() {
// Create two variables with names of months and days of the week in the array
var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

// Create an object newDate()
var newDate = new Date();
// Retrieve the current date from the Date object
newDate.setDate(newDate.getDate());
// At the output of the day, date, month and year
$('#Date').html(dayNames[newDate.getDay()] + " " + monthNames[newDate.getMonth()] + ' ' + newDate.getDate() + ' ' + newDate.getFullYear());

setInterval( function() {
    // Create an object newDate () and extract the second of the current time
    var seconds = new Date().getSeconds();
    // Add a leading zero to the value of seconds
    $("#sec").html(( seconds < 10 ? "0" : "" ) + seconds);
    },1000);

setInterval( function() {
    // Create an object newDate () and extract the minutes of the current time
    var minutes = new Date().getMinutes();
    // Add a leading zero to the minutes
    $("#min").html(( minutes < 10 ? "0" : "" ) + minutes);
    },1000);

setInterval( function() {
    // Create an object newDate () and extract the clock from the current time
    var hours = new Date().getHours();
    // Add a leading zero to the value of hours
    $("#hours").html(( hours < 10 ? "0" : "" ) + hours);
    }, 1000);

});

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
  trashCanButton.innerText = 'X ';

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
    trashCanButton.innerText = 'X ';


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


function getRandomBackgroundImage(min, max) {
  var index = Math.floor(Math.random() * (max - min)) + min;
  var url = 'url(' + background_images[index] + ')';
  return url;
}
