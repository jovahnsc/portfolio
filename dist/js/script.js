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
