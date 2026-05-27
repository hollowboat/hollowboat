/* =========================
   hollowboat — about.js
========================= */


/* =========================
   PAGE FADE-IN
========================= */

document.addEventListener("DOMContentLoaded", () => {

  document.body.style.opacity = "0";

  setTimeout(() => {

    document.body.style.transition =
    "opacity 1.4s ease";

    document.body.style.opacity = "1";

  },100);

});


/* =========================
   PAGE TRANSITIONS
========================= */

const links =
document.querySelectorAll("a");

links.forEach(link => {

  link.addEventListener("click", function(e){

    const href =
    this.getAttribute("href");

    if(
      href &&
      !href.startsWith("#") &&
      !href.startsWith("http") &&
      !href.startsWith("mailto:")
    ){

      e.preventDefault();

      document.body.style.opacity = "0";

      setTimeout(() => {

        window.location.href = href;

      },800);

    }

  });

});


/* =========================
   FOG PARALLAX
========================= */

window.addEventListener("scroll", () => {

  const scrollY =
  window.scrollY;

  const fog =
  document.querySelector(".fog");

  if(fog){

    fog.style.transform =
    `translateY(${scrollY * 0.05}px)`;

  }

});


/* =========================
   INPUT FOCUS EFFECT
========================= */

const inputs =
document.querySelectorAll("input");

inputs.forEach(input => {

  input.addEventListener("focus", () => {

    input.style.boxShadow =
    "0 0 20px rgba(255,255,255,0.06)";

  });

  input.addEventListener("blur", () => {

    input.style.boxShadow =
    "none";

  });

});


/* =========================
   BUTTON HOVER GLOW
========================= */

const button =
document.querySelector("button");

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
   SCROLL REVEAL
========================= */

const revealElements =
document.querySelectorAll(
".about-left, .about-right, .boat-logo"
);

const revealObserver =
new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if(entry.isIntersecting){

      entry.target.style.opacity = "1";

      entry.target.style.transform =
      "translateY(0px)";

    }

  });

},{
  threshold:0.15
});

revealElements.forEach(el => {

  el.style.opacity = "0";

  el.style.transform =
  "translateY(40px)";

  el.style.transition =
  "all 1.5s ease";

  revealObserver.observe(el);

});


/* =========================
   FORM SUBMIT ANIMATION
========================= */

const form =
document.querySelector("form");

if(form){

  form.addEventListener("submit", () => {

    button.innerText =
    "sending...";

    button.style.opacity =
    "0.7";

  });

}
