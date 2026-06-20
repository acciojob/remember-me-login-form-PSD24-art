//your JS code here. If required.
let username = document.getElementById("username");
let password = document.getElementById("password");
let checkbox = document.getElementById("checkbox");
let submit = document.getElementById("submit");
let existing = document.getElementById("existing");

let userObj = localStorage.getItem("user");

if (!userObj) {
  existing.style.display = "none";
}

submit.addEventListener("click", (e) => {
  let user = username.value;
  let pass = password.value;
  if (!user || !pass) return alert("Please enter valid details");
  e.preventDefault();
  alert(`Logged in as ${user}`);

  if (checkbox.checked) {
    let obj = { username: user, password: pass };
    localStorage.setItem("user", JSON.stringify(obj));
  } else {
    localStorage.removeItem("user");
  }
});

existing.addEventListener("click", () => {
  let username = JSON.parse(localStorage.getItem("user")).username;
  alert(`Logged in as ${username}`);
});
