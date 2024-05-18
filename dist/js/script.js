const cta = document.querySelectorAll(".cta");

cta.forEach((el) => {
  el.addEventListener("click", function () {
    el.preventDefault;
    el.classList.add("animate");
    setTimeout(() => {
      el.classList.remove("animate");
    }, 600);
  });
});

document.getElementById("cards").onmousemove = (e) => {
  for (const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  }
};

// Scroll Sections Active Link
const activeLink = () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  let current = "about";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    if (this.scrollY >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((item) => {
    item.classList.remove("text-mainColor");
    if (item.href.includes(current)) {
      item.classList.add("text-mainColor");
    }
  });
};

window.addEventListener("scroll", activeLink);
