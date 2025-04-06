// Navbar scroll effect
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


let index = 0;
function showSlide() {
  const track = document.getElementById("carousel-track");
  const slides = document.querySelectorAll(".carousel-track img");
  if (index >= slides.length) index = 0;
  if (index < 0) index = slides.length - 1;
  track.style.transform = `translateX(-${index * 600}px)`;
}
function nextSlide() {
  index++;
  showSlide();
}
function prevSlide() {
  index--;
  showSlide();
}
// pop up


// pop up
document.addEventListener('DOMContentLoaded', function() {
const videoBtn = document.getElementById('videoBtn');
const videoPopup = document.getElementById('videoPopup');
const videoFrame = document.getElementById('videoFrame');
const closeBtn = document.querySelector('.close-btn');

videoBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // Use the embed URL format for YouTube
    videoFrame.src = "https://youtu.be/Atf_Af1q_5w?si=x2u_aHll-fmuJw-d";
    videoPopup.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent scrolling when popup is open
});

closeBtn.addEventListener('click', () => {
    videoPopup.style.display = 'none';
    videoFrame.src = "";
    document.body.style.overflow = 'auto'; // Re-enable scrolling
});

window.addEventListener('click', (e) => {
    if (e.target === videoPopup) {
        videoPopup.style.display = 'none';
        videoFrame.src = "";
        document.body.style.overflow = 'auto';
    }
});
});

