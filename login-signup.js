

const login_btn = document.querySelector("#login-button");
const signup_btn = document.querySelector("#signup-button");

const container = document.querySelector(".container");

const login_btn2 = document.querySelector("#login-btn2");
const signup_btn2 = document.querySelector("#signup-btn2");


signup_btn.addEventListener("click", () => {
  container.classList.add("signup-mode");
});

login_btn.addEventListener("click", () => {
  container.classList.remove("signup-mode");
});

signup_btn2.addEventListener("click", () => {
  container.classList.add("signup-mode2");
});

login_btn2.addEventListener("click", () => {
  container.classList.remove("signup-mode2");
});