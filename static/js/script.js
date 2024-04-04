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
  gsap.utils.toArray('.starter').forEach((elem) => {
      // let dot = elem.querySelectorAll('.dot');
      let line = elem.querySelector('.line');
      // let dot = elem.querySelector('.address_join_kontakt_container');
      var lineLength = line.getTotalLength();
      line.style.strokeDasharray = lineLength;
      line.style.strokeDashoffset = lineLength;

      let Timeline = gsap.timeline({
          ease: "elastic",
          scrollTrigger: {
              trigger: elem,
              start: "top 500svh",
              end: "bottom 500svh",
              scrub: true,
              // markers:true,
          }
      });

      Timeline
      .to(line,{strokeDashoffset: 0})
      // .to(dot,{ opacity: 0 })
          // .to(line[1], { opacity: 0 },"+=");
  });


});





$(document).ready(function() {
  
  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray('.starter2').forEach((elem) => {
      // let dot = elem.querySelectorAll('.dot');
      let lines = elem.querySelectorAll('.item_home_container2 p');
      // let dot = elem.querySelector('.address_join_kontakt_container');
      // var lineLength = line.getTotalLength();
      // line.style.strokeDasharray = lineLength;
      // line.style.strokeDashoffset = lineLength;

      let Timeline = gsap.timeline({
          ease: "elastic",
          scrollTrigger: {
              trigger: elem,
              start: "top 650svh",
              end: "bottom 650svh",
              scrub: true,
              // markers:true,
          }
      });

      lines.forEach((line) => {
          Timeline.to(line, { opacity: 1 });
  });
});
});


$(document).ready(function() {
  
  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray('.starter2').forEach((elem) => {
      // let dot = elem.querySelectorAll('.dot');
      let lines = elem.querySelectorAll('.title_home_container h2');
      // let dot = elem.querySelector('.address_join_kontakt_container');
      // var lineLength = line.getTotalLength();
      // line.style.strokeDasharray = lineLength;
      // line.style.strokeDashoffset = lineLength;

      let Timeline = gsap.timeline({
          ease: "elastic",
          scrollTrigger: {
              trigger: elem,
              start: "top 650svh",
              end: "bottom 650svh",
              scrub: true,
              // markers:true,
          }
      });

      lines.forEach((line) => {
          Timeline.to(line, { opacity: 1 });
          // Timeline.to(line, { y: 20 });
  });
});
});


$(document).ready(function() {
  
  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray('.starter2').forEach((elem) => {
      // let dot = elem.querySelectorAll('.dot');
      let lines = elem.querySelectorAll('.network_kontakt_container p');
      // let dot = elem.querySelector('.address_join_kontakt_container');
      // var lineLength = line.getTotalLength();
      // line.style.strokeDasharray = lineLength;
      // line.style.strokeDashoffset = lineLength;

      let Timeline = gsap.timeline({
          ease: "elastic",
          scrollTrigger: {
              trigger: elem,
              start: "top 650svh",
              end: "bottom 650svh",
              scrub: true,
              // markers:true,
          }
      });

      lines.forEach((line) => {
          Timeline.to(line, { opacity: 1 });
          // Timeline.to(line, { y: 20 });
  });
});
});




$(document).ready(function() {
  gsap.registerPlugin(ScrollTrigger);


  gsap.to(".logo", {
    y: -30,
    opacity: 0,
    scale: 0,
    duration: 3,
    // rotate: 360,
    scrollTrigger: {
      trigger: ".endpoint",
    
      start: "top -30svh ",
      end: "center -80svh",
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
    y: -100,
    backgroundColor: "rgba(45, 48, 56, 0.95)",
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".endpoint",
      start: "top -30svh ",
      end: "center -80svh",
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
      duration: 1,
      x:100,
      stagger: 0.25,
      opacity: 0,
      ease: 'power2.inOut', // Určuje typ animačnej krivky
  repeat: 0, // Opakovať animáciu nekonečne
  yoyo: true ,
      ease: "power2.out",
      scrollTrigger: {
        trigger: title,
        end: "center 500svh",
        start: "center 700svh",
        // markers: true,
        scrub: true,
        toggleActions: "complete complete complete complete",
        // play pause resume reverse restart reset complete
    }
})  
})

// ease: 'power2.inOut', // Určuje typ animačnej krivky
// repeat: 1, // Opakovať animáciu nekonečne
// yoyo: true ,
// scrollTrigger: {
//   trigger: ".endpoint",

//   start: "top ",
//   end: "center 0%",
//   // markers: true,
//   scrub: 1,
//   // pin: true,
//   toggleActions: "restart none none none", // Opakovať animáciu späť a dopredu



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




// document.addEventListener("DOMContentLoaded", function () {
//   const paragraphs = document.querySelectorAll(".item_home_container p, .center_home_container, .down_home_container, .address_join_kontakt_container, .network_kontakt_container");

//   paragraphs.forEach((paragraph) => {
//     gsap.set(paragraph, { right: 0 });

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             gsap.to(paragraph, {
//               opacity: 1,
//               scale: 1,
//               // right: 100,
//               duration: 0.5,
//               ease: "power2.out",
//             });
//           } else {
//             gsap.to(paragraph, {
//               opacity: 0.2,
//               scale: 0.9,
//               // right: 0,
//               duration: 0.5,
//               ease: "power2.out",
//             });
//           }
//         });
//       },
//       {
//         threshold: 0.15,
//       }
//     );

//     observer.observe(paragraph);
//   });

//   // Pokud používáte imagesLoaded, zjistěte, zda je již nainstalováno
//   // a použijte ho podle potřeby.
// });

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
      speed: 800, // nastavte rychlost scrollování podle potřeby
      easing: 'easeInOutCubic',
    });

  });
  $(document).ready(function() {

    // Získať referenciu na path
    const path = document.getElementById( 'Fill');
  
    // Definovať animáciu s GSAP
    const animation = gsap.to(path, {
      duration: 2, // Dĺžka animácie v sekundách
      // scale: 0.8,
      attr: { d: "M2480.5 311.282C2480.5 311.282 2724.35 294.306 2901.14 791.633C2996.12 1058.78 3028.06 1401.57 3028.06 1401.57L3057.51 1401.58C3057.51 1401.58 3026.45 1095.22 2933.77 792.899C2763.51 237.538 2480.5 265.94 2480.5 265.94L2480.5 311.282Z" }, // Zmena atribútu d v path
      ease: 'power2.inOut', // Určuje typ animačnej krivky
      repeat: 1, // Opakovať animáciu nekonečne
      yoyo: true ,
      scrollTrigger: {
        trigger: ".endpoint",
      
        start: "top ",
        end: "center 0%",
        // markers: true,
        scrub: 1,
        // pin: true,
        toggleActions: "restart none none none", // Opakovať animáciu späť a dopredu
  }
    });
  
    });

  $(document).ready(function() {

  // Získať referenciu na path
  const path = document.getElementById( 'Fill_2');

  // Definovať animáciu s GSAP
  const animation = gsap.to(path, {
    duration: 2, // Dĺžka animácie v sekundách
    // scale: 0.8,
    attr: { d: "M2480.5 311.282C2480.5 311.282 2979.49 262.715 3364.27 771.161C3609.63 1095.37 3643.19 1401.57 3643.19 1401.57L3672.64 1401.58C3672.64 1401.58 3633.94 1090.38 3404.24 770.169C3016.67 229.909 2480.5 265.94 2480.5 265.94L2480.5 311.282Z" }, // Zmena atribútu d v path
    ease: 'power2.inOut', // Určuje typ animačnej krivky
    repeat: 1, // Opakovať animáciu nekonečne
    yoyo: true ,
    scrollTrigger: {
      trigger: ".endpoint",
    
      start: "top ",
      end: "center 0%",
      // markers: true,
      scrub: 1,
      // pin: true,
      toggleActions: "restart none none none", // Opakovať animáciu späť a dopredu
}
  });

  });

  $(document).ready(function() {

    // Získať referenciu na path
    const path = document.getElementById( 'Fill_3');
  
    // Definovať animáciu s GSAP
    const animation = gsap.to(path, {
      duration: 2, // Dĺžka animácie v sekundách
      // scale: 0.8,
      attr: { d: "M2480.5 311.282C2480.5 311.282 3276.64 266.066 3851.14 777.353C4181.83 1071.66 4261.04 1401.79 4261.04 1401.79L4290.49 1401.8C4290.49 1401.8 4224.85 1086.25 3888.92 772.007C3287.04 208.986 2480.5 265.94 2480.5 265.94L2480.5 311.282Z" }, // Zmena atribútu d v path
      ease: 'power2.inOut', // Určuje typ animačnej krivky
      repeat: 1, // Opakovať animáciu nekonečne
      yoyo: true ,
      scrollTrigger: {
        trigger: ".endpoint",
      
        start: "top ",
        end: "center 0%",
        // markers: true,
        scrub: 1,
        // pin: true,
        toggleActions: "restart none none none", // Opakovať animáciu späť a dopredu
  }
    });
  
    });


    $(document).ready(function() {

      // Získať referenciu na path
      const path = document.getElementById( 'Fill_4');
    
      // Definovať animáciu s GSAP
      const animation = gsap.to(path, {
        duration: 2, // Dĺžka animácie v sekundách
        // scale: 0.8,
        attr: { d: "M2480.5 311.062C2480.5 311.062 3318.43 201.684 4198.88 717.708C4936.39 1149.95 4897.15 1757.56 4897.56 1756.7L4934.55 1756.7C4934.55 1756.7 5007.96 1179.54 4236.07 697.403C3437.84 198.81 2480.5 265.721 2480.5 265.721L2480.5 311.062Z" }, // Zmena atribútu d v path
        ease: 'power2.inOut', // Určuje typ animačnej krivky
        repeat: 1, // Opakovať animáciu nekonečne
        yoyo: true,
        scrollTrigger: {
          trigger: ".endpoint",
        
          start: "top ",
          end: "center 0%",
          // markers: true,
          scrub: 1,
          // pin: true,
          toggleActions: "restart none none none", // Opakovať animáciu späť a dopredu
    }
      });
    
      });

      $(document).ready(function() {

        // Získať referenciu na path
        const path = document.getElementById( 'Fill_5');
      
        // Definovať animáciu s GSAP
        const animation = gsap.to(path, {
          duration: 2, // Dĺžka animácie v sekundách
          // scale: 0.8,
          attr: { d: "M2480.5 3201.25C2480.5 3201.25 2724.35 3218.22 2901.14 2720.89C2996.12 2453.75 3028.06 2110.96 3028.06 2110.96L3057.51 2110.95C3057.51 2110.95 3026.45 2417.31 2933.77 2719.63C2763.51 3274.99 2480.5 3246.59 2480.5 3246.59L2480.5 3201.25Z" }, // Zmena atribútu d v path
          ease: 'power2.inOut', // Určuje typ animačnej krivky
          repeat: 1, // Opakovať animáciu nekonečne
          yoyo: true ,
          scrollTrigger: {
            trigger: ".endpoint",
          
            start: "top ",
            end: "center 0%",
            // markers: true,
            scrub: 1,
            // pin: true,
            toggleActions: "restart none none none", // Opakovať animáciu späť a dopredu
      }
        });
      
        });


        $(document).ready(function() {

          // Získať referenciu na path
          const path = document.getElementById( 'Fill_6');
        
          // Definovať animáciu s GSAP
          const animation = gsap.to(path, {
            duration: 2, // Dĺžka animácie v sekundách
            // scale: 0.8,
            attr: { d: "M2480.5 3201.25C2480.5 3201.25 2979.49 3249.81 3364.27 2741.37C3609.63 2417.16 3643.19 2110.96 3643.19 2110.96L3672.64 2110.95C3672.64 2110.95 3633.94 2422.15 3404.24 2742.36C3016.67 3282.62 2480.5 3246.59 2480.5 3246.59L2480.5 3201.25Z" }, // Zmena atribútu d v path
            ease: 'power2.inOut', // Určuje typ animačnej krivky
            repeat: 1, // Opakovať animáciu nekonečne
            yoyo: true ,
            scrollTrigger: {
              trigger: ".endpoint",
            
              start: "top ",
              end: "center 0%",
              // markers: true,
              scrub: 1,
              // pin: true,
              toggleActions: "restart none none none", // Opakovať animáciu späť a dopredu
        }
          });
        
          });




        $(document).ready(function() {

          // Získať referenciu na path
          const path = document.getElementById( 'Fill_7');
        
          // Definovať animáciu s GSAP
          const animation = gsap.to(path, {
            duration: 2, // Dĺžka animácie v sekundách
            // scale: 0.8,
            attr: { d: "M2480.5 3201.25C2480.5 3201.25 3276.64 3246.46 3851.14 2735.17C4181.83 2440.87 4261.04 2110.74 4261.04 2110.74L4290.49 2110.73C4290.49 2110.73 4224.85 2426.27 3888.92 2740.52C3287.04 3303.54 2480.5 3246.59 2480.5 3246.59L2480.5 3201.25Z" }, // Zmena atribútu d v path
            ease: 'power2.inOut', // Určuje typ animačnej krivky
            repeat: 1, // Opakovať animáciu nekonečne
            yoyo: true ,
            scrollTrigger: {
              trigger: ".endpoint",
            
              start: "top ",
              end: "center 0%",
              // markers: true,
              scrub: 1,
              // pin: true,
              toggleActions: "restart none none none", // Opakovať animáciu späť a dopredu
        }
          });
        
          });


          $(document).ready(function() {

            // Získať referenciu na path
            const path = document.getElementById( 'Fill_8');
          
            // Definovať animáciu s GSAP
            const animation = gsap.to(path, {
              duration: 2, // Dĺžka animácie v sekundách
              // scale: 0.8,
              attr: { d: "M2480.5 3201.47C2480.5 3201.47 3318.43 3310.84 4198.88 2794.82C4936.39 2362.58 4897.51 1756.7 4897.51 1756.7L4934.5 1756.7C4934.5 1756.7 5007.96 2332.98 4236.07 2815.12C3437.84 3313.72 2480.5 3246.81 2480.5 3246.81L2480.5 3201.47Z" }, // Zmena atribútu d v path
              ease: 'power2.inOut', // Určuje typ animačnej krivky
              repeat: 1, // Opakovať animáciu nekonečne
              yoyo: true ,
              scrollTrigger: {
                trigger: ".endpoint",
              
                start: "top ",
                end: "center 0%",
                // markers: true,
                scrub: 1,
                // pin: true,
                toggleActions: "restart none none none", // Opakovať animáciu späť a dopredu
          }
            });
          
            });


            $(document).ready(function() {

              // Získať referenciu na path
              const path = document.getElementById( 'Fill_9');
            
              // Definovať animáciu s GSAP
              const animation = gsap.to(path, {
                duration: 2, // Dĺžka animácie v sekundách
                // scale: 0.8,
                attr: { d: "M2480.5 309.679C2480.5 309.679 2236.65 292.703 2059.86 790.03C1964.88 1057.18 1932.94 1399.96 1932.94 1399.96L1903.49 1399.97C1903.49 1399.97 1934.55 1093.62 2027.23 791.296C2197.49 235.935 2480.5 264.337 2480.5 264.337L2480.5 309.679Z" }, // Zmena atribútu d v path
                ease: 'power2.inOut', // Určuje typ animačnej krivky
                repeat: 1, // Opakovať animáciu nekonečne
                yoyo: true ,
                scrollTrigger: {
                  trigger: ".endpoint",
                
                  start: "top ",
                  end: "center 0%",
                  // markers: true,
                  scrub: 1,
                  // pin: true,
                  toggleActions: "restart none none none", // Opakovať animáciu späť a dopredu
            }
              });
            
              });

              $(document).ready(function() {

                // Získať referenciu na path
                const path = document.getElementById( 'Fill_10');
              
                // Definovať animáciu s GSAP
                const animation = gsap.to(path, {
                  duration: 2, // Dĺžka animácie v sekundách
                  // scale: 0.8,
                  attr: { d: "M2480.5 309.679C2480.5 309.679 1981.51 261.112 1596.73 769.558C1351.37 1093.77 1317.81 1399.96 1317.81 1399.96L1288.36 1399.97C1288.36 1399.97 1327.06 1088.78 1556.76 768.566C1944.33 228.306 2480.5 264.337 2480.5 264.337L2480.5 309.679Z" }, // Zmena atribútu d v path
                  ease: 'power2.inOut', // Určuje typ animačnej krivky
                  repeat: 1, // Opakovať animáciu nekonečne
                  yoyo: true ,
                  scrollTrigger: {
                    trigger: ".endpoint",
                  
                    start: "top ",
                    end: "center 0%",
                    // markers: true,
                    scrub: 1,
                    // pin: true,
                    toggleActions: "restart none none none", // Opakovať animáciu späť a dopredu
              }
                });
              
                });

                $(document).ready(function() {

                  // Získať referenciu na path
                  const path = document.getElementById( 'Fill_11');
                
                  // Definovať animáciu s GSAP
                  const animation = gsap.to(path, {
                    duration: 2, // Dĺžka animácie v sekundách
                    // scale: 0.8,
                    attr: { d: "M2480.5 309.679C2480.5 309.679 1684.36 264.463 1109.86 775.75C779.165 1070.06 699.961 1400.18 699.961 1400.18L670.513 1400.19C670.513 1400.19 736.145 1084.65 1072.08 770.404C1673.96 207.383 2480.5 264.337 2480.5 264.337L2480.5 309.679Z" }, // Zmena atribútu d v path
                    ease: 'power2.inOut', // Určuje typ animačnej krivky
                    repeat: 1, // Opakovať animáciu nekonečne
                    yoyo: true ,
                    scrollTrigger: {
                      trigger: ".endpoint",
                    
                      start: "top ",
                      end: "center 0%",
                      // markers: true,
                      scrub: 1,
                      // pin: true,
                      toggleActions: "restart none none none", // Opakovať animáciu späť a dopredu
                }
                  });
                
                  });
                  $(document).ready(function() {

                    // Získať referenciu na path
                    const path = document.getElementById( 'Fill_12');
                  
                    // Definovať animáciu s GSAP
                    const animation = gsap.to(path, {
                      duration: 2, // Dĺžka animácie v sekundách
                      // scale: 0.8,
                      attr: { d: "M2480.5 309.46C2480.5 309.46 1642.57 200.081 762.116 716.105C24.6144 1148.35 63.8486 1755.95 63.4425 1755.09L26.4528 1755.09C26.4528 1755.09-46.9562 1177.94 724.93 695.8C1523.16 197.207 2480.5 264.118 2480.5 264.118L2480.5 309.46Z" }, // Zmena atribútu d v path
                      ease: 'power2.inOut', // Určuje typ animačnej krivky
                      repeat: 1, // Opakovať animáciu nekonečne
                      yoyo: true ,
                      scrollTrigger: {
                        trigger: ".endpoint",
                      
                        start: "top ",
                        end: "center 0%",
                        // markers: true,
                        scrub: 1,
                        // pin: true,
                        toggleActions: "restart none none none", // Opakovať animáciu späť a dopredu
                  }
                    });
                  
                    });

                    $(document).ready(function() {

                      // Získať referenciu na path
                      const path = document.getElementById( 'Fill_13');
                    
                      // Definovať animáciu s GSAP
                      const animation = gsap.to(path, {
                        duration: 2, // Dĺžka animácie v sekundách
                        // scale: 0.8,
                        attr: { d: "M2480.5 3199.64C2480.5 3199.64 2236.65 3216.62 2059.86 2719.29C1964.88 2452.14 1932.94 2109.36 1932.94 2109.36L1903.49 2109.35C1903.49 2109.35 1934.55 2415.71 2027.23 2718.03C2197.49 3273.39 2480.5 3244.98 2480.5 3244.98L2480.5 3199.64Z" }, // Zmena atribútu d v path
                        ease: 'power2.inOut', // Určuje typ animačnej krivky
                        repeat: 1, // Opakovať animáciu nekonečne
                        yoyo: true ,
                        scrollTrigger: {
                          trigger: ".endpoint",
                        
                          start: "top ",
                          end: "center 0%",
                          // markers: true,
                          scrub: 1,
                          // pin: true,
                          toggleActions: "restart none none none", // Opakovať animáciu späť a dopredu
                    }
                      });
                    
                      });

                      $(document).ready(function() {

                        // Získať referenciu na path
                        const path = document.getElementById( 'Fill_14');
                      
                        // Definovať animáciu s GSAP
                        const animation = gsap.to(path, {
                          duration: 2, // Dĺžka animácie v sekundách
                          // scale: 0.8,
                          attr: { d: "M2480.5 3199.64C2480.5 3199.64 1981.51 3248.21 1596.73 2739.76C1351.37 2415.56 1317.81 2109.36 1317.81 2109.36L1288.36 2109.35C1288.36 2109.35 1327.06 2420.55 1556.76 2740.76C1944.33 3281.02 2480.5 3244.98 2480.5 3244.98L2480.5 3199.64Z" }, // Zmena atribútu d v path
                          ease: 'power2.inOut', // Určuje typ animačnej krivky
                          repeat: 1, // Opakovať animáciu nekonečne
                          yoyo: true ,
                          scrollTrigger: {
                            trigger: ".endpoint",
                          
                            start: "top ",
                            end: "center 0%",
                            // markers: true,
                            scrub: 1,
                            // pin: true,
                            toggleActions: "restart none none none", // Opakovať animáciu späť a dopredu
                      }
                        });
                      
                        });
    

                      $(document).ready(function() {

                        // Získať referenciu na path
                        const path = document.getElementById( 'Fill_15');
                      
                        // Definovať animáciu s GSAP
                        const animation = gsap.to(path, {
                          duration: 2, // Dĺžka animácie v sekundách
                          // scale: 0.8,
                          attr: { d: "M2480.5 3199.64C2480.5 3199.64 1684.36 3244.86 1109.86 2733.57C779.165 2439.26 699.961 2109.14 699.961 2109.14L670.513 2109.13C670.513 2109.13 736.145 2424.67 1072.08 2738.92C1673.96 3301.94 2480.5 3244.98 2480.5 3244.98L2480.5 3199.64Z" }, // Zmena atribútu d v path
                          ease: 'power2.inOut', // Určuje typ animačnej krivky
                          repeat: 1, // Opakovať animáciu nekonečne
                          yoyo: true ,
                          scrollTrigger: {
                            trigger: ".endpoint",
                          
                            start: "top ",
                            end: "center 0%",
                            // markers: true,
                            scrub: 1,
                            // pin: true,
                            toggleActions: "restart none none none", // Opakovať animáciu späť a dopredu
                      }
                        });
                      
                        });

                        $(document).ready(function() {

                          // Získať referenciu na path
                          const path = document.getElementById( 'Fill_16');
                        
                          // Definovať animáciu s GSAP
                          const animation = gsap.to(path, {
                            duration: 2, // Dĺžka animácie v sekundách
                            // scale: 0.8,
                            attr: { d: "M2480.5 3199.86C2480.5 3199.86 1642.57 3309.24 762.116 2793.22C24.6144 2360.98 63.4905 1755.09 63.4905 1755.09L26.5008 1755.09C26.5008 1755.09-46.9562 2331.38 724.93 2813.52C1523.16 3312.11 2480.5 3245.2 2480.5 3245.2L2480.5 3199.86Z" }, // Zmena atribútu d v path
                            ease: 'power2.inOut', // Určuje typ animačnej krivky
                            repeat: 1, // Opakovať animáciu nekonečne
                            yoyo: true,
                            scrollTrigger: {
                              trigger: ".endpoint",
                            
                              start: "top ",
                              end: "center 0%",
                              // markers: true,
                              scrub: 1,
                              // pin: true,
                              toggleActions: "restart none none none", // Opakovať animáciu späť a dopredu
                        }
                      });
                        
                          });
    
  

      

      