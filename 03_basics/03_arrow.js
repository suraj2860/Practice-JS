// Arrow Function

// explicit return 

const addOne = (num) => {           
    return num + 1;
}
console.log(addOne(5));

//implicit return

const addTwo = (num) => (num +1)

console.log(addTwo(5));

// this keyword: will refer to current context.

const user = {
    username: "surajKumar",
    email: "suraj@google.com",
    greeting: function(){
        console.log(this.username);
    }
}

user.greeting();

//won't work with functions.

function func1() {
    let username = "suraj";
    console.log(this.username);
}

func1()     // this keyword will not work here.




