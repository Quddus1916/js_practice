
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

var hotelements = document.querySelectorAll('li.hot');
if(hotelements.length>1)
{
    for( i=0;i<hotelements.length;i++)
    {
        hotelements[i].className='cool';
    }
}