let sum = "";
for (i = 0; i < 20; i++) {
  number = i + 1;
  if (number % 2 === 0) {
    sum = sum + `${number}\n`;
  } else if (number % 2 === 1) {
    sum = sum + `${number} `;
  } else {
    console.log("Error");
  }
}
console.log(`${sum}`);
