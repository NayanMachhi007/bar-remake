// Loader Javascript
var preloader = document.getElementById("loading");
window.addEventListener('load', function(){
  preloader.style.display = 'none';
  })


// Mobile Navigation Javascript
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const togglenavmain = () => {
    // alert("Done");

    nav_header.classList.toggle("active");
};
mobile_nav.addEventListener('click', () => togglenavmain());


// Scroll Up and down 


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("header").style.top = "0";
  } else {
     document.querySelector("header").style.top = "-8.2rem";
  }
  prevScrollpos = currentScrollPos;
}


