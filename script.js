// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const navList = document.querySelector(".site-nav ul");
if (navToggle && navList) {
  navToggle.addEventListener("click", () => {
    navList.classList.toggle("open");
    navToggle.textContent = navList.classList.contains("open") ? "CLOSE" : "MENU";
  });
  navList.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navList.classList.remove("open");
      navToggle.textContent = "MENU";
    });
  });
}

// Filter tabs (videography page)
const filterButtons = document.querySelectorAll(".filter-tabs button");
if (filterButtons.length) {
  const cards = document.querySelectorAll("[data-category]");
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter;
      cards.forEach(card => {
        const show = filter === "all" || card.dataset.category === filter;
        card.classList.toggle("is-hidden", !show);
      });
    });
  });
}

// Scroll reveal
const revealEls = document.querySelectorAll(".card, .about-layout, .contact-layout");
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(16px)";
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  io.observe(el);
});
