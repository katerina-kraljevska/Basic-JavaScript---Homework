let myTitle = document.getElementById("myTitle");
myTitle.innerHTML = "<h1 id='myTitle'>New cool page(changed)</h1>";
console.log(myTitle);

let divFirst = document.getElementsByClassName("aDiv");
// console.log(divFirst);
divFirst.innerHTML = "";

let paragraph1 = document.querySelector(".paragraph");
paragraph1.innerHTML = "";
paragraph1.innerHTML =
  "<p class='paragraph'>This is another exercise.(changed) </p>";
console.log(paragraph1);

let paragraph2 = document.querySelector(".second");
paragraph2.innerHTML = "";
paragraph2.innerHTML +=
  "<p class='paragraph second'> It's really easy!(changed)</p>";
console.log(paragraph2);

let divSecond = document.querySelector("text");
divSecond.innerHTML = "";
divSecond.innerHTML +=
  "<text> I'm changeing the elements and (changed) </text>";

let h1 = document.getElementsByTagName("h1");
h1.innerHTML = "";
h1[2].innerHTML = "Change number 1 (changed)";
console.log(h1);

let h3 = document.querySelector("h3");
h3.innerHTML = "";
h3.innerHTML += "<h3>And this is also changed!(changed)</h3>";
console.log(h3);
