// var el = document.getElementsByClassName('title')
// Array.from(el).forEach(function(e){ console.log(e)})

const listelement = document.querySelector('#book-list li:nth-child(1) .name')
//console.log(listelement)

const allelements = document.querySelectorAll('#book-list li .name');
//console.log(allelements); //just show only one element bt var contains collection

Array.from(allelements).forEach(function(book){
    console.log(book.textContent)
})

var change = document.querySelector('#book-list li:nth-child(1) .name')
change.textContent ='changed name'


const value = document.querySelector('#book-list');
//console.log(allelements); //just show only one element bt var contains collection
value.innerHTML+='<h2> these are book titles</h2>'
