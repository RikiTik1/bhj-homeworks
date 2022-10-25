const slider = document.getElementsByClassName("slider__item");
const arraySlider = Array.from(slider);
const sliderNext = document.querySelector(".slider__arrow_next");
const sliderPrev = document.querySelector(".slider__arrow_prev");

let sliderNumber = 0;

sliderNext.onclick = function(){
  sliderNumber++;
  changeSlide();
};

sliderPrev.onclick = function(){
  sliderNumber--;
  changeSlide();
};

function changeSlide () {
  if (sliderNumber >= arraySlider.length) {
    sliderNumber = 0;
  } else if (sliderNumber < 0) {
    sliderNumber = arraySlider.length - 1;
  };

  document.getElementsByClassName("slider__item_active")[0].classList.remove("slider__item_active");
  arraySlider[sliderNumber].classList.add("slider__item_active");
};