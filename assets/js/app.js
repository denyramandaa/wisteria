(function () {
  $(document).ready(function() {
    function initSwiperPlans() {
      let swiper = new Swiper(".plansSwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 1.5,
        followFinger: false,
        watchOverflow: true,
        spaceBetween: 200,
        loop: true,
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
    }


    let sidebarStatus = false
    $('.burger-button').click(() => {
        sidebarStatus ? $('.sidebar').removeClass('show') : $('.sidebar').addClass('show');
        console.log('anjing')
        sidebarStatus=!sidebarStatus
    })

    initSwiperPlans();
    
  })
}(jQuery));