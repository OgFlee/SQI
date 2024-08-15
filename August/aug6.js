let word = "javascript";
console.log(word[4]);

let one = "i";
let two = "am";
let three = "fl";
let four = "ee";

let join = one + " " + two + " " + three + four;
console.log(join);

// to check the data type of a variable
console.log(typeof join);

// converting a string to a number
// Use parseInt
// using Number constructor (Number)
// adding a plus sign or oprator sign

// let five = 5
// let six = 6
// let seven = '7'
// let eight = 8

// let operation = five + six + seven + eight
// console.log(typeof operation);
// console.log(operation);

let five = 5;
let six = 6;
let seven = "7";
let eight = 8;

let operation = five + six + seven + eight;
let operation1 = `${five} ${six} ${seven} ${eight}`;
console.log(typeof operation);
console.log(operation);
console.log(typeof operation1);
console.log(operation1);

let a = 3;
let b = 4;

let solution = `The sum of ${a} and ${b} is ${a + b}`;
console.log(solution);


let value = 200.67
let value2 =200.46
let roundedValue = Math.round(value)
let roundedValue2 = Math.round(value2)
let roundedValue3 = Math.floor(value2)
console.log(roundedValue);
console.log(roundedValue2);
console.log(roundedValue3);


// let value22 = (0, 1, 2,3,4,5,6,7,8,9)
let randomNumber = Math.ceil(Math.random() * 10)
// let randomNumber = Math.floor(Math.random() * 11)
// using like random is 0 - 0.999, then 0.99 * 10 will be
console.log(randomNumber);




// assignment
// trying random numbers from 10-100
// read on string methods

// trying random numbers from 10-100
let randomNumber2 = Math.floor(Math.random() * 91 + 10)
console.log(randomNumber2);
// here are the stuffs to note fess
// 1. random() generates from the ranges of 0 - 0.999, yeah?
// 2. then multiplying by 91 gives a range of 0 to 90.909
// 3. then adding 10 shifts the range to 10 to 100.909
// 4. which will then give a range of 10-100, cos i used floor as it rounds to nearest int