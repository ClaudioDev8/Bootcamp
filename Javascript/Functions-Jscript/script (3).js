// ? Hoisting example
// sayHello();

// ! Functions

// * Delcaring a function

function greeting() {
  // Function Code Goes Here:
  console.log("Hello World!");
}

// * Calling / Invoking a function

greeting();

// ! Functions with Arguments and Parameters

// ! Parameters - Defined with the function - Placeholders for data
// ! Arguments are supplied to the function when calling it, to fulfill the parameters

// * Parameters are defined with our function and act as placeholder variables for the data that will be supplied to the function

function greetByName(name) {
  alert(`Hello ${name}`);
}

// * If we call our function with no arguments supplied to our parameters our value is read as undefined
// greetByName();

// * We supply an argument when calling the function, inside the brackets. Look at it as replacing the parameter with an argumnent
// greetByName("Dave");
// greetByName("Jane");

// ! Multiple arguments and parameters

// ? Function that takes 2 numbers and adds them together

function add(a, b) {
  console.log(a + b);
}

// * To supply multiple arguments we follow the same pattern as seen with the parameters

add(5, 4);
add(45, 50);

// * If we only supply 1 of 2 arguments then we get 'NaN' as it is adding undefined to a number
add(5);

// ! Default Parameters

// * These will be used if the required arguments are not supplied

// ? Function that takes 2 numbers and multiplies them by one another

// * When declaring params we can assign a default value
function multiply(a = 5, b = 10) {
  console.log(a * b);
}

multiply();
multiply(3);
multiply(20, 4);

// ! Return Statement

// * Returns a value from a function and allows us to work with the value in use cases other than just logging it the console.

// ? Function that adds 2 values together and returns the result
function returnSum(a, b) {
  return a + b;
}

returnSum(5, 10);
console.log(returnSum(5, 10));

let fifteen = returnSum(5, 10);
console.log(fifteen);

// ! Scope

const name = "Lydia";
const age = 21;
const city = "San Francisco";

function getPersonInfo() {
  const name = "Sarah";
  const age = 22;
  let pet = "dog";

  return `${name} is ${age} and lives in ${city} and she has a pet ${pet}.`;
}

console.log(getPersonInfo());

// ! Hoisting

// * Is the concept of a function being called before it is defined

// ! I will now call this function at the top of our file please look above

function sayHello() {
  alert("Hello!");
}

// ! Alternate Function Syntax

// * Arrow Function Example
const addArrow = (x, y) => {
  return x + y;
};

console.log(addArrow(6, 7));

// * Arrow Function Implicit Return

// * Allows us to write a function without the return keyword or having to surround it in curly brackets

// ? Useful for use case where the function is short and only used to return a value.

// * Please note if the function goes over more than one line curly brackets are needed as usual as is 'return'

const addImplicit = (x, y) => x + y;

console.log(addImplicit(10, 20));

// * Function Expression

const addExpression = function (x, y) {
  return x + y;
};

console.log(addExpression(10, 40));
