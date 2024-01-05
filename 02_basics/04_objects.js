const myObj = new Object();  // we can object like this also!!

const obj = {};

obj.id = "123";
obj.name = "suraj";
obj.email = "suraj@google.com";

console.log(myObj);


//Merging two objects

const obj1 = {1:"a", 2:"b"};
const obj2 = {4:"a", 3:"b"};

const obj3 = {obj1, obj2};  // this is wrong. it will create nested objects.

const obj4 = Object.assign({}, obj1, obj2);  // this is correct way.

// there is one more way!! 

const obj5 = {...obj1, ...obj2};

console.log(obj5);


// Obkect Methods

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));
console.log(obj.hasOwnProperty("name"));


// Object De-structuring

const {name: username} = obj;

console.log(username);

