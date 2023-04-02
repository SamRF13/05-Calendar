// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
console.log(localStorage.getItem("message10"));
// dayjs().hour()
 // gets current hour



var message9 = localStorage.getItem("message9");
  $("textarea#text9").text(message9)

var message10 = localStorage.getItem("message10");
  $("textarea#text10").text(message10)


  var message11 = localStorage.getItem("message11");
  $("textarea#text11").text(message11)


  var message12 = localStorage.getItem("message12");
  $("textarea#text12").text(message12)


  var message13 = localStorage.getItem("message13");
  $("textarea#text13").text(message13)


  var message14 = localStorage.getItem("message14");
  $("textarea#text14").text(message14)


  var message15 = localStorage.getItem("message15");
  $("textarea#text15").text(message15)


  var message16 = localStorage.getItem("message16");
  $("textarea#text16").text(message16)


  var message17 = localStorage.getItem("message17");
  $("textarea#text17").text(message17)








var today =dayjs()

var nineAM = dayjs().set('hour', 9);
var tenAM = dayjs().set('hour', 10);
var elevenAM = dayjs().set('hour', 11);
var twelveAM = dayjs().set('hour', 12);
var onePM = dayjs().set('hour', 13);
var twoPM = dayjs().set('hour', 14);
var threePM = dayjs().set('hour', 15);
var fourPM = dayjs().set('hour', 16);
var fivePM = dayjs().set('hour', 17);

var hourDif9 = today.diff(nineAM, 'hour');
var hourDif10 = today.diff(tenAM, 'hour');
var hourDif11 = today.diff(elevenAM, 'hour');
var hourDif12 = today.diff(twelveAM, 'hour');
var hourDif13 = today.diff(onePM, 'hour');
var hourDif14 = today.diff(twoPM, 'hour');
var hourDif15 = today.diff(threePM, 'hour');
var hourDif16 = today.diff(fourPM, 'hour');
var hourDif17 = today.diff(fivePM, 'hour');
console.log('hourDif17', hourDif17);

if (hourDif9 == 0) { 

  $("#hour-9").addClass("present");
} else if(hourDif9 < 0){
  $("#hour-9").addClass("future");
} else {
  console.log('hourDif9', hourDif9);
  $("#hour-9").addClass("past");
}

if (hourDif10 == 0) { 
  $("#hour-10").addClass("present");
} else if(hourDif10 < 0){
  $("#hour-10").addClass("future");
} else {
  $("#hour-10").addClass("past");
}

if (hourDif11 == 0) { 
  console.log('(hourDif11', hourDif11);
  console.log('here');
  $("#hour-11").addClass("present");
} else if(hourDif11 < 0){
  console.log('here');
  $("#hour-11").addClass("future");
} else {
  console.log('here');
  $("#hour-11").addClass("past");
}

if (hourDif12 == 0) { 
  $("#hour-12").addClass("present");
} else if(hourDif12 < 0){
  $("#hour-12").addClass("future");
} else {
  $("#hour-12").addClass("past");
}

if (hourDif13 == 0) { 
  $("#hour-13").addClass("present");
} else if(hourDif13 < 0){
  $("#hour-13").addClass("future");
} else {
  $("#hour-13").addClass("past");
}

if (hourDif14 == 0) { 
  $("#hour-14").addClass("present");
} else if(hourDif14 < 0){
  $("#hour-14").addClass("future");
} else {
  $("#hour-14").addClass("past");
}

if (hourDif15 == 0) { 
  $("#hour-15").addClass("present");
} else if(hourDif15 < 0){
  $("#hour-15").addClass("future");
} else {
  $("#hour-15").addClass("past");
}

if (hourDif16 == 0) { 
  $("#hour-16").addClass("present");
} else if(hourDif16 < 0){
  $("#hour-16").addClass("future");
} else {
  $("#hour-16").addClass("past");
}

if (hourDif17 == 0) { 
  $("#hour-17").addClass("present");
} else if(hourDif17 < 0){
  $("#hour-17").addClass("future");
} else {
  $("#hour-17").addClass("past");
}

document.getElementById("save9").addEventListener("click", function ()
{
  var message10 = $('textarea#text9').val();
    localStorage.setItem("message9", message10) ;
} ,);

document.getElementById("save10").addEventListener("click", function ()
{
  var message10 = $('textarea#text10').val();
    localStorage.setItem("message10", message10) ;
} ,);

document.getElementById("save11").addEventListener("click", function ()
{
  var message10 = $('textarea#text11').val();
    localStorage.setItem("message11", message10) ;
} ,);

document.getElementById("save12").addEventListener("click", function ()
{
  var message10 = $('textarea#text12').val();
    localStorage.setItem("message12", message10) ;
} ,);

document.getElementById("save13").addEventListener("click", function ()
{
  var message10 = $('textarea#text13').val();
    localStorage.setItem("message13", message10) ;
} ,);

document.getElementById("save14").addEventListener("click", function ()
{
  var message10 = $('textarea#text14').val();
    localStorage.setItem("message14", message10) ;
} ,);

document.getElementById("save15").addEventListener("click", function ()
{
  var message10 = $('textarea#text15').val();
    localStorage.setItem("message15", message10) ;
} ,);

document.getElementById("save16").addEventListener("click", function ()
{
  var message10 = $('textarea#text16').val();
    localStorage.setItem("message16", message10) ;
} ,);

document.getElementById("save17").addEventListener("click", function ()
{
  var message10 = $('textarea#text17').val();
    localStorage.setItem("message17", message10) ;
} ,);

dayjs().hour() // gets current hour

$('#currentDay').text(today);
$('#hour-9')
$('#hour-10')
$('#hour-11')
$('#hour-12')
$('#hour-13')
$('#hour-14')
$('#hour-15')


  var nineAM = $('#hour-9').text();


$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
