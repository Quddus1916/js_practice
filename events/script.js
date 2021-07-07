



// function checkusername(){
//     var feedback = document.getElementById('feedback');
//     var name = document.getElementById('username');
//     if(name.value.length<5)
//     {
//         feedback.textContent='username must be above 5 characters'

//     }
//     else
//     {
//         feedback.textContent=''
//     }
// }

// var el = document.getElementById('username');
// //el.onblur = checkusername;
// el.addEventListener('blur',checkusername,false)

// function itemdone(e)
// {
//     var target = e.target
//     var elparent = target.parentNode
//     var elgrandparent= target.parentNode.parentNode
//     elgrandparent.removeChild(elparent)
//     e.preventDefault()

// }


// var el = document.getElementById('shoppinglist')
//  el.addEventListener('click',function(e){itemdone(e)},false)

function char_count(e){
    var textentered = document.getElementById('message').value;
    var chardisplay = document.getElementById('charleft');
    var counter =(textentered.length);
    chardisplay.textContent = counter+1;
    
  

}

var el = document.getElementById('message')
el.addEventListener('keypress',char_count,false)