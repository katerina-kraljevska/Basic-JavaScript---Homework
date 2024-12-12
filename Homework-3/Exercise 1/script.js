function MinutesToSeconds(minutes) {
  if (minutes < 0 || minutes === "" || Number.isNaN(minutes)) {
    console.log("Invalid number. Try again!");
    return NaN;
  } else {
    let seconds = minutes * 60;
    console.log(`Time: ${seconds} seconds`);
    return seconds;
  }
}

console.log(MinutesToSeconds(5));
console.log(MinutesToSeconds(3));
console.log(MinutesToSeconds(2));
