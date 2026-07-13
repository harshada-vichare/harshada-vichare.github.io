// Custom Tailwind Config
tailwind.config = {
  theme: {
    extend: {
      colors: {
        "custom-green": "#00ffaa",
        "custom-blue": "#00aaff",
        "custom-purple": "#aa00ff",
        "custom-pink": "#ff00aa",
        "dark-bg": "#0a0e1a",
        "dark-card": "#1a1f2e",
        "dark-border": "#2a2f3e",
      },
      animation: {
        custom: "custom 15s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "slide-up": "slideUp 0.5s ease-out",
        glow: "glow 2s ease-in-out infinite",
      },
      keyframes: {
        custom: {
          "0%, 100%": {
            backgroundPosition: "0% 50%",
            backgroundSize: "200% 200%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
            backgroundSize: "200% 200%",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        glow: {
          "0%, 100%": {
            boxShadow:
              "0 0 5px rgba(0, 255, 170, 0.5), 0 0 20px rgba(0, 255, 170, 0.3)",
          },
          "50%": {
            boxShadow:
              "0 0 20px rgba(0, 170, 255, 0.8), 0 0 40px rgba(0, 170, 255, 0.4)",
          },
        },
      },
    },
  },
};

// Mobile menu toggle
function toggleMobileMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("hidden");
}

// Close mobile menu when clicking on a link
document.querySelectorAll("#mobileMenu a").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("mobileMenu").classList.add("hidden");
  });
});

// Add animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-slide-up");
    }
  });
}, observerOptions);

// Observe sections for animation
document.querySelectorAll("section").forEach((section) => {
  observer.observe(section);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// typing animation
const titles = [
  "PHP Developer",
  "Backend Developer",
  "Problem Solver",
  // "WordPress Developer",
  "Web Application Developer",
  "Laravel Developer",
  "Software Developer",
];
const textElement = document.getElementById("typing-text");

let index = 0;

setInterval(() => {
  // Fade out
  textElement.classList.add("opacity-0", "translate-y-2");

  setTimeout(() => {
    index = (index + 1) % titles.length;
    textElement.textContent = titles[index];

    // Fade in
    textElement.classList.remove("opacity-0", "translate-y-2");
  }, 300);
}, 2500);
