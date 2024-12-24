function sum(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
let arr = [1, 2, 3, 4, "5"];
// console.log(sum(arr));

function validNumber(arr) {
  for (i = 0; i < arr.length; i++) {
    if (
      arr[i] === null ||
      arr[i] === "" ||
      Number.isNaN(arr[i]) ||
      arr[i] === undefined ||
      typeof arr[i] === "string"
    ) {
      return "Error";
    }
  }
  return sum(arr);
}
console.log(validNumber(arr));
