const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");

    if (navLinks.classList.contains("show")) {
        menuToggle.innerHTML = "&times;";
    } else {
        menuToggle.innerHTML = "&#9776;"
    }
});

/*hero section*/
const terminal = document.getElementById("terminal");
const lines = [
    "Hey, My Name is Mo Yaseen",
    "I am a passionate Web Developer...",
    "Skills: HTML, CSS, JavaScript, PHP, MySQL",
    "Frameworks: React, Node.js, Express",
    "UI/UX: Figma, Canva, Photoshop",
   
];

let lineIndex = 0;
let charIndex = 0;

function typeLine() {
    if (lineIndex < lines.length) {
        if (charIndex < lines[lineIndex].length) {
            terminal.innerHTML += lines[lineIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeLine, 50);
        } else {
            terminal.innerHTML += "\n";
            charIndex = 0;
            lineIndex++;
            setTimeout(typeLine, 400);
        }
    }
}


typeLine();
