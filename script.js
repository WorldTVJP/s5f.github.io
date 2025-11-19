const btn = document.getElementById("magicBtn");
const msg = document.getElementById("message");

// Button dodges when hovered (mouse only)
btn.addEventListener("mouseover", () => {
  const randX = Math.random() * 500 - 250;
  const randY = Math.random() * 300 - 150;

  btn.style.transform = `translate(${randX}px, ${randY}px)`;
});

// Space key wins
document.addEventListener("keydown", function(e) {
  if (e.code === "Space") {
    msg.textContent = "🎉 Congrats! You solved the trick!";
    setTimeout(() => {
      msg.textContent = "Try again!";
    }, 2000);
  }
});
