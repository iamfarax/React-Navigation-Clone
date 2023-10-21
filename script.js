burger = document.querySelector(".burger");
Navbar = document.querySelector(".navbar");
left_nav = document.querySelector(".left-nav-item");
right_nav = document.querySelector(".right-nav-item");
burger.addEventListener("click", () => {
  Navbar.classList.toggle("h-resp-nav");
  left_nav.classList.toggle("v-resp-nav");
  right_nav.classList.toggle("v-resp-nav");
});
