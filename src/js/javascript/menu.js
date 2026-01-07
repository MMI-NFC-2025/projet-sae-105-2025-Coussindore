const nav = document.querySelector("nav.menu");
const toggle = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".menu-close-btn");

if (toggle && nav) {
    toggle.addEventListener("click", () => {
        const isOpen = toggle.getAttribute("aria-expanded") === "true";
        const willOpen = !isOpen;
        toggle.setAttribute("aria-expanded", String(willOpen));
        nav.setAttribute("aria-hidden", String(!willOpen));
        document.body.classList.toggle("no-scroll", willOpen);
    });
        if (closeBtn) {
            closeBtn.addEventListener("click", () => {
                toggle.setAttribute("aria-expanded", "false");
                nav.setAttribute("aria-hidden", "true");
                document.body.classList.remove("no-scroll");
            });
        }
}