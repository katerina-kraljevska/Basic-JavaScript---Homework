// Print all numbers from an array and the sum

// Create an array with numbers
// Print all numbers from the array in a list element, in the HTML page
// Print out the sum of all of the numbers below the list
// Bonus: Try printing the whole mathematical equasion as well ( 2 + 4 + 5 = 11)

let numbers = [2, 4, 5, 6, 7, 8];

let list = document.getElementById("list");

list.innerHTML += "<ul>";
for (let i = 0; i < numbers.length; i++) {
  list.innerHTML += `<li>${numbers[i]}</li>`;
}
list.innerHTML += "</ul>";

function sum() {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  return sum;
}

let sum2 = sum(numbers);
let sum1 = document.getElementById("sum");
sum1.innerHTML = `The sum of the numbers is ${sum2}`;

let equation = document.getElementById("equation");

for (let i = 0; i < numbers.length; i++) {
  equation.innerHTML += `${numbers[i]}`;
  if (i < numbers.length - 1) {
    equation.innerHTML += ` + `;
  }
}

equation.innerHTML += ` = ${sum2}`;
