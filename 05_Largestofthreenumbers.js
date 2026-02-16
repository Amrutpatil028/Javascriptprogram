let a = 10;
let b = 40;
let c = 30;

largestNumber();


function largestNumber() {
    if (a > b && a > c) {
        console.log('largest Number is', a);
    }
    else if (b > a && b > c) {
        console.log('largest Number is', b);
    }
    else {
        console.log('largest Number is', c);
    }
} 

const userInput = prompt("Please enter your name:");
console.log("Hello, " + userInput + "!");