const user = {
    username: "suraj",
    email: "suraj@mail.com",
    age: 25,
    greetings: function() {
        return `Hello ${this.username}`;
    } 
};

console.log(user.greetings());

function User(username, email, age){            // constructor Function
    this.username = username;
    this.age = age;
    this.email = email;

    return this;
}
const userOne = User("suraj","suraj@gmail.com", 25);
const userTwo = User("sourav", "sourav@mail.com",24);

console.log(userOne);   // output : "sourav", "sourav@mail.com",24  -->  because both the variables are using same instance.

const userThree = new User("Brijesh", "brijesh@mail.com", 25);      // creating instance of copnstructor function

console.log(userThree);