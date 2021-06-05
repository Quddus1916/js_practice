var today = new Date();
var hours = today.getHours();
var greetings;
if (hours > 18)
{
    greetings = 'Good evening';
}

 else if (hours > 12)
{
    greetings = 'Good afternoon';
}

else if (hours > 0)
{
    greetings = 'Good morning';
}
else
{
    greetings = 'welcome';
}

document.write('<h2>' + greetings + '<h2/>');