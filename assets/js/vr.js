(function () {
  $(document).ready(function() {
    function initSwiperVR() {
      let swiper = new Swiper(".vrSwiper", {
        effect: "slide",
        speed: 500,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 1,
        followFinger: false,
        loop: true,
        navigation: {
          nextEl: ".vrSwiper--next",
          prevEl: ".vrSwiper--prev",
        },
      });
    }

    initSwiperVR();
  })
}(jQuery));