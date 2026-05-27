/* =========================
   hollowboat — thankyou.js
========================= */


/* =========================
   PAGE FADE-IN
========================= */

document.body.style.opacity = "0";

window.addEventListener("load", () => {

  setTimeout(() => {

    document.body.style.transition =
    "opacity 1.5s ease";

    document.body.style.opacity = "1";

  },100);

});


/* =========================
   RANDOM FILM FLASH
========================= */

setInterval(() => {

  document.body.style.filter =
  `brightness(${1 + Math.random() * 0.012})`;

  setTimeout(() => {

    document.body.style.filter =
    "brightness(1)";

  },120);

},5000);


/* =========================
   BUTTON HOVER GLOW
========================= */

const button =
document.querySelector("a");

if(button){

  button.addEventListener("mouseenter", () => {

    button.style.boxShadow =
    "0 0 25px rgba(255,255,255,0.08)";

  });

  button.addEventListener("mouseleave", () => {

    button.style.boxShadow =
    "none";

  });

}