// //Create OBJECT animal with 2 properties and 1 method:
// name
// kind
// speak (method)
// this method will take one parameter and will print in the console a message: e.g. dog.speak(“hey bro!!!”) will log in the console “Dog says: ‘Hey bro!!!’”

// Bonus: enter the values from prompt or from HTML inputs
let name1 = prompt("Name");
let kind1 = prompt("Kind");
let object = {
  name: name1,
  kind: kind1,
  speak: function (speach) {
    console.log(`${this.name} says ${speach}`);
  },
};
object.speak(prompt("speach"));
console.log(object);
