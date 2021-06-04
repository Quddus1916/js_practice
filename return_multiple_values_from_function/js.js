function getsize( w,h,d)
{
    var area = w*h;
    var volume=w*h*d;
    var value =[area,volume];
    return value;
}

var area1 = getsize(3,2,1 )[0];
var volume1=getsize(3,2,1 )[1];

var elarea = document.getElementById('area');
elarea.textContent=area1;

var elarea = document.getElementById('volume');
elarea.textContent=volume1;