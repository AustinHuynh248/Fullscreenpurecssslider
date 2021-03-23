const slides = document.querySelectorAll(".slide");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const auto = false;
const interval = 5000;
let slideInterval;

const nextSlide = () => {
  const current = document.querySelector(".current");
  //   Remove current class
  current.classList.remove("current");
  //   check for next slide
  if (current.nextElementSibling) {
    //   Add current to the next sibling
    current.nextElementSibling.classList.add("current");
  } else {
    //   Add current to start
    slides[0].classList.add("current");
  }
  setTimeout(200, () => current.classList.remove("current"));
};

const prevSlide = () => {
  const current = document.querySelector(".current");
  //   Remove current class
  current.classList.remove("current");
  //   check for next slide
  if (current.previousElementSibling) {
    //   Add current to the next sibling
    current.previousElementSibling.classList.add("current");
  } else {
    //   Add current to last
    slides[slides.length - 1].classList.add("current");
  }
  setTimeout(200, () => current.classList.remove("current"));
};

// Button Event
next.addEventListener("click", () => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, interval);
  }
});

prev.addEventListener("click", () => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, interval);
  }
});

// Auto Slide
if (auto) {
  // Run next slide at interval time

  slideInterval = setInterval(nextSlide, interval);
}
