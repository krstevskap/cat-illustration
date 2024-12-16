const switcher = document.getElementById("switcher");
const sun = document.getElementById("sun-icon");
const moon = document.getElementById("moon-icon");
const container = document.getElementsByClassName("container")[0];
let darkMode = false;

const toggleVisibility = (elementToShow, elementToHide) => {
  elementToShow.style.display = "block";
  elementToHide.style.display = "none";
};

switcher.addEventListener("click", () => {
  const darkMode = container.classList.toggle("dark-mode");
  toggleVisibility(darkMode ? sun : moon, darkMode ? moon : sun);
});
