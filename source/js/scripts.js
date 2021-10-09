'use strict';

const navBlock = document.querySelector('.main-nav__nav-block'),
      navOpen = document.querySelector('.main-nav__nav-button--open'),
      navClose = document.querySelector('.main-nav__nav-button--close');

navOpen.addEventListener('click', function() {
  if (navBlock.classList.contains('main-nav__nav-block')) {
    navBlock.classList.add('main-nav__nav-block--open')
  }
});

navClose.addEventListener('click', function() {
  if(navBlock.classList.contains('main-nav__nav-block--open')) {
    navBlock.classList.remove('main-nav__nav-block--open')
  }
});
