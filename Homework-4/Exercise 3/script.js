function strings(array) {
  let sum = "";
  for (i = 0; i < array.length; i++) {
    sum = sum + `${array[i]} `;
  }
  return sum;
}

let string = ["Hello", "there", "students", "of", "SEDC", "!"];
console.log(strings(string));
