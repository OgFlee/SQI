let todaysClass = 'Introduction to Js'
console.log(todaysClass);

// let boilingPoint = '100'
// console.log(boilingPoint) 
// at this point the console log reads 100

// boilingPoint = '40'

// to set a constant value for a variable, const keyword is used
const boilingPoint = '100'
console.log(boilingPoint)


let myFirstDiv = document.getElementById("div")
console.log(myFirstDiv);

myFirstDiv.style.backgroundColor = "yellow"
myFirstDiv.style.height = "200px"
myFirstDiv.style.width = "200px"


// to put  tags or add a new tag to a html code on JS
// and it can be done with either innerHTML(TO PUT A NEW HTML TAG), innerTEXT(to add a text), textCONTENT
// while trying to use a tag or add a tag from js to HTML, use a backstrick ``

myFirstDiv.innerHTML = "<p>This is an inner text </p>"
myFirstDiv.innerHTML = `<img width='100' height='100' id='img' />`
let myImage = document.getElementById('img')
console.log(img);
myImage.src = 'home-dropdown.jpeg'
myImage.style.borderRadius = '20px'


let pTag = document.createElement("p")
console.log(pTag);
// pTag.innerText = 'testing'
// console.log(pTag);  WROMG
// TO PUT A TAG INTO A PARTICULAR DIV OR ANOTHER TAG, append, prepend
myFirstDiv.appendChild(pTag)
pTag.innerText = 'testing'





