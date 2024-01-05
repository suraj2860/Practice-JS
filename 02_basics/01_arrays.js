// array 

const arr = [1, 2, 3, 4, 5];
const myArr = ["suraj", "harshit", "sagar", "sourav"];

const myArr2 = new Array(3, 2, "suraj", { id: 2, name: "suraj"}, null, undefined, true);

console.log(myArr2[3].name);


// Array methods

myArr2.push(6);  // Adds element to the last.
myArr2.unshift("sourav");   // Adds element to the start.

console.log(myArr2);

myArr2.pop();   // removes element from last.
myArr2.shift();     // removes element from start.

console.log(myArr2);


// # Slice And splice

const anotherArray = myArr2.slice(1,3);     // returns an array with elements [1,3). without affecting the original array.

console.log("sliced array : ", anotherArray);
console.log("original array : ", myArr2);

const anotherArray2 = myArr2.splice(1,3);   // returns an array with elements [1,3]. it removes the elements from original arrays.

console.log("spliced array : ", anotherArray2);
console.log("original array : ", myArr2);
