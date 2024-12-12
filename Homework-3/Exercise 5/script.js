// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs

console.log(
  "The order of anminals when entering the number of legs should be chicken, cows, pigs"
);
function NumberOfLegs(chicken, cows, pigs) {
  return chicken * 2 + cows * 4 + pigs * 4;
}

console.log(NumberOfLegs(2, 3, 5));
console.log(NumberOfLegs(1, 2, 3));
console.log(NumberOfLegs(5, 2, 8));
