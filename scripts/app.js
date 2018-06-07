
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

var list = [];

var addToList = () => {
  let taskValue = document.getElementById('task-input');
  let todoList = document.getElementById('todo-list');
  let listItem = document.createElement('li');

  //Adding new task text to created item
  listItem.innerText = taskValue.value;

  //Add remove functionality to each Item
  listItem.onclick = removeFromList.bind(this, list.length);

  //Adding Item to todo
  todoList.appendChild(listItem);
  list.push(taskValue.value);

  //Resetting the innerText
  taskValue.value = '';
}

var removeFromList = (index) => {
  let todoList = document.getElementById('todo-list');
  console.log(index);
  list.splice(index, 1);
  //clear the DOM list, array of list items will still be there
  todoList.innerHTML = '';

  reconstructList();
}

var reconstructList = () => {
  let todoList = document.getElementById('todo-list');

  list.map((task, index) => {
    let listItem = document.createElement('li');

    //Adding new task text to created item
    listItem.innerText = task;

    //Add remove functionality to each Item
    listItem.onclick = removeFromList.bind(this, index);

    //Adding Item to todo
    todoList.appendChild(listItem);

  })

}
