// Smooth fade-in animation for sections
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll("section, header").forEach((el) => observer.observe(el));

// Floating abstract box animation
const floatBoxes = document.querySelectorAll(".abstract-box");

floatBoxes.forEach((box) => {
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;

  box.style.left = x + "px";
  box.style.top = y + "px";

  function animateBox() {
    const dx = (Math.random() - 0.5) * 80;
    const dy = (Math.random() - 0.5) * 80;

    x += dx;
    y += dy;

    if (x < 0) x = 0;
    if (y < 0) y = 0;
    if (x > window.innerWidth - 100) x = window.innerWidth - 100;
    if (y > window.innerHeight - 100) y = window.innerHeight - 100;

    box.style.transform = `translate(${x}px, ${y}px)`;

    requestAnimationFrame(animateBox);
  }

  requestAnimationFrame(animateBox);
});

// Small tilt effect on project cards
const cards = document.querySelectorAll(".project-card");

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
  });
});

// Click animation
document.body.addEventListener("click", (e) => {
  const ripple = document.createElement("span");
  ripple.className = "ripple";
  ripple.style.left = e.clientX + "px";
  ripple.style.top = e.clientY + "px";
  document.body.appendChild(ripple);

  setTimeout(() => ripple.remove(), 800);
});
