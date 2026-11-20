
// ===================================
// TOHEEED AGRO SPARE PARTS
// WEBSITE JAVASCRIPT
// ===================================

// 1. Mobile Navigation

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("nav");

if (menuButton && navigation) {
    menuButton.addEventListener("click", function () {
        navigation.classList.toggle("active");
    });
}

// Close mobile menu after clicking a link

document.querySelectorAll("nav a").forEach(function (link) {
    link.addEventListener("click", function () {
        if (navigation) {
            navigation.classList.remove("active");
        }
    });
});


// 2. Smooth Scrolling

document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// 3. Current Year in Footer

const yearElement = document.querySelector(".current-year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// 4. Welcome Message in Console

console.log("Welcome to TOHEEED AGRO SPARE PARTS!");
console.log("Spare Parts Sales | Hydraulic Repair");
