// * The console.log method allows us to log output to the console
console.log("Hello World");

// * Every instruction we write in JavaScript is known as a statment
// * Our semi-colon (;) indicates the end a statement

/* 
! The Console

* Our Web Console can be used to log messages and view data. 
* We can also use the Console to debug our code and read errors.

? What is console.log - A method that allows us to log data to the console.


! Semi-Colons ';'

* We must add a semi-colon at the end of our statements.

* JavaScript will automatically insert semi-colons if missed,
* however, as best practice to avoid bugs we should try to end
* all of our statements with them.

* We can write statements one after another on one line.

* Usually statements are separated onto different lines for readability.
*/

console.log("Hello");
console.log("World");

/* 
! Variables

* Variables are a way for us to store data under a label.

! let 

* We declare a Variable with the 'let' keyword followed by
* the assingment operator '='

* As an example we will create a variable named 'greeting'

! Note that variable names are case sensitive.
*/
let greeting = "Good Morning!";

// ! We reference our variable data via the variable name
console.log(greeting);

/* 
! Variables - Reassign Values

* Once declared, we can assign new value to 'let' variables.

* To assign a new value to a variable we reference the variable
* name followed by the assignment operator (=) and the new value.
*/

greeting = "Good Afternoon!";

console.log(greeting);

greeting = "Good Evening!";

console.log(greeting);

/* 
! Variables - const

* We can declare constant variables with the 'const' keyword.

* The keyword 'const' should be used for variables where the data
* will not change, the value will remain constant. 
*/

const sky = "Blue";
console.log(sky);

// ! If we try to update the value of a constant variable we get an error
// sky = "green";

/* 
! Data Types 

* Values in JavaScript can be different data types.

? Dynamically Typed - Data Types exist but variables arent bound to type

* Our 'greeting' and 'sky' variables are examples of String's.

? String - Surrounded by "Quotes"
! 'Single Quotes'
! "Double Quotes"
! `Backticks`
*/

let string1 = "Single Quotes";
let string2 = "Double Quotes";
let string3 = `Backticks`;
let numberString = "1234";

/* 
! Data Types

? Number
* Number - Integer and Floating Points
! Mathematical Operations 

* BigInt - Represents Integers of arbitrary length 
! Rarely Needed
*Resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
*/

let integer = 100;
let float = 1.5;

console.log(integer + 100);
console.log(integer / 2);
console.log(integer * 5);

/* 
! Data Types

* Boolean - True or False
! Evaluate comparisons or conditions
*/

let boolean = true;
console.log(boolean);
boolean = false;
console.log(boolean);

/* 
! Data Types

* Null - Doesn't fall under any specific type
! Forms its own 'null' type
*/

let empty = null;
console.log(empty);

/* 
! Data Types

* Undefined - Value not assigned therefore it is undefined
! Variables declared but not assigned
*/

console.log(undefined);

// * If you variable name has multiple words use camelCase to indicate where the additional words start

// let multiWordVariable = "camelCase";

// ! String Concatenation

// * Is the process of adding string values together

let firstName = "Christian";

console.log("My name is" + firstName);
console.log("My name is " + firstName);
console.log("My name is" + " " + firstName + ".");
