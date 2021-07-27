// var el = document.getElementsByClassName('title')
// Array.from(el).forEach(function(e){ console.log(e)})

//const listelement = document.querySelector('#book-list li:nth-child(1) .name')
//console.log(listelement)

//const allelements = document.querySelectorAll('#book-list li .name');
//console.log(allelements); //just show only one element bt var contains collection

// Array.from(allelements).forEach(function(book){
//     console.log(book.textContent)
// })

// var change = document.querySelector('#book-list li:nth-child(1) .name')
// change.textContent ='changed name'


//const value = document.querySelector('#book-list');
//console.log(allelements); //just show only one element bt var contains collection
//value.innerHTML+='<h2> these are book titles</h2>'


// const banner = document.querySelector('#page-banner')
// console.log('#page-banner node type is:', banner.nodeType)
// console.log('#page-banner node name is:', banner.nodeName)
// console.log('#page-banner node child is:', banner.hasChildNodes())



// const clonedbannner= banner.cloneNode(true)
// console.log(clonedbannner)



// const booklist = document.querySelector('#book-list')

// booklist.previousElementSibling.querySelector('p').innerHTML+='<br/> enjoy with books'


var btns = document.querySelectorAll('#book-list .delete')
Array.from(btns).forEach(function(btn){
    btn.addEventListener('click',function(e){
        const li = e.target.parentElement
        li.parentNode.removeChild(li)
    })
})