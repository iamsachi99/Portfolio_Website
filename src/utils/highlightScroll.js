import { useEffect } from 'react';

const highlightSection = () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".list a");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 50) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });
};

const smoothScroll = () => {
    const navLinks = document.querySelectorAll(".list a");

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href");
            document.querySelector(targetId).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });
};

export const useScrollEffects = () => {
    useEffect(() => {
        highlightSection();
        smoothScroll();
    }, []);
};
