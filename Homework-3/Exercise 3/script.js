function MinutesToHours(hours) {
  if (hours < 0 || hours === "" || Number.isNaN(hours)) {
    console.log("Invalid number. Try again!");
    return NaN;
  } else {
    let seconds = hours * 3600;
    console.log(`Time: ${seconds} seconds`);
    return seconds;
  }
}
console.log(MinutesToHours(2));
console.log(MinutesToHours(10));
console.log(MinutesToHours(24));
