// * Query the DOM to access our h1
const title = document.querySelector("h1");
console.log(title);

// * Adding an ID to the h1
title.setAttribute("id", "title");

// * Style the h1 element
title.style.color = "Blue";
title.textContent = "Something New...";

// * Create the <ul> via the DOM and add it to the body
const ul = document.createElement("ul");
document.body.append(ul);

// * Create 3 list items add them to the UL and update text / style
for (let i = 0; i < 3; i++) {
  let li = document.createElement("li");
  li.textContent = `List Item ${i + 1}`;
  li.style.backgroundColor = "Orange";
  ul.append(li);
}

// * Remove the h1 from the document
title.remove();
