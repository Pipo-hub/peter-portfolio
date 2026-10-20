/* ======================================================
   Portfolio JavaScript — Peter Rom Mikael M. Santiago
   ====================================================== */

(function () {
  "use strict";

  /* ---------- Theme Toggle ---------- */
  const themeToggle = document.getElementById("theme-toggle");
  const htmlEl = document.documentElement;
  const STORAGE_KEY = "portfolio-theme";

  function getSavedTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function setTheme(theme) {
    if (theme === "dark") {
      htmlEl.setAttribute("data-theme", "dark");
    } else {
      htmlEl.removeAttribute("data-theme");
    }
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {
      // storage disabled — ignore
    }
  }

  function initTheme() {
    const saved = getSavedTheme();
    if (saved) {
      setTheme(saved);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const isDark = htmlEl.hasAttribute("data-theme");
      setTheme(isDark ? null : "dark");
    });
  }

  /* ---------- Mobile Navigation ---------- */
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen);
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Active Nav Link on Scroll ---------- */
  const sections = document.querySelectorAll("section[id]");

  function onScroll() {
    const scrollY = window.pageYOffset;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionBottom = sectionTop + section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (scrollY >= sectionTop && scrollY < sectionBottom) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Contact Form ---------- */
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData.entries());

      // Demo: log to console. Replace with your form endpoint (e.g., Formspree).
      console.log("Form submitted:", data);

      const btn = contactForm.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = "Message Sent!";
      btn.style.background = "#10b981";

      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = "";
        contactForm.reset();
      }, 3000);
    });
  }

  /* ---------- Navbar blur on scroll ---------- */
  const navbar = document.getElementById("navbar");

  function handleNavbarScroll() {
    if (window.scrollY > 20) {
      navbar.style.background = "rgba(255, 255, 255, 0.95)";
      if (htmlEl.hasAttribute("data-theme")) {
        navbar.style.background = "rgba(26, 26, 26, 0.95)";
      }
    } else {
      navbar.style.background = "rgba(255, 255, 255, 0.85)";
      if (htmlEl.hasAttribute("data-theme")) {
        navbar.style.background = "rgba(26, 26, 26, 0.85)";
      }
    }
  }

  window.addEventListener("scroll", handleNavbarScroll, { passive: true });

  /* ---------- Initialize ---------- */
  initTheme();

  /* Set current year in footer */
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();