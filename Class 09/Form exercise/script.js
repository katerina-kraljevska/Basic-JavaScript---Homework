let registerBtn = document.getElementById("register");
let logInBtn = document.getElementById("logIn");

let registerDiv = document.getElementById("register-form");
let logInDiv = document.getElementById("log-in-form");

let usernameRegister = document.getElementById("username");
let passwordRegister = document.getElementById("password");
let emailRegister = document.getElementById("email");
let ageRegister = document.getElementById("age");
let usernameLogIn = document.getElementById("username1");
let passwordLogIn = document.getElementById("password1");

let users = [];
let passwords = [];
let emails = [];
let age1 = [];

registerBtn.addEventListener("click", function () {
  registerDiv.style.display = "block";
  logInDiv.style.display = "none";
});

logInBtn.addEventListener("click", function () {
  logInDiv.style.display = "block";
  registerDiv.style.display = "none";
});

document.getElementById("register-btn").addEventListener("click", function () {
  let name = usernameRegister.value;
  users.push(name);
  console.log(users);
  let password = passwordRegister.value;
  passwords.push(password);
  console.log(passwords);
  let email = emailRegister.value;
  emails.push(email);
  console.log(emails);
  let age = ageRegister.value;
  age1.push(age);
  console.log(age1);

  let FindUsername = users.find((user) => user.username === name);
  let FindPassword = users.find((user) => user.password === password);

  if (FindUsername && FindPassword) {
    alert("You are already registered");
  }
});
