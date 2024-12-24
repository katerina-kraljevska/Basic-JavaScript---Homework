// Write a JavaScript program to display the reading status of some book. The object should have the next properties: title, author, readingStatus and a method that will return info depending on the readingStatus e.g.

// Already read 'The Robots of dawn' by Isaac Asimov. (if true)
// You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins. (if false).

function Book(title, author, readingStatus) {
  this.title = title;
  this.author = author;
  this.readingStatus = readingStatus;
  this.readingStatus = function (DoneReading) {
    if (DoneReading === true) {
      return `Already read ${title} by ${author}`;
    } else if (DoneReading === false) {
      return `You still need to read ${title} by ${author}`;
    } else {
      return "Error";
    }
  };
}
let book1 = new Book("The Robots of dawn", "Isaac Asimov");
console.log(book1);
console.log(book1.readingStatus(true));
let book2 = new Book(
  "Mockingjay: The Final Book of The Hunger Games",
  "Suzanne Collins"
);
console.log(book2);
console.log(book2.readingStatus(false));
