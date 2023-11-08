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
    y: -60,
    opacity: 0,
    scale: 0,
    duration: 6,
    rotate: 180,
    scrollTrigger: {
      trigger: ".inner_navbar",
    
      start: "top -20px",
      end: "center 0%",
      markers: true,
      // toggleClass: "red",
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
    duration: 6,
    // background: black,
    scrollTrigger: {
      trigger: ".main_navbar",
    
      start: "top -20px",
      end: "center 0%",
      // markers: true,
      // toggleClass: "red",
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
  const title = ".title_home_container h1";
  

  gsap.from(title,{
      duration: 1,
      x:100,
      stagger: 0.25,
      opacity: 0,
      scrollTrigger: {
        trigger: ".title_home_container",
        end: "center 40%",
        start: "top 50%",
        // markers: true,
        // toggleClass: "red",
        scrub: 1,
        // pin: true,
        toggleActions: "restart none none none",
    }
})  
})

$(document).ready(function() {
  gsap.registerPlugin(ScrollTrigger);
  const title = ".item_home_container p";
  

  gsap.from(title,{
      duration: 1,
      x:100,
      stagger: 0.25,
      opacity: 0,
      scrollTrigger: {
        trigger: ".item_home_container",
        end: "center 40%",
        start: "top 50%",
        // markers: true,
        // toggleClass: "red",
        scrub: 1,
        // pin: true,
        toggleActions: "restart none none none",
    }
})  
})