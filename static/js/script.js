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
    y: -120,
    backgroundColor: "rgba(45, 48, 56, 0.95)",
    duration: 1,
    ease: "power2.out",
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
  const title = ".main_title_container h1, .main_title_container h2";
  

  gsap.from(title,{
      duration: 2,
      x:100,
      stagger: 0.25,
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".endpoint",
        end: "center -200svh",
        start: "center 70svh",
        // markers: true,
        scrub: true,
        toggleActions: "pause none none none",
        // play pause resume reverse restart reset complete
    }
})  
})

$(document).ready(function() {
  gsap.registerPlugin(ScrollTrigger);
  const title = ".sluzby_container .title_home_container h2";
  

  gsap.from(title,{
      duration: 2,
      x:100,
      stagger: 0.25,
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: title,
        end: "center 500svh",
        start: "center 700svh",
        // markers: true,
        scrub: true,
        toggleActions: "pause none none none",
        // play pause resume reverse restart reset complete
    }
})  
})

$(document).ready(function() {
  gsap.registerPlugin(ScrollTrigger);
  const title = ".kontakt_container .title_home_container h2";
  

  gsap.from(title,{
      duration: 2,
      x:100,
      stagger: 0.25,
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: title,
        end: "center 500svh",
        start: "center 700svh",
        // markers: true,
        scrub: true,
        toggleActions: "pause none none none",
        // play pause resume reverse restart reset complete
    }
})  
})



$(document).ready(function() {
  gsap.registerPlugin(ScrollTrigger);
  const title = ".faq_container .title_home_container h2";
  

  gsap.from(title,{
      duration: 2,
      x:100,
      stagger: 0.25,
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: title,
        end: "center 500svh",
        start: "center 700svh",
        // markers: true,
        scrub: true,
        toggleActions: "pause none none none",
        // play pause resume reverse restart reset complete
    }
})  
})
// $(document).ready(function() {
//   gsap.registerPlugin(ScrollTrigger);
//   const paragraphs = ".item_home_container p";

//   gsap.from(paragraphs, {
//     duration: 1,
//     y: 10,
//     stagger: 0.85,
//     opacity: 0,
//     scale: 0.9,
//     scrollTrigger: {
//       trigger: paragraphs,
//       start: "top 70%",
//       // markers: true,
//       scrub: 1,
//       toggleActions: "restart none none none",
//     },
//     onComplete: () => {
//       // Reset the translateY of paragraphs after the animation completes
//       gsap.set(paragraphs, { y: 0 });
//     }
//   });
// });




document.addEventListener("DOMContentLoaded", function () {
  const paragraphs = document.querySelectorAll(".item_home_container p, .center_home_container, .down_home_container, .up_address_container");

  paragraphs.forEach((paragraph) => {
    gsap.set(paragraph, { right: 0 });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(paragraph, {
              opacity: 1,
              scale: 1,
              // right: 100,
              duration: 0.5,
              ease: "power2.out",
            });
          } else {
            gsap.to(paragraph, {
              opacity: 0.2,
              scale: 0.9,
              // right: 0,
              duration: 0.5,
              ease: "power2.out",
            });
          }
        });
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(paragraph);
  });

  // Pokud používáte imagesLoaded, zjistěte, zda je již nainstalováno
  // a použijte ho podle potřeby.
});

document.addEventListener("DOMContentLoaded", function () {
  const paragraphs = document.querySelectorAll(" #faq .faq_content_container p:nth-child(odd)");

  paragraphs.forEach((paragraph) => {
    gsap.set(paragraph, { right: 0 });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(paragraph, {
              opacity: 1,
              // scale: 1,
              // right: 100,
              duration: 0.2,
              ease: "power2.out",
            });
          } else {
            gsap.to(paragraph, {
              opacity: 0.2,
              // scale: 0.98,
              // right: 0,
              duration: 0.2,
              ease: "power2.out",
            });
          }
        });
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(paragraph);
  });

  

  // Pokud používáte imagesLoaded, zjistěte, zda je již nainstalováno
  // a použijte ho podle potřeby.
});

document.addEventListener("DOMContentLoaded", function () {
  const paragraphs = document.querySelectorAll(" #faq .faq_content_container p:nth-child(even)");

  paragraphs.forEach((paragraph) => {
    gsap.set(paragraph, { right: 0 });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(paragraph, {
              opacity: 1,
              scale: 1,
              // right: 100,
              duration: 0.2,
              ease: "power2.out",
            });
          } else {
            gsap.to(paragraph, {
              opacity: 0.2,
              scale: 0.98,
              // right: 0,
              duration: 0.2,
              ease: "power2.out",
            });
          }
        });
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(paragraph);
  });

  

  // Pokud používáte imagesLoaded, zjistěte, zda je již nainstalováno
  // a použijte ho podle potřeby.
});


$(document).ready(function() {

    var scroll = new SmoothScroll('a[href*="#"]', {
      speed: 1600, // nastavte rychlost scrollování podle potřeby
      easing: 'easeInOutCubic',
    });

  });

  