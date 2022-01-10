(function () {
  $(document).ready(function() {
    function initSwiperJumbroton() {
      let swiper = new Swiper(".jumbotronSwiper", {
        effect: "fade",
        speed: 1000,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 1,
        followFinger: false,
        loop: true,
        navigation: {
          nextEl: ".jumbotronSwiper--next"
        },
        breakpoints: {
          // 640: {
          //   effect: "slides",
          //   slidesPerView: 1.2,
          //   spaceBetween: 20,
          //   loop: false,
          // }
        }
      });
    }

    function initSwiperPlans() {
      let swiperPlans = new Swiper(".plansSwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 1.5,
        followFinger: false,
        watchOverflow: true,
        spaceBetween: 200,
        loop: false,
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: false
        },
        navigation: {
          nextEl: ".plansSwiper--next",
          prevEl: ".plansSwiper--prev",
        },
        breakpoints: {
          // 640: {
          //   effect: "slides",
          //   slidesPerView: 1.2,
          //   spaceBetween: 20,
          //   loop: false,
          // }
        }
      });

      let swiperPlansThumb = new Swiper(".plansSwiperThumbnail", {
        grabCursor: true,
        slidesPerView: 1,
        followFinger: false,
        watchOverflow: true,
        loop: true,
        allowTouchMove: false,
        noSwiping: true
      });
      let swiperPlansDetail = new Swiper(".plansSwiperDetail", {
        grabCursor: true,
        slidesPerView: 1,
        followFinger: false,
        watchOverflow: true,
        loop: true,
        allowTouchMove: false,
        noSwiping: true
      });
      // init slideTo
      swiperPlansThumb.slideTo(swiperPlans.activeIndex)
      swiperPlansDetail.slideTo(swiperPlans.activeIndex)

      swiperPlans.on('slideChangeTransitionStart', function(){
        swiperPlansThumb.slideTo(swiperPlans.activeIndex)
        swiperPlansDetail.slideTo(swiperPlans.activeIndex)
      });
    }

    let sidebarStatus = false
    $('.burger-button').click(() => {
        sidebarStatus ? $('.sidebar').removeClass('show') : $('.sidebar').addClass('show');
        console.log('anjing')
        sidebarStatus=!sidebarStatus
    })

    initSwiperPlans();
    initSwiperJumbroton();
  })
}(jQuery));