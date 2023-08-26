import {Swiper} from './swiper.js';

// Swiper
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: false,
  effect: 'slide',
  breakpoints: {
    768: {
      slidesPerView: 2,
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    bulletElement: 'span',
    type: 'bullets',
  },
});
