const menuBtn = document.querySelector(".header__menu-btn");
const mobileMenu = document.querySelector(".mobile-nav");

let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.toggle("open");
    mobileMenu.classList.toggle("hidden");
    !menuOpen;
  }
});
