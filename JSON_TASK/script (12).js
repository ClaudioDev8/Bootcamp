const getBtn = document.getElementById("getBtn");

const myObject = {
  name: "Joe Bloggs",
  age: 35,
  city: "Birmingham",
  imageURL:
    "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1700524800&semt=sph",
};

// ! Store an object in Local Storage

localStorage.setItem("myObject", JSON.stringify(myObject));
console.log(localStorage);

// ! Function to pull info from LS on click and generate user card with the information

let userCard = null;

const generateCard = () => {
  if (userCard === null) {
    let myObjectParsed = JSON.parse(localStorage.getItem("myObject"));
    // * Create a div element for the card itself
    userCard = document.createElement("div");
    // * Create our img
    let userImage = document.createElement("img");
    // * Create a p tag for our user details
    let userdetails = document.createElement("p");
    // * Append the img and the p to the card
    userCard.append(userImage, userdetails);
    // * Adding a SRC attribute to the img and setting its value as the "imageURL" property from our object
    userImage.setAttribute("src", myObjectParsed.imageURL);
    // * Set the user details in the p tag via the object properties
    userdetails.innerText = `
  Name: ${myObjectParsed.name}
  Age: ${myObjectParsed.age}
  City: ${myObjectParsed.city}
  `;
    //   * Append the card to the body of our document
    document.body.append(userCard);
  }
};

getBtn.addEventListener("click", generateCard);

console.log(1);
setTimeout(() => {
  console.log(2);
}, 2000);
setTimeout(() => {
  console.log(3);
}, 0);
console.log(4);
