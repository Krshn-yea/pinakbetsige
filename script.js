let currentSlide = 1;

function nextSlide(slideNumber) {
  const currentSlideElement = document.querySelector(`#slide${currentSlide}`);
  if (currentSlideElement) {
    currentSlideElement.classList.remove("active");
  }

  // Update to the new slide number
  currentSlide = slideNumber;

  // Ensure the new slide exists before adding the 'active' class
  const newSlideElement = document.querySelector(`#slide${currentSlide}`);
  if (newSlideElement) {
    newSlideElement.classList.add("active");
  }
}
function nextSlide(slideNumber) {
  // Hide all slides
  const allSlides = document.querySelectorAll(".container");
  allSlides.forEach((slide) => slide.classList.remove("active"));

  // Show the selected slide
  const selectedSlide = document.getElementById(`slide${slideNumber}`);
  if (selectedSlide) {
    selectedSlide.classList.add("active");
  }
}