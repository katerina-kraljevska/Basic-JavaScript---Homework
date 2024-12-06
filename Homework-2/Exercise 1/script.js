let money = prompt("How much money do you have?");

if (Number.isNaN(money) || money === null || money < 0) {
  alert("Null");
} else if (money >= 30) {
  alert("You could go to a restorant");
} else if (money >= 20) {
  alert("You could go see a movie");
} else if (money >= 10) {
  alert("You could buy ice cream");
} else {
  alert("You should save money");
}
