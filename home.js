/* =========================
   hollowboat — home.js
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

      document.body.style.transition =
      "opacity 0.8s ease";

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
    `translateY(${scrollY * 0.08}px)`;

  }

});


/* =========================
   HERO FLOATING EFFECT
========================= */

const hero =
document.querySelector(".hero");

let floatValue = 0;

function floatingEffect(){

  floatValue += 0.01;

  if(hero){

    hero.style.transform =
    `translateY(${Math.sin(floatValue) * 4}px)`;

  }

  requestAnimationFrame(floatingEffect);

}

floatingEffect();


/* =========================
   RANDOM FILM FLASH
========================= */

setInterval(() => {

  document.body.style.filter =
  `brightness(${1 + Math.random() * 0.015})`;

  setTimeout(() => {

    document.body.style.filter =
    "brightness(1)";

  },120);

},4000);


/* =========================
   CTA BUTTON GLOW
========================= */

const ctaButton =
document.querySelector(".cta a");

if(ctaButton){

  ctaButton.addEventListener("mouseenter", () => {

    ctaButton.style.boxShadow =
    "0 0 25px rgba(255,255,255,0.08)";

  });

  ctaButton.addEventListener("mouseleave", () => {

    ctaButton.style.boxShadow =
    "none";

  });

}


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
document.querySelectorAll(
".small-text, .statement, .cta"
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
  threshold:0.2
});

revealElements.forEach(el => {

  el.style.opacity = "0";

  el.style.transform =
  "translateY(40px)";

  el.style.transition =
  "all 1.4s ease";

  revealObserver.observe(el);

});
