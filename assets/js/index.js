const navbar = document.getElementsByTagName("nav")[0];

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    navbar.classList.add("bg-white", "shadow-sm");
  } else {
    navbar.classList.remove("bg-white", "shadow-sm");
  }
});
