// 0 - Rat, 1 - Ox, 2 - Tiger, 3 - Rabbit, 4 - Dragon, 5 - Snake, 6 - Horse, 7 -
//       Goat, 8 - Monkey, 9 - Rooster, 10 - Dog, 11 - Pig

let year = 2002;
let zodiac = (year - 4) % 12;

if (zodiac === 0) {
  console.log("Rat");
} else if (zodiac === 1) {
  console.log("Ox");
} else if (zodiac === 2) {
  console.log("Tiger");
} else if (zodiac === 3) {
  console.log("Rabbit");
} else if (zodiac === 4) {
  console.log("Dragon");
} else if (zodiac === 5) {
  console.log("Snake");
} else if (zodiac === 6) {
  console.log("Horse");
} else if (zodiac === 7) {
  console.log("Goat");
} else if (zodiac === 8) {
  console.log("Monkey");
} else if (zodiac === 9) {
  console.log("Rooster");
} else if (zodiac === 10) {
  console.log("Dog");
} else if (zodiac === 11) {
  console.log("Pig");
} else {
  console.log("Error");
}
