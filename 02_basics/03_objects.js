
//  Object Literals

const myObj = {
    id: 2,
    name: "suraj",
    "full name": "suraj kumar",         // Keys are of string type in JS Objects.
    email: "suraj@google.com"
}

console.log(myObj.email);
console.log(myObj["email"]);
console.log(myObj["full name"]);

// making a symbol key

const key = Symbol("myKey");

myObj.key = "Suraj's key";  // this is the wrong way. this key is not the symbol defined above. 

console.log(myObj);

myObj[key] = "Suraj's key"; // this is the correct way.

console.log(myObj);

// we can also freeze an object to avoid further changes.

//Object.freeze(myObj);  // any changes done on the object after this will not reflect. 

// we can also  assign a function to object.

myObj.func = function(){
    console.log(`Hello ${this.name}!!`);
}

myObj.func();


