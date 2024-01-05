const marvel_heros = ["ironman", "spiderman", "thor"];
const dc_heros = ["superman", "batman", "flash"];

// How will you merge both the arrays????

// marvel_heros.push(dc_heros);  // using push???

// No, this will insert the dc_heros array as an element in marvel_heros. (Array inside Array).

const all_heros = marvel_heros.concat(dc_heros); // using concat??

// Yes, this will merge both the arrays as desired.
console.log(all_heros);

// there is one more way......

// by using Spread operator.

const all_heros2 = [...marvel_heros, ...dc_heros];

console.log(all_heros2);

const arr1 = [1,2,3,4,[3,4,[5,6,7,[4]]]];

const arr2 = arr1.flat(Infinity);         // combines all elements of a nested array into a new array.

console.log(arr2);

console.log(Array.isArray("suraj"));
console.log(Array.from("suraj"));


