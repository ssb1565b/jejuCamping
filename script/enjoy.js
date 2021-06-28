var ww = $(window).width();

        function initSwiper() {
          mySwiper = new Swiper(".platlist_slide", {
            slidesPerView: 1,
            spaceBetween: 10,
            simulateTouch: true,
            loop: true,
          });
        }

        if (ww < 1263) {
          initSwiper();
        } else if (ww > 1262) {

        }
        $(window).on('resize', function () {
          ww = $(window).width();
          if (ww < 1263) {
            initSwiper();
            console.log(ww)
          }else if(ww > 1264 && ww < 1400){
            document.location.reload(1000)
          }else{

          }
        });




var swiper2 = new Swiper(".enjoySwiper2", {
    // mousewheel: true,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });