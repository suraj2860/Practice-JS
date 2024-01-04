const balance = new Number(100);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.98188;

console.log(otherNumber.toPrecision(4));

const temp = 1000000000;

console.log(temp.toLocaleString('en-IN'));


// ++++++++++++++++  Maths  ++++++++++++++

console.log(Math.random());  // give random values between 0 and 1
console.log((Math.random() * 10) + 1); // gives the value between 1 and 10
console.log(Math.floor(Math.random() * 10) + 1); // gives values between 1 and 10


const min = 10; 
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min );

