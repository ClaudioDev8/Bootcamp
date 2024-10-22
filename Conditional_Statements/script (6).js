/*
! Conditional Statements

* In order to evaluate conditions we need comparison operators
* Comparison Operators take the left value and compare it to the right value
* the result will always be a boolean: "true" or "false"

! Comparison Operators

? Equal to (==)
? Equal value and type (===)
? Not Equal (!=)
? Not Equal value or type (!==)
? Greater than (>)
? Less than (<)
? Greater than or Equal to (>=)
? Less than or Equal to (<=)
*/

let num = 100;

// * Equal To (==) - Checks if equal value
console.log(num == 100);
console.log(num == "100");

// * Strictly Equal To (===) - Checks the value and data type
console.log(num === 100);
console.log(num === "100");

// ! If Statement
// * Check a condition defined by us and run associated code if the condition evaluates to true

// ? Weather Example

let weather = "Sunny";
weather = "Raining";

// if (weather === "Sunny") {
//   console.log("Bring your sunglasses!");
// }

// ! If Else Statement

// if (weather === "Sunny") {
//   console.log("Bring your sunglasses!");
// } else {
//   console.log("It doesn't look too sunny at the moment!");
// }

// ! If / Else If / Else Statement

weather = "Foggy";

if (weather === "Sunny") {
  console.log("Bring your sunglasses!");
} else if (weather === "Raining") {
  console.log("Bring your umbrella!");
} else if (weather === "Snowing") {
  console.log("Bring your sledge!");
} else {
  console.log("I'm not to sure, it could go either way...");
}

/*
! Logical Operators

? Allow us to check against more than one condition

? and (&&)
? or (||)
? not (!)
*/

// ! Logical or ||
// TODO: Ensure a full condition is stated either side of the operator
// ? Traffic Light Example:

let trafficLight = "Green";

if (trafficLight === "Red" || trafficLight === "Amber") {
  console.log("Stop!");
} else {
  console.log("Go!");
}

// ! Logical not !
// ? Refactored Simplified Traffic Light Example
if (trafficLight !== "Green") {
  console.log("Stop!");
} else {
  console.log("Go!");
}

// ! Switch Statement
// ? Days of the Week Example:

let day = "Thrsday";

switch (day) {
  case "Monday":
    console.log("Weekend is over! Happy Monday!");
    break;
  case "Tuesday":
    console.log("Second day of the week!");
    break;
  case "Wednesday":
    console.log("Halfway through the week!");
    break;
  case "Thursday":
    console.log("It's almost Friday!");
    break;
  case "Friday":
    console.log("Happy Friday!");
    break;
  case "Saturday":
  case "Sunday":
    console.log("It's the Weekend!");
    break;
  default:
    console.log("Day not recognised. Try again.");
}

// ? Check user age task:

// users age variable
// check if thats 18 or above
// if 18 or above we need to provide a message approving service
// if not deny service

let age = 17;

// if (age > 17) {
//   console.log("What would you like to drink?");
// } else {
//   console.log("Sorry, you are too young to be served.");
// }

age > 17 ? console.log("Approved.") : console.log("Denied.");

// ? Odd or Even Task:

let oddEven = 16;

if (oddEven % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// ? FizzBuzz

let fizzBuzz = 8;

// we need to check if a number is divisible by 3
// we need to check if a number is divisible by 5
// we need to check if a number is divisible by 3 and 5

if (fizzBuzz % 3 === 0 && fizzBuzz % 5 === 0) {
  console.log("Fizz Buzz");
} else if (fizzBuzz % 3 === 0) {
  console.log("Fizz");
} else if (fizzBuzz % 5 === 0) {
  console.log("Buzz");
} else {
  console.log(fizzBuzz);
}
