const nav = document.querySelector('.main-nav'),
      navBlock = nav.querySelector('.main-nav__nav-block'),
      navOpen = nav.querySelector('.main-nav__nav-button--open'),
      navClose = nav.querySelector('.main-nav__nav-button--close');

// Мобильное меню
navOpen.onclick = () => navBlock.classList.add('main-nav__nav-block--open');
navClose.onclick = () => navBlock.classList.remove('main-nav__nav-block--open');
