

// string,array,object,map,set,htmlelement
// where is html element ?
// what  is html element ?

//<h2 class = "one"  id = "two" name = "nm">Javascript</h2>

// tagName 
let tagName = document.querySelector('h2')
console.log(tagName)
//id 
let byId = document.querySelector('#two')
console.log(byId)
//class
let byClass = document.querySelector('.one')
console.log(byClass)
//css selector
let byName = document.querySelector('h2[name="nm"]')
console.log(byName)

// program1
// updating the text of html element
console.log(byName.textContent)
byName.textContent = "Python"


// program2
//updating the text of html element on click
byName.addEventListener('click',function(){
    byName.textContent ="Html"
})

// program3
let headingOne = document.querySelector('h1')
console.log(headingOne)
headingOne.addEventListener('mouseover',function(){
    headingOne.style.color = "yellow"
})
headingOne.addEventListener('mouseout',function(){
    headingOne.style.color = "purple"
})


// let info = {
//     firstName:'chinmay',
//     lastName:'deshpande'
// }
// console.log(info.firstName)
// info.firstName = "tanmay"