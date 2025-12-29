// Enable 3D tilt (desktop only)
const isDesktop = window.innerWidth > 760;
if (isDesktop) {
  document.addEventListener("mousemove", (event) => {
    document.querySelectorAll(".tilt").forEach(card => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * 6;
      const rotateY = ((x - centerX) / centerX) * -6;
      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
  });

  document.querySelectorAll(".tilt").forEach(card => {
    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(800px) rotateX(0) rotateY(0)";
    });
  });
}

// Scroll reveal
const revealElements = document.querySelectorAll(".product");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
});
revealElements.forEach(el => observer.observe(el));
