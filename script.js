// Initialize Locomotive Scroll
const scroll = new LocomotiveScroll({
   el: document.querySelector('#main'),
   smooth: true
});

// Function to handle video container animations
function videoconAnimation() {
   var videocon = document.querySelector("#video-container");
   var playbtn = document.querySelector("#play");
   videocon.addEventListener("mouseenter", function () {
      gsap.to(playbtn, {
         scale: 1,
         opacity: 1
      });
   });
   videocon.addEventListener("mouseleave", function () {
      gsap.to(playbtn, {
         scale: 0,
         opacity: 0
      });
   });
   videocon.addEventListener("mousemove", function (dets) {
      gsap.to(playbtn, {
         left: dets.x - 70,
         top: dets.y - 80
      });
   });
}
videoconAnimation();

// Function to handle page loading animations
function loadinganimation() {
   gsap.from("#page1 h1", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 0.9,
      stagger: 0.3
   });
   gsap.from("#page1 #video-container", {
      scale: 0.9,
      opacity: 0,
      delay: 1.3,
      duration: 0.5,
   });
}
loadinganimation();

// Function to handle search functionality
function searchFunctionality() {
   const searchInput = document.getElementById('searchInput');
   const searchButton = document.getElementById('searchButton');

   searchButton.addEventListener('click', function () {
      const input = searchInput.value.toLowerCase();
      const boxes = document.querySelectorAll('.box');

      boxes.forEach(function (box) {
         const title = box.querySelector('h3').innerText.toLowerCase();
         const isMatch = title.includes(input);
         box.style.display = isMatch ? 'block' : 'none';
      });
   });

   searchInput.addEventListener('keyup', function (event) {
      if (event.key === 'Enter') {
         searchButton.click();
      }
   });
}
searchFunctionality();


