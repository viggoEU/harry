const sections = document.querySelectorAll('.section');
const symbols = ["*", "+", ".", "x", "o", "#", "%", "@"];

sections.forEach(section => {
  const title = section.querySelector('.section-title');
  const links = section.querySelector('.links');

  title.addEventListener('click', () => {
    document.querySelectorAll('.links').forEach(l => {
      if (l !== links) l.classList.remove('open');
    });

    links.classList.toggle('open');
  });
});

document.addEventListener("click", (e) => {
  for (let i = 0; i < 12; i++) {
    const particle = document.createElement("div");
    particle.className = "ascii-particle";
    particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];

    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * 80 + 20;

    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    particle.style.left = e.clientX + "px";
    particle.style.top = e.clientY + "px";
    particle.style.setProperty("--x", x + "px");
    particle.style.setProperty("--y", y + "px");

    document.body.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 600);
  }
});
