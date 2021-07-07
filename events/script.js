



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

function itemdone(e)
{
    var target = e.target
    var elparent = target.parentNode
    var elgrandparent= target.parentNode.parentNode
    elgrandparent.removeChild(elparent)
    e.preventDefault()

}


var el = document.getElementById('shoppinglist')
 el.addEventListener('click',function(e){itemdone(e)},false)

