const form = document.querySelector("form");
const input = document.querySelectorAll("form input");
const submit = document.getElementById("submit");

const error_img_first_n = document.getElementById("error_img_first_n");
const error_msg_first_n = document.getElementById("error_msg_first_n");

const error_img_last_n = document.getElementById("error_img_last_n");
const error_msg_last_n = document.getElementById("error_msg_last_n");

const error_img_email = document.getElementById("error_img_email");
const error_msg_email = document.getElementById("error_msg_email");

const error_img_pass = document.getElementById("error_img_pass");
const error_msg_pass = document.getElementById("error_msg_pass");

submit.addEventListener("click", function (event) {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (firstName === "") {
    error_img_first_n.style.display = "flex";
    error_msg_first_n.style.display = "block";
    event.preventDefault();
  } else {
    error_img_first_n.style.display = "none";
    error_msg_first_n.style.display = "none";
  }

  if (lastName === "") {
    error_img_last_n.style.display = "flex";
    error_msg_last_n.style.display = "block";
    event.preventDefault();
  } else {
    error_img_last_n.style.display = "none";
    error_msg_last_n.style.display = "none";
  }
  if (!email.match(emailPattern)) {
    error_img_email.style.display = "flex";
    error_msg_email.style.display = "block";
    event.preventDefault();
  } else {
    error_img_email.style.display = "none";
    error_msg_email.style.display = "none";
  }
  if (password === "" || password.length < 8) {
    error_img_pass.style.display = "flex";
    error_msg_pass.style.display = "block";
    error_msg_pass.textContent = "Password must be at least 5 characters long.";
    event.preventDefault();
  } else {
    error_img_pass.style.display = "none";
    error_msg_pass.style.display = "none";
  }
});
