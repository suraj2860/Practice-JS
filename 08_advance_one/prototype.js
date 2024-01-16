function userScore(score){
    this.score = score;
}


userScore.prototype.printScore = function(){
    console.log(this.score);
}
const test = new userScore(20);   // 

test.printScore();

let user = {
    username: "Suraj",
    age: 32,
    email: "suraj@mail.com"
}

let heros = ["thor", "shaktiman", "ironman", "flash"];


Object.prototype.suraj = function() {
    console.log("suraj's function is called");
}

heros.suraj();

Array.prototype.userFunc = function(){
    console.log("user function is called");
}

heros.userFunc();


// inheritance

const teacher = {
    makevid: true
}

const teachingSupport = {
    isAvailable: false
}
const TAsupport ={
    fullTime: true,
    __proto__: teachingSupport          // inheritance using __proto__
}

console.log(teachingSupport.isAvailable);


// another way

Object.setPrototypeOf(teacher, teachingSupport);

console.log(teacher.isAvailable);

