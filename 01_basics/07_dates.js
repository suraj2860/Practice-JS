// Date

const today = new Date();

console.log(today);
console.log(today.toString());
console.log(today.toDateString());
console.log(today.toLocaleDateString());
console.log(today.toLocaleString());
console.log(today.toLocaleTimeString());

const date1 = new Date(2023, 0, 15, 5, 30);
const date2 = new Date("1/1/2024");     //  mm/dd/yy

console.log(date1.toString());
console.log(date2.toString());

// Timestamps

let myTimestamp = Date.now();       

console.log(myTimestamp);  // prints timestamp in ms.
console.log(today.getTime());   // converts date to timestamp.
console.log(Math.floor(Date.now()/1000));   // prints timestamp in seconds.

console.log(today.getMonth() + 1);  // returns month (0 based indexed).
console.log(today.getDay());    // returns day of the week. (monday = 1).



