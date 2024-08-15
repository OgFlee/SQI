let num = 4
let num1 = 5

if (num > num1) {
    console.log(`${num} is the greater value`);
} else {
    console.log(`${num} is not the greater value`);
}

let a = `54t`
a = Number(a)
console.log(a);

let bool = '3' == 3
console.log(bool);  //true, same numrical value

let boo = '3' === 3
console.log(boo);  //false, different data type


// alert('This is a test')

// window.confirm('Are you there')

 let message = window.prompt('can i know you?', 'write here')

 if (message.trim()=== '')  {
    alert('no text provided')
 } else{
    alert(`hi ${message}`)
 }






 //ASSIGNMENT
 //1. Write a program which tells us the number of days in a month, it will ask for an input and when the month is given, it displays the number of days in  that selected month
 //2. guessing game, in the input, type a number only within 0 and 9, need math.random in a function