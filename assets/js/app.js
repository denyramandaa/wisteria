(function () {
  $(document).ready(function() {
    console.log('run')
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

    function initSwiperLocation() {
      let swiper = new Swiper(".locationSwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 1.2,
        followFinger: false,
        watchOverflow: false,
        spaceBetween: 20,
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 1,
          slideShadows: true
        },
        loop: false,
        navigation: {
          nextEl: ".locationSwiper--next",
          prevEl: ".locationSwiper--prev",
        },
        breakpoints: {
          768: {
            coverflowEffect: {
              rotate: 0,
              stretch: 0,
              depth: 300,
              modifier: 1,
              slideShadows: false
            },
            centeredSlides: true,
            slidesPerView: 1.5,
            loop: true,
            spaceBetween: 200,
          }
        }
      });
    }


    function initSwiperFacilities() {
      let swiperFacilities = new Swiper(".facilitiesSwiper", {
        effect: "slide",
        grabCursor: true,
        centeredSlides: false,
        slidesPerView: 1.5,
        followFinger: false,
        watchOverflow: true,
        spaceBetween: 20,
        loop: false,
      });
    }
    
    function initSwiperPlans() {
      let swiperPlans = new Swiper(".plansSwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: false,
        slidesPerView: 1.15,
        followFinger: false,
        watchOverflow: false,
        spaceBetween: 15,
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 1,
          slideShadows: true
        },
        loop: false,
        navigation: {
          nextEl: ".plansSwiper--next",
          prevEl: ".plansSwiper--prev",
        },
        breakpoints: {
          768: {
            coverflowEffect: {
              rotate: 0,
              stretch: 0,
              depth: 300,
              modifier: 1,
              slideShadows: false
            },
            centeredSlides: true,
            slidesPerView: 1.5,
            loop: true,
            spaceBetween: 200,
          }
        }
      });

      let swiperPlansThumb = new Swiper(".plansSwiperThumbnail", {
        grabCursor: true,
        slidesPerView: 1,
        followFinger: false,
        watchOverflow: true,
        loop: false,
        allowTouchMove: false,
        noSwiping: true
      });
      let swiperPlansDetail = new Swiper(".plansSwiperDetail", {
        grabCursor: true,
        slidesPerView: 1,
        followFinger: false,
        watchOverflow: true,
        loop: false,
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
        sidebarStatus=!sidebarStatus
    })

    $('.background-thumb-ratio').click(function() {
      const idx = parseInt($(this).parents('.swiper-slide').attr('data-idx'))
      const img = $(this).attr("data-img")
      const elm = $(this).parents('.plans').find(".plansSwiper .swiper-wrapper .swiper-slide").eq(idx)
      elm.find('.background-img-ratio').css('background-image','url('+ img +')')
    })

    initSwiperPlans();
    initSwiperJumbroton();
    initSwiperLocation();
    initSwiperFacilities();
  })
}(jQuery));