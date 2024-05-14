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
