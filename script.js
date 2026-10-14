const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Reveal elements as they enter the screen.
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

// Subtle cursor glow on desktop.
const cursorGlow = document.querySelector("#cursorGlow");
window.addEventListener("pointermove", (event) => {
  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    cursorGlow.style.left = `${event.clientX}px`;
    cursorGlow.style.top = `${event.clientY}px`;
    cursorGlow.style.opacity = "1";
  }
});

// This is a front-end demo: it does not send form data anywhere.
document.querySelector("#contactForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.querySelector("#name").value.trim();
  const note = document.querySelector("#formNote");
  note.textContent = `SIGNAL RECEIVED, ${name.toUpperCase()} — DEMO ONLY. CONNECT A BACKEND TO SEND FOR REAL.`;
});
