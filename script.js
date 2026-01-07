// Efeito simples de destaque ao rolar a página
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY + window.innerHeight / 1.3;

    sections.forEach(section => {
        if (scrollPos > section.offsetTop) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
});

// Inicial
sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "all 0.6s ease";
});
