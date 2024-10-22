/*
! Type Conversion - String

* Sometimes we are required to convert the type of our data

? String Conversion - automatic  when the string form of a value is needed e.g. alert()
*/

// alert(1000);

let oneThousand = String(1000);
console.log(oneThousand);
console.log(1000);

/*
! Type Conversion - Number
? Numeric Conversion - automatically takes place in mathematical functions and expressions
! TIP: Ensure numbers are a number data type before working with the data
*/

console.log("10" / "2");
console.log("10" + "10");

let num1 = Number("10");
console.log(num1 + num1);

let num2 = Number("Two");
console.log(num1 + num2);

/*
! Type Conversion - Boolean
? We can use Boolean() function - `console.log(Boolean("hello"))` = true
! empty values = false
* other values = true
*/

console.log(Boolean("value"));
console.log(Boolean(""));

/*
! Type Conversion - Check Type
* We can use "typeof" to check the type of our data.
*/
console.log(typeof 100);
console.log(typeof "String");
console.log(typeof true);

// ! Interaction
// * Prompt - Allows us to obtain information from a user

// let day = prompt("What day is it today?");
// console.log(day);
// console.log("Happy " + day);

// ! Template Literal/String - More Streamlined way of working with variable data
// * wrap the entire statement in backticks rather than commas `` ${variable}

// console.log(`Happy ${day}! Today is ${day} the 7th of October.`);

let userName = "Christian";
let favColour = "Blue";
let favFilm = "Fight Club";
// userName = "Dave";

console.log(
  `My name is ${userName}, my favourite colour is ${favColour} and my favourite film is ${favFilm}.`
);

// ! Confirm
// * Provide the user with a question and allow to provide a response of "ok" or "cancel"
// ! If the user selects ok we a returned a "true" boolean and "false" if they click cancel

// confirm("Are you sure?");
// console.log(confirm("Are you sure?"));

/*
! Properties and Methods

? Properties - Information about our data
? Methods - Actions we can complete with our data, whether that be manipulating it or filtering it for example 
*/

// * .length - string property
// * This returns a numerical value that represents the number of characters in a string - note that punctuation and spaces are counted
let string = "Hello World";
console.log(string.length);

// * .toUpperCase() / toLowerCase()
// * These methods convert the relevant string to either upper or lower case dependent on the method itself.
console.log(string.toUpperCase());
console.log(string.toLowerCase());

// 1:
// let userName1 = prompt("What is your name?");
// console.log(`Hello ${userName1}, how are you today?`);

// 2:
// let numberToMultiply = prompt("Choose a number to multiply by 10:");
// console.log(numberToMultiply * 10);

// 3;

// Rounding a number
let decimal = 1.9;
// console.log(Math.round(decimal));

// Rounding a number down
// console.log(Math.floor(decimal));

// Generating a random number
let randomNum = Math.floor(Math.random() * 10) + 1;
console.log(randomNum);
