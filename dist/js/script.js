const cta = document.querySelectorAll(".cta");

cta.forEach(el => {
    el.addEventListener('click', function () {
        el.preventDefault;
        el.classList.add('animate');
        setTimeout(() => {
            el.classList.remove('animate');
        }, 600);
    });
});

const cards = document.querySelectorAll('.card');
cards.forEach(el => {
    el.onmousehover = function (el) {
        const x = el.pageX - el.offsetLeft;
        const y = el.pageY - el.offsetTop;

        el.style.setProperty('--x', x + 'px');
        el.style.setProperty('--y', y + 'px');
    }
});


// cta.addEventListener("click", (e) => {
//     e.preventDefault;
//     cta.classList.add("animate");
//     setTimeout(() => {
//         cta.classList.remove("animate");
//     }, 600);
// });