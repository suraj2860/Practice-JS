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


