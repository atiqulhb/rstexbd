var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 10,
      // init: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
       autoplay: {
        delay: 2500,
        disableOnInteraction: true,
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
 
var header = document.querySelector('header')
var mobileNav = document.querySelector(".mobile-nav");

  
setTimeout(function (){
  var headerHeight = header.getBoundingClientRect().height
  mobileNav.style.height = `calc(100vh - ${headerHeight}px)`
  console.log(headerHeight)
}, 3000)

console.log(header.clientHeight)
console.log(header.offsetHeight)

function toggleMobileNav() {
  if (mobileNav.className === "mobile-nav") {
    mobileNav.className += " mobileNavShown";
  } else {
    mobileNav.className = "mobile-nav";
  }
}

document.querySelector('#menu').addEventListener('click', toggleMobileNav);