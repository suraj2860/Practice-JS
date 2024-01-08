// Immediately Invoked Function Expressions (IIFE)

//  (_function_definition_)(_function_call);


(function chai() {                      // named iife
    console.log("chai served!!");
})();   // semi-colon is necessary to teel the expression is ending here. if you are calling iife functions consicutively. 


((name) => {            // unnamed iife
    console.log(`coffee served to ${name}!!`);
})("suraj");