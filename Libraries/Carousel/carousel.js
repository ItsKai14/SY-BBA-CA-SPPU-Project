const carousel = document.querySelector('.carousel');
const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = carouselInner.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentSlide = 0;

function nextSlide() {
  currentSlide = (currentSlide + 1) % carouselItems.length;
  carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + carouselItems.length) % carouselItems.length;
  carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Crousel Controls
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

