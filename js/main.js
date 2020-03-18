var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 10,
      // init: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }
  });

// const mainWrapper = document.querySelector('.main-wrapper')
// const mainWrapperWidth = mainWrapper.getBoundingClientRect().width
// const bodyWidth = document.body.getBoundingClientRect().width
// 
// mainWrapper.style.marginLeft = `${(bodyWidth - mainWrapperWidth)/2}px`
// mainWrapper.style.marginLeft = `${(bodyWidth - mainWrapperWidth)/2}px`

