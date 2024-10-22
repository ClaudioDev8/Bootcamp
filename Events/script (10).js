const title = document.getElementById("title");
const addBtn = document.getElementById("addBtn");
const input = document.getElementById("input");
const output = document.getElementById("output");

// * Event Listener to trigger a console.log when a user clicks the h1 element

// * The basic principle is that we attach an evet listener to an element, when the event is detected within that element the associated function is called

// title.addEventListener("click", function () {
//   // Whatever Code Is Added Here Runs When The Event Is Detected
//   console.log("Click");
// });

// * We can declare a function and call it with an event listener rather than declaring the functionality in the body of the event listener itself

function greeting() {
  console.log("Thanks for clicking the h1!");
}

// * Syntax for an event listener calling a predefined function
// * NOTE there is no need for the parantheses '()' when referencing the function
title.addEventListener("click", greeting);

// * The functionality to run when our button is clicked
addBtn.addEventListener("click", function () {
  // * Create the new h2 element
  const newElement = document.createElement("h2");
  //   * Update the text content of the h2 element
  newElement.textContent = "Click to delete!";
  //   * Append the element to our document body
  document.body.append(newElement);
  //   * Attach an event listener to the newly created element that deletes the element when it is clicked
  newElement.addEventListener("click", function () {
    newElement.remove();
  });
});

// * By referencing 'e' or 'event' we can access the event object which provides details about the event that took place
// output.addEventListener("click", function (e) {
//   console.log(e);
// });

// * Listening for a keyup event on the input field and updating the text content of our h1 "output" element based on the value of our input field at the time
input.addEventListener("keyup", function () {
  output.textContent = `Hello ${input.value}!`;
});
