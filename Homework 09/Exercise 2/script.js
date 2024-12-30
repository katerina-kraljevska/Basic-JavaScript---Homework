$(document).ready(function () {
  let inputText = $("#input-text");
  let inputColor = $("#input-color");
  let text = inputText.val();
  console.log(text);
  let color = inputColor.val();
  console.log(color);

  function ValidColor() {
    if (
      color === "red" ||
      color === "blue" ||
      color === "green" ||
      color === "yellow" ||
      color === "purple"
    ) {
      return true;
    } else {
      console.log("Invalid color");
    }
  }

  $("#btn").click(function () {
    if (inputText !== "" || ValidColor(color) === true) {
      let header = $(`<h1 style="color:${color}">${text}</h1>`);
      $("#headerDiv").append(header);
    } else {
      $("#messages").text("Error");
    }
  });
});
