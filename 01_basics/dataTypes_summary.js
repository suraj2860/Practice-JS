// # Primitive Data Types

// 7 : String, Number, Boolean, null, undefined, Symbol, BigInt

const Id = Symbol('123');
const anotherId = Symbol('123');

console.log(Id === anotherId);

// # Reference Type (Non-Primitive Data Types)

// Array, Objects, Function

const anime = ["Naruto", "Baki", "Boruto", "Tokyo Revengers"];

let myObj = {
    id: 1,
    name: "Suraj",
    city: "Roorkee"
};

const myFunc = function(){
    console.log("Hello World!!");
}

// typeof(null) => object
// typeof(undefined) => undefined
// typeof(function) => function
// typeof(Array) => object
// typeof(Symbol) => Symbol



// +++++++++++++++++++  Stack and Heap  +++++++++++++++++


// Primitive data types  ==> Stack  (Value type)

// Non-Primitive data types  ==> Heap  (Reference type)

let username = "suraj";

let anotherUsername = username;   // value of the username is copied and assigned to anotherUsername.

anotherUsername = "sourav";

console.log(username);  //suraj
console.log(anotherUsername);   //sourav


let userOne = {
    name: "suraj",
    email: "suraj@gmail.com"
};

let userTwo = userOne;   // reference of the userOne is assigned to userTwo;

userTwo.email = "sourav@gmail.com";

console.log(userOne.email); //sourav@gmail.com
console.log(userTwo.email); //sourav@gmail.com







