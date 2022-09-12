let bars = document.querySelector(".fa-bars");
let nav = document.querySelector(".nav");
let header = document.querySelector("header");

bars.addEventListener("click", () => {
  bars.classList.toggle("fa-times");
  nav.classList.toggle("active");
});

window.onscroll = function () {
  bars.classList.remove("fa-times");
  nav.classList.remove("active");
};

let bullets = document.querySelectorAll(".bullets span");
let img = document.querySelector(".company img");

bullets.forEach((bullet) => {
  bullet.addEventListener("click", () => {
    let imgSrc = bullet.dataset.src;
    img.src = imgSrc;
  });
});
