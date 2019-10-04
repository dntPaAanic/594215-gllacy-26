var sliderToggle = document.querySelectorAll('.slider__toggle');
var slides = document.querySelectorAll('.slider__item');
var activeSlide = document.querySelector('.slider__item--active');
var activeToggle = document.querySelector('.slider__toggle--active');

var toggleHandler = function (toggle, slide) {
  toggle.addEventListener('click', function () {
    if (!toggle.classList.contains('slider__toggle--active')) {
      activeToggle.classList.remove('slider__toggle--active');
      toggle.classList.add('slider__toggle--active');
      activeSlide.classList.remove('slider__item--active');
      slide.classList.add('slider__item--active');
      activeToggle = toggle;
      activeSlide = slide;
    }
  });
};

for (var i = 0; i < sliderToggle.length; i++) {
  toggleHandler(sliderToggle[i], slides[i]);
}
