// for of loop

const arr = [1,2,3,4,5];

const mapTest = new Map();
mapTest.set("name","suraj");
mapTest.set("age",24);
mapTest.set("location","Roorkee");
mapTest.set("email","suraj@google.com");

const myObj = {
    js: "javaScript",
    py: "python",
    cpp: "C++"
};


for(const val of arr){
    console.log(val);
}

for(const [key,value] of mapTest){
    console.log(key + " - " +  value);
}

// for(const val of myObj){
//     console.log(val);       // myObj is not iterable.
// }

// for in loop : returns the key.

for(const val in arr){
    console.log(val);
}

for(const val in mapTest){      // map is notiterable using for in
    console.log(val);       
}

for(const val in myObj){
    console.log(myObj[val]);       
}


// forEach  Loop

const coding = ["js", "py", "C#", "C++", "java"];

coding.forEach(function (item){      // for each takes call-back functions as argument.
    console.log(item)
});

coding.forEach( (item) => {     // foreach using arrow functions
    console.log(item)
});

coding.forEach( (item, index, arr) => {
    console.log(`value : ${item} , index : ${index}, array : ${arr}`);
});


// passing the reference of the function in forEach loop.

function printMe(){
    console.log("Hello");
}

coding.forEach(printMe);
