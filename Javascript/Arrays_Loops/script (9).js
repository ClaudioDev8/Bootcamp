// ! Arrays
// * Declare an Array
// ? Indicated by square brackets - []

let fruits = ["Apple", "Orange", "Banana"];

// ? By referencing the array name we can access the data
console.log(fruits);

// ? Our index starts at 0 and we can reference individual array items via the index
console.log(fruits[0]);

// ? We can update the value of an array item by referencing its index and then using the assignment operator to update its value
// fruits[2] = "Mango";

// console.log(fruits);

// ! Array Properties and Methods
// ? .length property - tells us how many items are in the array
console.log(fruits.length);

// ? .push("item") - this adds an items to the end of the array
fruits.push("Mango", "Pineapple");

console.log(fruits);
console.log(fruits.length);

// ? .pop() - removes the last item in the array
fruits.pop();
console.log(fruits);

// ! For Loop
// ? An example that count from 1-10

for (let i = 1; i <= 10; i++) {
  // Code that runs each loop
  console.log(i);
}

// ? For Loop to iterate over an array
let colours = [
  "Blue",
  "Green",
  "Red",
  "Yellow",
  "Orange",
  "Black",
  "Purple",
  "Pink",
  "Brown",
  "Blue",
  "Green",
  "Red",
  "Yellow",
  "Orange",
  "Black",
  "Purple",
  "Pink",
  "Brown",
  "Blue",
  "Green",
  "Red",
  "Yellow",
  "Orange",
  "Black",
  "Purple",
  "Pink",
  "Brown",
];

console.log(colours.length);

for (let i = 0; i < colours.length; i++) {
  console.log(`The item at index number ${i} is ${colours[i]}`);
}

// ? For Loop with an if statement within it

let mutiplesTwo = [];

for (let i = 1; i < 21; i++) {
  if (i % 2 === 0) {
    mutiplesTwo.push(i);
  }
}

console.log(
  `The numbers between 1 and 20 that are divisible by 2 are ${mutiplesTwo}.`
);

// ! While Loop
// * Continously runs the loop while the specified condition is true
// TODO: Ensure you specify a condition that WILL be met
// ? Basic Example: Count to 10

let count = 1;

while (count <= 10) {
  console.log(count);
  count++;
}

// ? Card Game Example:
// * RULES: Each turn a card will be drawn and the first person to draw a "Spade" loses

let cards = ["Diamond", "Spade", "Club", "Heart"];
let currentCard = "";

while (currentCard !== "Spade") {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}

console.log(`GAME OVER: You drew a ${currentCard}!`);

// ! Do While
// * Runs first at least one time and then checks the condition. Addtional run through work in the same way a while loop would.

let num = 1;

do {
  console.log(num);
} while (num < 1);

// ! For of Loop - Iterate over an iterable data-set
// ? Array example

const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

for (let days of weekdays) {
  console.log(days.length);
}

// ? String Example
const string = "Hello World";

for (let letters of string) {
  console.log(letters);
}

// ! Tasks:

// Favourite Films Array and Loop

let favFilms = ["Fight Club", "No Country For Old Men", "The Prestige"];

favFilms.push("Moneyball", "Superbad");

for (let i = 0; i < favFilms.length; i++) {
  console.log(favFilms[i]);
}

// Generate 10 random nums between 1-100
// for (let i = 0; i < 10; i++) {
//   let randomNum = Math.floor(Math.random() * 100) + 1;
//   console.log(randomNum);
// }

//  Write a loop that counts backwards from 20
// for (let i = 20; i >= 0; i--) {
//   console.log(i);
// }

// Generate 5 nums between 1-50 and check if divisble by 5
for (let i = 0; i < 5; i++) {
  let randomNum = Math.floor(Math.random() * 50) + 1;
  if (randomNum % 5 === 0) {
    console.log(`${randomNum} IS divisble by 5!`);
  } else {
    console.log(`${randomNum} is NOT divisble by 5!`);
  }
}
