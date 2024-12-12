function match(string1, string2) {
  return string1.toLowerCase() === string2.toLowerCase();
}

console.log(match("hello", "hELLo"));
console.log(match("motive", "emotive"));
console.log(match("venom", "VENOM"));
console.log(match("mask", "mAskinG"));
