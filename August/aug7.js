let string = "Javascript"
let endProduct = string.substr(3, 5)
console.log(endProduct);



let word = "My name us Asabenah Yetayeh. I live in Finland, Helsinki ryyfgj"
let word2 = word.substr(48, 8)
console.log(word2);

let word3 = 'My name is very long because it is not used very well yunno'
let word4 = word3.substr(21, 7)
console.log(word4);

let test = "My name us Asabenah Yetayeh. I live in Finland, Helsinki ryyfgj"
let test2 = test.substring(11, 19)
console.log(test2);


// split
let ex = ' IAm FLee '
let exSplit = ex.split(` `)

console.log(exSplit);

let trimmer = ex.trim()
console.log(trimmer);


let string2 = "  30 Days Of Javascript  "
let stringInc = string2.includes(' ')
console.log(stringInc);

let stringRep = string2.replace('Days', 'Weeks')
let stringRep2 = string2.replaceAll(' ', '')
console.log(stringRep);
console.log(stringRep2);


let herName = "Sholape"
let herLength = herName.length-1
console.log(herLength);


let myText = "I am driving"
let myText2 = "I cant pick up"

let together = myText.concat(myText2)
console.log(together);



// ASSIGNMENT
// SHIT, FUVK, STUPID, FOOLISH
// When these words are filled in an input tag, and the btton is clicked to submit, it should censor the four words
// like i dont do shit, should come out as i dont do ****