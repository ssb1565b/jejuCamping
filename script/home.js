$(function () {
    $('.accodion div').mouseenter(function () {
        $('.accodion div').stop().animate({
            'width': '21%'
        })
        $(this).stop().animate({
            'width': '32.8%'
        })
        // var idx=$(this).index()
        // $(this).eq(idx).addClass('on')
        // console.log(idx)
    })
    $('.accodion div').mouseleave(function () {
        $('.accodion div').stop().animate({
            'width': '23.8%'
        })
        // var idx=$(this).index()
        // $(this).eq(idx).removeClass('on')

    })
//멍 클릭시 detail로 이동

$('.mungtext a').click(function(e){
    e.preventDefault()
    // $('#content').load('./detail.html')
    var href=$(this).attr('href')
    $('#content').load(href)
})


    var swiper = new Swiper(".mySwiper", {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                slidesPerGroup: 2,
            },
            700: {
                slidesPerView: 3,
                slidesPerGroup: 3,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 30,
                slidesPerGroup: 4,
            },
    
        }
    })
})