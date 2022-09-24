let isAccountLocked = false;
let userRole = "admin";

if (isAccountLocked) {
  console.log("Is account locked");
} else {
  console.log("Welcome!");
}

if (isAccountLocked) {
  console.log("Is account locked");
} else if (userRole === "admin") {
  console.log("Welcome Admin");
} else {
  console.log("Welcome");
}

// challenge area

let temp = 45;

if (temp <= 31) {
  console.log("It is freezing outside!");
} else if (temp >= 110) {
  console.log("It is hot outside!");
} else {
  console.log("Go for it. It is pretty nice out.");
}

// it is freezing outside! 31
// it is hot outsid! 120
// go for it. It is pretty nice. 45
