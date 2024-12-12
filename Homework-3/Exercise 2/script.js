function parsedInputToInteger(parsedInput) {
  if (typeof parsedInput === "" || Number.isNaN(parsedInput)) {
    return NaN;
  } else {
    parsedInput += 1;
    return parsedInput;
  }
}
console.log(parsedInputToInteger(0));
console.log(parsedInputToInteger(9));
console.log(parsedInputToInteger(-3));
