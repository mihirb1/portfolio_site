// Menu Toggle
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Slideshow Logic
document.addEventListener("DOMContentLoaded", () => {
  const slideshows = document.querySelectorAll(".slideshow");

  slideshows.forEach((slideshow) => {
    let slideIndex = 0;
    const slides = slideshow.querySelectorAll(".slide");
    const prevBtn = slideshow.querySelector(".prev");
    const nextBtn = slideshow.querySelector(".next");

    // Show the first slide
    showSlide(slideIndex);

    function showSlide(n) {
      slides.forEach((slide, index) => {
        slide.classList.remove("active");
        if (index === n) slide.classList.add("active");
      });
    }

    function changeSlide(n) {
      slideIndex += n;
      if (slideIndex < 0) slideIndex = slides.length - 1;
      if (slideIndex >= slides.length) slideIndex = 0;
      showSlide(slideIndex);
    }

    // Attach event listeners per slideshow
    prevBtn?.addEventListener("click", () => changeSlide(-1));
    nextBtn?.addEventListener("click", () => changeSlide(1));
  });
});
