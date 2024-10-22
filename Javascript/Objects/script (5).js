/*
! Objects

? Properties = data contained within the object
? Methods = things that the object can do

* Objects work with Key:Value pairs.
* Keys are declared without quotes and seperated from values by a colon
* Values can be any data type and are written accordingly
* Pairs are seperated 

*/

// ? CoffeeShop

const coffeeshop = {
  name: "Costa",
  branchNumber: 250,
  specialOffers: true,
  drinks: ["Americano", "Latte", "Tea"],
};

// * We can log the object data by referencing the object name

console.log(coffeeshop);

// * Dot Notation (.) can be used to access data within the object

console.log(coffeeshop.name);

// * Bracket Notation ([]) can also be used

console.log(coffeeshop["branchNumber"]);

// * We can also add new items to an object via dot or bracket notation

coffeeshop.muffins = ["Blueberry", "Chocolate"];
console.log(coffeeshop);
console.log(coffeeshop.muffins);

// * We can update value in our object with dot or bracket notation

coffeeshop["branchNumber"] = 100;
console.log(coffeeshop);

// ? How would we look to access "Latte" from the object

console.log(coffeeshop.drinks[1]);

// * Adding Special Offers to the object

coffeeshop.breakfastOffer = "Free Bagel with any Coffee!";
coffeeshop.lunchOffer = "Free Coffee with any Sandwich!";

let offer = "No current offer.";
let time = 1530;

if (time < 1100) {
  offer = coffeeshop.breakfastOffer;
  console.log(offer);
} else if (time < 1500) {
  offer = coffeeshop.lunchOffer;
  console.log(offer);
} else {
  console.log(offer);
}

// * Adding Methods to our coffeeshop objects

coffeeshop.open = function () {
  return "We are open come on in!";
};

coffeeshop.close = function () {
  return "Sorry, we are closed. Come back tomorrow morning.";
};

console.log(coffeeshop.open());
console.log(coffeeshop.close());

console.log(coffeeshop);

// * "this" keyword

const car1 = {
  brand: "Ford",
  model: "Focus",
  year: 2020,
  drive: function (mph) {
    return `Driving the ${this.year} ${this.brand} ${this.model} at ${mph}MPH.`;
  },
};

const car2 = {
  brand: "VW",
  model: "Golf",
  year: 2022,
  drive: function (mph) {
    return `Driving the ${this.year} ${this.brand} ${this.model} at ${mph}MPH.`;
  },
};

console.log(car1.drive(100));
console.log(car2.drive(70));

//  ! Nested Objects For Tasks
const employee = {
  id: 1,
  name: "John Doe",
  position: "Software Engineer",
  department: {
    name: "Engineering",
    location: "Building A",
    supervisor: {
      name: "Jane Smith",
      position: "Engineering Manager",
    },
  },
};

const library = {
  name: "Public Library",
  location: "City Center",
  books: [
    {
      id: "B001",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      details: {
        genre: "Fiction",
        year: 1925,
      },
    },
    {
      id: "B002",
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      details: {
        genre: "Fiction",
        year: 1960,
      },
    },
  ],
};
