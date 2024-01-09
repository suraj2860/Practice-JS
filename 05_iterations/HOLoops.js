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


// forEach  function

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

// filter function 

const nums = [1,2,3,4,5,6,7,8,9];

const temp = nums.forEach( (item) => item > 5);  // for each doesnot return any value.

console.log(temp);

const arr2 = nums.filter( (item) => item > 5);  // filter will return some value.

console.log(arr2);


// map function

const arr3 = nums.map( (item) => item + 10)

console.log(arr3);

// chaining

const newNums = nums
                .map( (item) => item * 10)
                .map( (item) => item + 1)
                .filter( (item) => item > 40);

console.log(newNums);

// reduce function

const arr4 = nums.reduce( (acc, curr_value) => acc + curr_value, 1)

console.log(arr4);
