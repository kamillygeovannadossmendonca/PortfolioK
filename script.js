// ================= SCROLL BAR =================
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const height = document.body.scrollHeight - window.innerHeight;
  const scrolled = (scrollTop / height) * 100;

  const bar = document.getElementById("scroll-bar");
  if (bar) {
    bar.style.width = scrolled + "%";
  }
});

// ================= TEXTO INTELIGENTE (CORRIGIDO) =================
document.addEventListener("DOMContentLoaded", () => {
  const el = document.querySelector(".title-desc p");

  if (!el) return;

  const texts = [
  "Oi, eu sou a Geovanna 👋",
  "Amo tecnologia e design",
  "Eu crio experiências digitais",
  "Sempre aprendendo algo novo 🚀",
  "Vamos construir algo juntos?"
];

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentText = texts[textIndex];

    // escreve
    if (!isDeleting) {
      el.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1500);
        return;
      }
    } 
    // apaga
    else {
      el.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
      }
    }

    setTimeout(typeEffect, isDeleting ? 40 : 60);
  }

  typeEffect();
});

// ================= FUNDO ANIMADO =================
document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("bg-animation");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  let particles = [];

  for (let i = 0; i < 80; i++) {
    particles.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 2,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5
    });
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;

      if (document.body.classList.contains("light")) {
  ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
} else {
  ctx.fillStyle = "rgba(255, 0, 200, 0.6)";
}
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();

      if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
      if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
    });

    requestAnimationFrame(animateParticles);
  }

  animateParticles();
});
// ================= TEMA CLARO/ESCURO (SWITCH) =================
window.addEventListener("load", () => {
  const toggle = document.getElementById("theme-toggle");

  if (!toggle) return;

  // 🔥 1. Carregar preferência salva
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light") {
    document.body.classList.add("light");
    toggle.checked = true;
  }

  // 🔥 2. Quando mudar o botão
  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      document.body.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
  });
});
// ================= SCROLL REVEAL AVANÇADO =================
function revealAdvanced() {
  const elements = document.querySelectorAll(".reveal");

  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 80) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealAdvanced);
window.addEventListener("load", revealAdvanced);
// ================= PARALLAX =================
window.addEventListener("scroll", () => {
  const scroll = window.scrollY;
  document.body.style.backgroundPositionY = scroll * 0.5 + "px";
});
window.addEventListener("load", ()=>{
  const intro = document.getElementById("intro");
  const loader = document.querySelector(".loader");

  setTimeout(()=>{
    loader.style.transform = "scale(1.2)";
    loader.style.opacity = "0";
    loader.style.transition = "0.6s ease";
  },1400);

  setTimeout(()=>{
    intro.classList.add("hide");
  },2000);
});

const btnTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btnTop.style.display = "flex";
    btnTop.style.alignItems = "center";
    btnTop.style.justifyContent = "center";
  } else {
    btnTop.style.display = "none";
  }
});

btnTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
const modal = document.getElementById("modal");
const modalImg = document.getElementById("img-grande");
const fechar = document.getElementById("fechar");

document.querySelectorAll(".certificados-linha img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
  });
});

fechar.onclick = () => {
  modal.style.display = "none";
};

modal.onclick = () => {
  modal.style.display = "none";
};
document.addEventListener("click", e=>{
  const wave = document.createElement("div");
  wave.classList.add("click-wave");

  wave.style.left = e.clientX + "px";
  wave.style.top = e.clientY + "px";

  document.body.appendChild(wave);

  setTimeout(()=>wave.remove(),600);
});
