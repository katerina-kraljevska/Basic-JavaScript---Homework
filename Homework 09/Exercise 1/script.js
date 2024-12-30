let input = $("#name");
let btn = $("#btn");

btn.click(function text() {
  let name = input.val();
  let output1 = `Hello there ${name}!`;
  $("#output").text(output1);
});
