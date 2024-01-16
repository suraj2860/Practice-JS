// promise One

const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("async task completed");
    resolve(); // to connect 'resolve' with 'then'.
  }, 1000);
});

promiseOne.then(() => {
  console.log("promise completed!!");
});

// Promise 2

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("async task2 completed");
    resolve();
  }, 1000);
}).then(() => {
  console.log("promise2 completed!!!");
});

// promise 3

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("async task3 completed");
    resolve({ username: "Suraj", email: "suraj@mail.com" });
  }, 1000);
});

promiseThree.then((user) => {
  console.log(user.username);
});

// promise 4

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("async task4 completed");
    resolve({ username: "Suraj", email: "suraj@mail.com" });
  }, 1000);
});

promiseFour
  .then((user) => {
    return user.username;
  })
  .then((username) => {
    console.log(username);
  }); //  *********Thenable********

// promise 5

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      console.log("async task5 completed");
      resolve({ username: "Suraj", email: "suraj@mail.com" });
    } else {
      reject("Error occured. task5 Failed!!");
    }
  }, 1000);
});

promiseFive
  .then((user) => {
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  });

// promise 6

const promiseSix = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      console.log("async task6 completed");
      resolve({ username: "Suraj", email: "suraj@mail.com" });
    } else {
      reject("Error occured. task6 Failed!!");
    }
  }, 1000);
});

promiseSix
  .then((user) => {
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log(
      "this block will execute always, whether error occured or not."
    );
  });

// promise 7

const promiseSeven = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      console.log("async task7 completed");
      resolve({ username: "Suraj", email: "suraj@mail.com" });
    } else {
      reject("Error occured. task7 Failed!!");
    }
  }, 1000);
});

async function consumePromiseSeven() {
  try {
    const response = await promiseSeven;
    console.log(response);
  } catch (error) {
    console.log("Error: ", error);
  }
}

consumePromiseSeven();

// fetch using async await

async function getData() {
  try {
    const response = await fetch("https://api.github.com/users/surajPOC");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error:  " ,error);
  }
}

//getData();

// fetch using then and catch.

fetch("https://api.github.com/users/surajPOC")
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});