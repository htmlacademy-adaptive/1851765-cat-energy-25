let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');
let buttonBefore = document.querySelector('.slider__button--before');
let buttonAfter = document.querySelector('.slider__button--after');
let sliderToggle = document.querySelector('.slider__toggle');
let imageBefore = document.querySelector('.slider-images__wrapper--before');
let imageAfter = document.querySelector('.slider-images__wrapper--after');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

buttonBefore.addEventListener('click', function () {
  imageBefore.classList.add('slider-images__state-before');
  imageBefore.style.width = '100%';
  sliderToggle.style.left = '0';

  if (document.documentElement.clientWidth < 768) {
    sliderToggle.style.left = '6px';
  }
});

buttonAfter.addEventListener('click', function () {
  imageBefore.classList.remove('slider-images__state-before');
  imageBefore.style.width = '0';
  sliderToggle.style.left = '396px';

  if (document.documentElement.clientWidth < 768) {
    sliderToggle.style.left = '44px';
  }
});

