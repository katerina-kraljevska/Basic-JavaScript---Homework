// //Create a recipe page from inputs

// Ask the user for the name of the recipe
// Ask the user how many ingredients do we need for the recipe
// Ask the user for the name of every ingredient
// Print the name of the recipe in the HTML as heading element, ex: h1-h6
// Print all ingredients as an unordered list in the HTML
// Extra: Use a table if you want to be fancy :)

let title = prompt("Name the recipe");
let title1 = document.getElementById("recipe");
title1.innerHTML += `<h1>${title}</h1>`;

let number = parseInt(prompt("How many ingredients do you need?"));

if (
  number === "" ||
  Number.isNaN(number) ||
  number === undefined ||
  typeof number === "string"
) {
  alert("Error. Enter a valid number");
} else {
  let list = document.getElementById("list");

  let ingredients = [];
  list.innerHTML += "<ul>";
  for (let i = 0; i < number; i++) {
    ingredients[i] = prompt("Ingredient:");
    list.innerHTML += `<li>${ingredients[i]}</li>`;
  }
  list.innerHTML += "</ul>";
}
