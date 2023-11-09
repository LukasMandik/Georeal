let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector(".menu");

	hamburger.addEventListener("click", function(){
		menu.classList.toggle("active");
	})





// var navBar = document.querySelector(".main_navbar"); // vyberte navigačný panel
// var offset = 70; // nastavte hodnotu posunu, po ktorom sa zmení veľkosť
// var scrollPos = 0; // uložte aktuálnu pozíciu scrollovania

// window.addEventListener("scroll", scrollHandler);
// window.addEventListener("load", scrollHandler);

// function scrollHandler() {
//   var currentScrollPos = window.pageYOffset;

//   if (currentScrollPos > offset) { // ak sme posunuli pod určitý bod
//     navBar.classList.add("small"); // pridajte triedu pre menší navigačný panel

//   } else if (currentScrollPos < offset) { // ak sme posunuli nad určitý bod
//     navBar.classList.remove("small"); // odstráňte triedu pre menší navigačný panel

//   }

//   scrollPos = currentScrollPos; // uložte novú pozíciu scrollovania
// }


$(document).ready(function() {
  gsap.registerPlugin(ScrollTrigger);


  gsap.to(".logo", {
    y: 40,
    opacity: 0,
    scale: 0,
    duration: 3,
    // rotate: 360,
    scrollTrigger: {
      trigger: ".endpoint",
    
      start: "top ",
      end: "center 0%",
      // markers: true,
      scrub: 1,
      // pin: true,
      toggleActions: "restart none none none",
      //play pause resume reverse restart reset complete none
      //           onEnter onLeave onEnterBack onLeaveBack
    }
  })
})


$(document).ready(function() {
  gsap.registerPlugin(ScrollTrigger);


  gsap.to(".main_navbar", {
    y: -90,
    backgroundColor: "rgba(32, 32, 32, 0.95)",
    duration: 1,
    scrollTrigger: {
      trigger: ".endpoint",
      start: "top ",
      end: "center 0%",
      // toggleClass: "black",
      scrub: 1,
      // markers: true,
      // pin: true,
      toggleActions: "play resume reverse reverse",
    }
  })
})



$(document).ready(function() {
  gsap.registerPlugin(ScrollTrigger);
  const title = ".main_title_container h1";
  

  gsap.from(title,{
      duration: 2,
      x:100,
      stagger: 0.25,
      opacity: 0,
      scrollTrigger: {
        trigger: ".main_title_container",
        end: "center 50%",
        start: "center 60%",
        // markers: true,
        scrub: true,
        toggleActions: "restart none none none",
    }
})  
})

$(document).ready(function() {
  gsap.registerPlugin(ScrollTrigger);
  const paragraphs = ".item_home_container p";

  gsap.from(paragraphs, {
    duration: 1,
    y: 10,
    stagger: 0.85,
    opacity: 0,
    scale: 0.9,
    scrollTrigger: {
      trigger: paragraphs,
      start: "top 70%",
      // markers: true,
      scrub: 1,
      toggleActions: "restart none none none",
    },
    onComplete: () => {
      // Reset the translateY of paragraphs after the animation completes
      gsap.set(paragraphs, { y: 0 });
    }
  });
});
