// ! Classes
// * A efficient way to create multiple variants of an object that is built from a template

// * Firstly to delcare a class we need to use the "class" keyword and name our class starting with a capital letter

class Car {
  // * Our constructor lays out the blueprint for each instance of our class. The "this" keyword refers to the object that is being constructed. We define our shared properties here
  constructor(make, model, year) {
    // * The logical or "||" allows us to specify "this || this" essentially this or this
    this.make = make || "Default";
    this.model = model;
    this.year = year;
  }

  // * We can also define methods
  getDetails() {
    return `${this.year} ${this.make} ${this.model}`;
  }
}

// ! Declaring objects manually
const car1 = {
  make: "Ford",
  model: "Focus",
  year: 2019,
  getDetails: function () {
    return `${car1.year} ${car1.make} ${car1.model}`;
  },
};

const car2 = {
  make: "Audi",
  model: "A3",
  year: 2022,
  getDetails: function () {
    return `${car2.year} ${car2.make} ${car2.model}`;
  },
};

// ! Use the class constructor
// * Be sure to use the "new" keyword before referencing the class name
const car3 = new Car("Tesla", "Roadster", 2023);
const car4 = new Car("Vauxhall", "Astra", 2018);

console.log(car3.getDetails());
console.log(car4.getDetails());
