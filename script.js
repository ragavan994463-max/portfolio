// ==============================
// Portfolio JavaScript
// Author: Raghavan
// ==============================

console.log("Portfolio Loaded Successfully!");

// Smooth fade-in
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// Current Year
const year = document.getElementById("year");
if (year) {
    year.textContent = new Date().getFullYear();
}

// Typing Animation
const typingElement = document.getElementById("typing");

const words = [
    "AI Developer",
    "Python Programmer",
    "Machine Learning Enthusiast",
    "Kaggle Competitor",
    "Open Source Contributor"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typingEffect() {

    if (!typingElement) return;

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {
            deleting = true;

            setTimeout(typingEffect, 1200);
            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length)
                wordIndex = 0;
        }

    }

    setTimeout(
        typingEffect,
        deleting ? 50 : 100
    );
}

typingEffect();

// Reveal Animation
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".hidden").forEach(item => {

    observer.observe(item);

});

// Scroll To Top Button

const topButton = document.createElement("button");

topButton.innerHTML = "⬆";

topButton.id = "topButton";

document.body.appendChild(topButton);

topButton.style.position = "fixed";

topButton.style.bottom = "20px";

topButton.style.right = "20px";

topButton.style.padding = "12px";

topButton.style.borderRadius = "50%";

topButton.style.border = "none";

topButton.style.cursor = "pointer";

topButton.style.display = "none";

topButton.style.fontSize = "20px";

window.addEventListener("scroll", () => {

    if (window.scrollY > 250) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }
