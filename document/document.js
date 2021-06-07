
//var el = document.getElementById('one');
//el.className = 'cool';


// var element = document.getElementsByClassName('hot');
// if(element.length>1)
// {
//     var first_item = element.item[0];
// }

// var elements = document.getElementsByClassName('hot');
// if(elements.length>1){
//     var el3 = elements[2];
//     el3.className = 'cool';
// }

// var hotelements = document.querySelectorAll('li.hot');
// if(hotelements.length>1)
// {
//     for( i=0;i<hotelements.length;i++)
//     {
//         hotelements[i].className='cool';
//     }
// }

// Dom tree manupulation:::::::::::::::element added to first and last position

var list = document.getElementsByTagName('ul')[0];

var last_element = document.createElement('li');
var last_Text = document.createTextNode('cream');
last_element.appendChild(last_Text);
list.appendChild(last_element);


var first_element = document.createElement('li');
var first_text = document.createTextNode('mango');
first_element.appendChild(first_text);
list.insertBefore(first_element,list.firstChild);

var el1 = document.getElementsByTagName('li').item(0);
el1.setAttribute('class','hot');

var el2 = document.getElementsByTagName('li').item(5);
el2.setAttribute('class' ,'cool');






