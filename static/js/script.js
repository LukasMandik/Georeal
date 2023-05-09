let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector(".menu");

	hamburger.addEventListener("click", function(){
		menu.classList.toggle("active");
	})





var navBar = document.querySelector(".main_navbar"); // vyberte navigačný panel
var offset = 70; // nastavte hodnotu posunu, po ktorom sa zmení veľkosť
var scrollPos = 0; // uložte aktuálnu pozíciu scrollovania

window.addEventListener("scroll", scrollHandler);
window.addEventListener("load", scrollHandler);

function scrollHandler() {
  var currentScrollPos = window.pageYOffset;

  if (currentScrollPos > offset) { // ak sme posunuli pod určitý bod
    navBar.classList.add("small"); // pridajte triedu pre menší navigačný panel

  } else if (currentScrollPos < offset) { // ak sme posunuli nad určitý bod
    navBar.classList.remove("small"); // odstráňte triedu pre menší navigačný panel

  }

  scrollPos = currentScrollPos; // uložte novú pozíciu scrollovania
}
