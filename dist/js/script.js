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

const cards = document.querySelectorAll('.card');

cards.forEach((el) => {
  el.addEventListener("mousemove", function () {
    el.style.left = el.pageX + 'px';
    el.style.top = el.pageY + 'px';
  });
});