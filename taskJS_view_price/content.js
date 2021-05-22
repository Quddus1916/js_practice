
//welcome message
var greetings = 'hello ';
var name = 'molly';
var message =', please check your orders';
var welcome = greetings + name + message;

var elwelcome = document.getElementById('greetings');
elwelcome.textContent =  welcome;

//calculating values 
var c_sign = 'nafiul quddus';
var t_tiles = c_sign.length -1;
var s_total = t_tiles * 5;
var ship_cost= 7;
var g_total = ship_cost + s_total;

// putting values in appropriate columns

var elsign = document.getElementById('sign');
elsign.textContent=c_sign;

var eltiles = document.getElementById('t_tiles');
eltiles.textContent=t_tiles;

var elstotal = document.getElementById('subtotal');
elstotal.textContent= s_total;

var elship = document.getElementById('shipcost');
elship.textContent= ship_cost;

var gtotal = document.getElementById('grandtotal');
gtotal.textContent= g_total;


