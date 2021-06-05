var tabs=3;
var operatior ='addition';
var i=1;
var msg ='';


if(operatior === 'addition')
{
    while(i<11)
    {
        msg+= i + '+' + tabs + '='+ (i+tabs) + '<br/>';
        i++;
    }
}


var el = document.getElementById('board');
el.innerHTML=msg;