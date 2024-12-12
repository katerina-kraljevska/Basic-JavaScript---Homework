function TruthyorFalsy(value) {
  if (
    value === null ||
    value === false ||
    Number.isNaN(value) ||
    value === undefined ||
    value === 0 ||
    value === -0 ||
    value === "" ||
    value === 0n
  ) {
    return 0;
  } else {
    return 1;
  }
}

console.log(TruthyorFalsy(0));
console.log(TruthyorFalsy(false));
console.log(TruthyorFalsy(""));
console.log(TruthyorFalsy(NaN));
console.log(TruthyorFalsy("false"));
