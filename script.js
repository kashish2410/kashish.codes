AOS.init();

function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}


const links = document.querySelectorAll(".nav-link a");
links.forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("navLinks").classList.remove("active");
  });
});
