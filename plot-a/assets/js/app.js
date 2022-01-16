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
            slidesPerView: 1.3,
            loop: true,
            spaceBetween: 90,
          },
          991 : {
            coverflowEffect: {
              rotate: 0,
              stretch: 0,
              depth: 300,
              modifier: 1,
              slideShadows: false
            },
            centeredSlides: true,
            spaceBetween: 200,
            loop: true,
            slidesPerView: 1.5,
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
        loop: true,
        navigation: {
          nextEl: ".facilitiesSwiper--next"
        },
      });
    }

    function initSwiperTestimony() {
      let swiperTestimony = new Swiper(".testimonySwiper", {
        effect: "slide",
        grabCursor: true,
        centeredSlides: false,
        slidesPerView: 1,
        followFinger: false,
        watchOverflow: true,
        spaceBetween: 20,
        loop: false,
        pagination: {
          el: ".swiper-testimony-pag",
        },
        breakpoints: {
          768: {
            slidesPerView: 3,
            spaceBetween: 40
          }
        }
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
            slidesPerView: 1.3,
            loop: false,
            spaceBetween: 90,
          },
          991 : {
            coverflowEffect: {
              rotate: 0,
              stretch: 0,
              depth: 300,
              modifier: 1,
              slideShadows: false
            },
            centeredSlides: true,
            spaceBetween: 200,
            loop: false,
            slidesPerView: 1.5,
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
      $(this).addClass('active').parents('.thumb-img').siblings().find('.background-thumb-ratio').removeClass('active')
      elm.find('.background-img-ratio').css('background-image','url('+ img +')')
    })

    $('.close-modal').click(function() {
      $('.download-brochure-panel').css('display', 'none');
    });
    $('.open-modal').click(function() {
      $('.download-brochure-panel').css('display', 'flex');
    });

    initSwiperPlans();
    initSwiperJumbroton();
    initSwiperLocation();
    initSwiperFacilities();
    initSwiperTestimony();
  })
}(jQuery));