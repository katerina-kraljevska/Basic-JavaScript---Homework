function remainder(num1, num2) {
  if (
    num1 === "" ||
    num2 === "" ||
    Number.isNaN(num1) ||
    Number.isNaN(num2) ||
    num1 === 0 ||
    num2 === 0
  ) {
    alert("Invalid number. Try again!");
    return NaN;
  } else {
    return num1 % num2;
  }
}

console.log(remainder(1, 3));
console.log(remainder(3, 4));
console.log(remainder(-9, 45));
console.log(remainder(5, 5));
