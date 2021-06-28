$(function(){

    //페이지 애로우 클릭하면--------------------------------------------------------------
    $('.page li a').click(function(e){
    e.preventDefault()
    
    //같은부모에 속한 디테일 슬라이드 토글
    $(this).parent('li').find('.detail').stop().slideToggle()

    //애로우 회전 토글
    $(this).toggleClass('active')

    })

    //페이지 탭전환----------------------------------------------------------------------
    $('.tabMenu li a').click(function(e){
        e.preventDefault()

        var href=$(this).attr('href')
        $('ul.page').hide()
        $(href).show()

        //페이지 숫자 상태표시
        var pageNum=$(this).hasClass('pageNum')
        if(pageNum){
            $('.tabMenu a.pageNum').removeClass('on')
            $(this).addClass('on')
        }

    })

    //prev, next클릭했을 때 first, two href값과 같은 페이지숫자a에 애드클래스
    $('.tabMenu li:nth-child(4) a').click(function(){
        $('.tabMenu a.pageNum').removeClass('on')
        $(this).parent('li').prev().find('a').addClass('on')
    })
    $('.tabMenu li:nth-child(1) a').click(function(){
        $('.tabMenu a.pageNum').removeClass('on')
        $(this).parent('li').next().find('a').addClass('on')
    })



})