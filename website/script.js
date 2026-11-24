// ============================
// 1. Dynamic Copyright Year
// ============================

const footer = document.querySelector("footer p");

footer.innerHTML = `© ${new Date().getFullYear()} Subhransu Sekhar | AWS Cloud Engineer Portfolio`;


// ============================
// 2. Scroll Reveal Animation
// ============================

const revealElements = document.querySelectorAll(
    ".section, .project-card, .skill-card"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});


revealElements.forEach((element) => {

    element.classList.add("reveal");

    observer.observe(element);

});


// ============================
// 3. Active Navigation Link
// ============================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }

    });

});