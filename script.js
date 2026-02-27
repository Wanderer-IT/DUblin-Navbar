let isMenuOpen = false;

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", function () {

    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
        navLinks.classList.add("active");
    } else {
        navLinks.classList.remove("active");
    }

    console.log("Menu Open:", isMenuOpen);
});