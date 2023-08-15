const themeButton = document.getElementById("themeButton");
const body = document.body;

themeButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    themeButton.textContent = "Light Theme";
  } else {
    themeButton.textContent = "Dark Theme";
  }
});
const navToggle = document.querySelector(".nav_toggle");
const navLinks = document.querySelector(".nav_links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});