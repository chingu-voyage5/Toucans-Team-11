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