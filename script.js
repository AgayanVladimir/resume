let count = 0;
const sliderItems = document.querySelectorAll(".skills__slider_line img");
const sliderLength = sliderItems.length;
const next = document.querySelector(".buttons__next");
const prev = document.querySelector(".buttons__prev");

function rollNextSlide() {
  sliderItems[count].classList.remove("active");
  if (count >= sliderLength - 1) {
    count = 0;
  } else {
    count++;
  }
  sliderItems[count].classList.add("active");
}

function rollPrevSlide() {
  sliderItems[count].classList.remove("active");
  if (count > 0) {
    count--;
  } else {
    count = sliderLength - 1;
  }
  sliderItems[count].classList.add("active");
}

function pressKey(e) {
  e = e || window.event;

  if (e.keyCode == "37") {
    rollPrevSlide();
  } else if (e.keyCode == "39") {
    rollNextSlide();
  }
}

next.addEventListener("click", rollNextSlide);
prev.addEventListener("click", rollPrevSlide);
document.addEventListener("keydown", pressKey);
