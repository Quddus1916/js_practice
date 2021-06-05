var score = 50;
var level = 2;
var msg ='';

if(score>=50)
{
    document.write('you passed'+'<br />');
}
else{
   document.write ('try next time');
}


switch(level)
{
    case 1:
        msg += 'work very hard';
        break;

    case 2:
        document.write('congratulations'+'<br />');
        break;

}


var i=0;

for(i=0;i<10;i++)
{
    document.write(i+'<br />');
}








var score =[20,30,40];
var length= score.length;
var round_num=0;
var msg='';
var i;

for(i=0;i< length;i++)
{
    round_num=i+1;
    msg = 'round'+ round_num +':';
    msg+= score[i] +'<br />';
    document.write(msg);
}


