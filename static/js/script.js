let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector(".menu");

	hamburger.addEventListener("click", function(){
		menu.classList.toggle("active");
	})

// FAQ
$(document).ready(function() {

    // this is the function to collapse and expand the collapsible;

    const collapse = (element)=>{
      element=element.parentElement;
    
      if(element.dataset.aiDisabled == 'true'){return;}
    
      if(element.style.height != element.scrollHeight+'px'){
          element.style.height = element.scrollHeight+'px';
          element.querySelector('i').style.transform = 'rotate(-180deg)';
          element.classList.add('active');
          element.querySelector('.collapse-body').classList.remove('fade-out-text');
          element.querySelector('.collapse-body').classList.add('fade-in-text');
      }else{
          element.style.height = '60px';
          element.querySelector('i').style.transform = 'rotate(0deg)';
          element.classList.remove('active')
          element.querySelector('.collapse-body').classList.remove('fade-in-text');
          element.querySelector('.collapse-body').classList.add('fade-out-text');
      }
  }

  // this function check the the collapsible is disable or expanded
  
  const startUp = (element) =>{
      element.querySelector('i').classList.add('no-trans');
      element.classList.add('no-trans');
      if(element.dataset.aiDisabled == 'true'){
          element.classList.add('disabled');
          element.querySelector('i').classList.remove('fa-chevron-down');
          element.querySelector('i').classList.add('bi-slash-circle');
      }else{
          element.classList.remove('disabled');
          element.querySelector('i').classList.remove('bi-slash-circle');
          element.querySelector('i').classList.add('fa-chevron-down');
      }
      if(element.dataset.aiExpanded == 'true'){
          element.style.height = element.scrollHeight+'px';
          element.querySelector('i').style.transform = 'rotate(-180deg)';
          element.classList.add('active')
      }else{
          element.style.height = '60px';
          element.querySelector('i').style.transform = 'rotate(0deg)';
          element.classList.remove('active')
      }
      setInterval(() => {
          element.querySelector('i').classList.remove('no-trans');
          element.classList.remove('no-trans');
      }, 0);
  }



  // here we Listen to events and apply the functions 

  document.querySelectorAll('.collapse-holder').forEach(collapsible=>{
      startUp(collapsible);
      collapsible.querySelector('.collapse-header').addEventListener('click',(e)=>{
          collapse(e.target);
      })
  })
  })


$(document).ready(function() {
  
  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray('.starter6').forEach((elem) => {
      let line = elem.querySelector('.line');
      var lineLength = line.getTotalLength();
      line.style.strokeDasharray = lineLength;
      line.style.strokeDashoffset = lineLength;

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

      Timeline
      .to(line,{strokeDashoffset: 0})
      // .to(dot,{ opacity: 0 })
          // .to(line[1], { opacity: 0 },"+=");
  });


});


$(document).ready(function() {
  
  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray('.starter7').forEach((elem) => {
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
    gsap.utils.toArray('.starter2').forEach((elem) => {
        let lines = elem.querySelectorAll('.item_home_container2 p');

        lines.forEach((line) => {
            let Timeline = gsap.timeline({
                ease: "elastic",
                scrollTrigger: {
                    trigger: line,
                    start: "top 650svh",
                    end: "bottom 650svh",
                    scrub: false,
                    // markers: true,
                    toggleActions: "restart none none reverse",
                }
            });

            Timeline.to(line, { opacity: 1, y: -10 });
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
              scrub: false,
              toggleActions: "restart none none reverse",
              // markers:true,
          }
      });

      lines.forEach((line) => {
          Timeline.to(line, { opacity: 1, y: -20 });
          // Timeline.to(line, { y: 20 });
  });
});
});




$(document).ready(function() {
  gsap.utils.toArray('.starter2').forEach((elem) => {
      let lines = elem.querySelectorAll('.address_container, .kontakt_text');

      lines.forEach((line) => {
          let Timeline = gsap.timeline({
              ease: "elastic",
              scrollTrigger: {
                  trigger: line,
                  start: "top 650svh",
                  end: "bottom 650svh",
                  scrub: false,
                  // markers: true,
                  toggleActions: "restart none none reverse",
              }
          });

          Timeline.to(line, { opacity: 1, y: -10 });
      });
  });
});


$(document).ready(function() {
  gsap.utils.toArray('.starter2').forEach((elem) => {
      let lines = elem.querySelectorAll('.network_kontakt_container p');

      lines.forEach((line) => {
          let Timeline = gsap.timeline({
              ease: "elastic",
              scrollTrigger: {
                  trigger: line,
                  start: "top 650svh",
                  end: "bottom 650svh",
                  scrub: false,
                  // markers: true,
                  toggleActions: "restart none none reverse",
              }
          });

          Timeline.to(line, { opacity: 1, y: -10 });
      });
  });
});



$(document).ready(function() {
  
  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray('.starter2').forEach((elem) => {
      let lines = elem.querySelectorAll('.faq_content_container p');


      
      lines.forEach((line) => {
        let Timeline = gsap.timeline({
            ease: "elastic",
            scrollTrigger: {
                trigger: line,
                start: "top 650svh",
                end: "bottom 650svh",
                scrub: false,
                // markers: true,
                toggleActions: "restart none none reverse",
            }
        });

        Timeline.to(line, { opacity: 1, y: -10 });
    });
});
});


$(document).ready(function() {
  gsap.registerPlugin(ScrollTrigger);


  gsap.to(".logo", {
    y: -30,
    opacity: 0,
    scale: 0,
    duration: 0.7,
    // rotate: 360,
    scrollTrigger: {
      trigger: ".endpoint",
    
      start: "top -30svh ",
      end: "center -80svh",
      // markers: true,
      scrub: false,
      // pin: true,
      toggleActions: "restart none none reverse",
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
    duration: 0.7,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".endpoint",
      start: "top -30svh ",
      end: "center -80svh",
      // toggleClass: "black",
      scrub: false,
      // markers: true,
      // pin: true,
      toggleActions: "restart none none reverse",
    }
  })
})



$(document).ready(function() {
  gsap.utils.toArray('.starter2').forEach((elem) => {
      let lines = elem.querySelectorAll('.main_title_container h1 ,.main_title_container h2');

      let Timeline = gsap.timeline({
        scrollTrigger: {
            trigger: elem,
            start: "center 610svh",
            end: "center 620svh",
            scrub: false,
            toggleActions: "restart none none reverse",
            // markers: true,
        }
    });

    lines.forEach((line) => {
      Timeline.from(line, { opacity: 0, x: 100,duration: 0.35 });
    });
  });
});


$(document).ready(function() {
  gsap.utils.toArray('.starter').forEach((elem) => {
      let lines = elem.querySelectorAll('.title_home_container h2');

      let Timeline = gsap.timeline({
        scrollTrigger: {
            trigger: elem,
            start: "center 610svh",
            end: "center 620svh",
            scrub: false,
            toggleActions: "restart none none reverse",
            // markers: true,
        }
    });

    lines.forEach((line) => {
      Timeline.from(line, { opacity: 0, x: 100,duration: 0.35 });
    });
  });
});


$(document).ready(function() {
  gsap.utils.toArray('.starter').forEach((elem) => {
      let lines = elem.querySelectorAll('.item_home_container p');

      lines.forEach((line) => {
          let Timeline = gsap.timeline({
              ease: "elastic",
              scrollTrigger: {
                  trigger: line,
                  start: "top 650svh",
                  end: "bottom 650svh",
                  scrub: false,
                  // markers: true,
                  toggleActions: "restart none none reverse",
              }
          });

          Timeline.to(line, { opacity: 1, y: -10 });
      });
  });
});


$(document).ready(function() {

    var scroll = new SmoothScroll('a[href*="#"]', {
      speed: 800, // nastavte rychlost scrollování podle potřeby
      easing: 'easeInOutCubic',
    });

  });
  
    
  

      

      