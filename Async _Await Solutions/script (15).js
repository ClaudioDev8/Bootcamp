// * Storing our data output div that will house our advice in a variable
const dataOutput = document.querySelector(".dataOutput");
const advice = document.querySelector(".advice");
const getBtn = document.getElementById("getBtn");

// * Asynchronous function to fetch data from the API endpoint
async function getData() {
  // * Await a response from the API
  const response = await fetch("https://api.adviceslip.com/advice");
  // * Await the response and covert it to JSON upon receiving it
  const apiData = await response.json();
  // * Once we have received the data return it from our function so we can work with it
  return apiData;
}

// * Add event listener that will detect when the DOM has completely loaded and then run the associated code
document.addEventListener("DOMContentLoaded", async () => {
  // * Declare an empty array to hold the api data
  let apiData = [];

  // * Try Catch Block - Allows us to handle errors
  try {
    // * Try to fetch the data
    apiData = await getData();
    // * If an error occurs, catch it
  } catch (error) {
    // * And finally log the error information
    console.log(error);
  }
  console.log(apiData);
  advice.textContent = apiData.slip.advice;
});

getBtn.addEventListener("click", async () => {
  // * Declare an empty array to hold the api data
  let apiData = [];
  // * Try Catch Block - Allows us to handle errors
  try {
    // * Try to fetch the data
    apiData = await getData();
    // * If an error occurs, catch it
  } catch (error) {
    // * And finally log the error information
    console.log(error);
  }
  advice.textContent = apiData.slip.advice;
});
