const nav = document.querySelector(".nav");

const navList = document.querySelector(".nav-list");

console.log(window.outerWidth);

nav.addEventListener("click", function (e) {
  if (!e.target.classList.contains("nav-mobile-hamburger")) return;
  navList.classList.toggle("change");
});
