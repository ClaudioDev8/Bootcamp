// ! DOM - Document Object Model

// * Created on page-load

// * When our HTML loads into the browser the "document" is generated. This is seperate to the index.html, think of it as a live version we work with in the browser.

// ! The changes we make to the DOM are only impacting the version in browser and not index.html code itself.

// * To access the document object we can reference "document"

console.log(document);

// ! Querying the DOM - We can utilise DOM methods to search the DOM for relevent nodes or elements

// * getElementById() - Allows to search the DOM via "id"

const title = document.getElementById("title");
console.log(title);

// * getElementsByClassName() - Allows us to search by "class"

// ! Returns a HTMLCollection of the matching elements. Like an array but we cannot use array methods with it.
const listItems = document.getElementsByClassName("listItems");
console.log(listItems);

// * getElementsByTagName() - Allows to search via "tag"

// ! Returns a HTMLCollection of the matching elements. Like an array but we cannot use array methods with it.
const liElements = document.getElementsByTagName("li");
console.log(liElements);

// * querySelector() - Allows you to search by "CSS Selector"

// ! Returns just the first element matching the specified selector
const paragraph = document.querySelector("p");
console.log(paragraph);

// * querySelectorAll() - Same as above but retruns all matching elements

// ! NodeList - Simlar to HTMLCollection but can contain nodes that are not elements.
const paragraphs = document.querySelectorAll("p");
console.log(paragraphs);

// ! Styling Elements using the DOM

title.style.backgroundColor = "red";

// ! Style Multiple Elements using the DOM
// * When manipulating all elements in a NodeList / HTMLCollection we need to use a loop to individually target each item

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.backgroundColor = "Orange";
}

// ! Create an new element via the DOM and add it to the document

// * Firstly I need to store to <ul> in a varaible in order to target it later on to add our new list item to

const ul = document.querySelector("ul");
console.log(ul);

// ! Creating a new element
// * createElement() - Takes an argument of an element tag and creates an element of your specified type
// * NOTE: The element does not automatically get add to the document

const newListItem = document.createElement("li");
console.log(newListItem);

// * append() - Allows us to append an element to a target area in our case the <ul> we stored earlier.

ul.append(newListItem);

// * We can update the text content of our new element
// * .textContent allows us to set the value of an elements text

newListItem.textContent = "New - List Item 4";

// * We can add an attribute to an element
// * .setAttribute() - Allows us to set an attribute and a value for it

newListItem.setAttribute("id", "item4");

// * .removeAttribute() - Removes the specified attribute from the element

newListItem.removeAttribute("id");

// * Using classlist.add() - We can set a new class

newListItem.classList.add("listItems");

// * Using classlist.remove() - We can remove a class

newListItem.classList.remove("listItems");

// * .remove() - Allows us to remove an element - deleting it from the Document

newListItem.remove();
