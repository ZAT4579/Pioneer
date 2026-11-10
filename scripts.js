const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    menuToggle.textContent =
        navLinks.classList.contains("active") ? "✕" : "☰";
});


document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";
    });
});


document.getElementById("year").textContent =
    new Date().getFullYear();


const buyButton = document.getElementById("buyButton");

buyButton.addEventListener("click", () => {
    buyButton.textContent = "PRÓXIMAMENTE";
    buyButton.disabled = true;
});