const username = "suraj";

if(username){
    console.log("executed");
}

// falsy Values

// false, 0, -0, "", null, NaN, undefined, BigInt 0n


// other than these all are truthy values. 

// truthy values : [], {}, function(){}, " ", "0", "false"

// Nulish coalescing Operator : ?? => (null, undefined)

let val;

val = 5 ?? 10; // 5
val = null ?? 10;   // 10
val = undefined ?? 10;   // 10
val = null ?? 10 ?? 20;   // 10



