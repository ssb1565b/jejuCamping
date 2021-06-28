$(function(){
    
    $('#box').empty()
   
   //메뉴클릭시 섹션에 해당문서 로드
   $('header li a').click(function(e){
       e.preventDefault()
       $('header li a').removeClass('on')
       $(this).addClass('on')
       var href=$(this).attr('href')
       $('#content').load(href)
   })


   $('header a.logo2').click(function(e){
    e.preventDefault()
    $('header li a').removeClass('on')
    $('header li:first a').addClass('on')
    var href=$(this).attr('href')
    $('#content').load(href)
})
   // menu
   var sw = 1
   $('.bar').click(function (e) {
       e.preventDefault()
       if (sw == 1) { 
           $('ul.mainmenu').stop().slideDown()
           $('.bar img').attr({'src': 'img/main1/close.png'})
           sw=0
           // alert(sw)
       }else{ 
           $('ul.mainmenu').stop().slideUp()
           $('.bar img').attr({'src': 'img/main1/bar.png'})
           sw=1
       }
   });
   
   $(window).resize(function () {
       var wid = $(this).width()
       if (wid >= 767) {
           $('ul.mainmenu').css({'display': 'flex'})
       } else {
           $('ul.mainmenu').css({'display': 'none'})
           $('.bar img').attr({'src': 'img/main1/bar.png'})
           sw = !sw
       }
   });

   
   //intro
   window.onload = function() { 
    setTimeout(function(){
           $('.stars1 .light').delay(3000).show( function(){ 
               $('.stars2 .light').show( function(){ 
                   $('.stars3 .light2').show( function(){ 
                           // location="./home.html"
                       $('.pictures >*').fadeIn(3000, function(){ 

                           $('#intro').hide()
                           $('#box').load('#wrap')
                           $('#wrap').show()
                           $('#content').load("./home.html")
                       })
                   })
               })
           })

      
    })
   }
  
})
