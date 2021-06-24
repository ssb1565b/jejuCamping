$(function(){
    
    $('#box').empty()
   
    //#wrap안에 #main로드, 섹션안에 home.html로드
   $('#intro a').click(function(e){
       e.preventDefault()
   
       $('#intro').fadeOut(1000)
       $('#box').load('#wrap')
       $('#wrap').show()
   
       $('#content').load("./home.html")
   
   }) 
   
   //메뉴클릭시 섹션에 해당문서 로드
   $('header li a').click(function(e){
       e.preventDefault()
   
       var href=$(this).attr('href')
       $('#content').load(href)
   })

   // menu


   var sw = 1
   $('.bar').click(function () {
       if (sw == 1) { 
           $('ul.mainmenu').stop().slideDown()
           $('.bar img').attr({'src': 'img/main1/close.png'})
        
           // alert(sw)
       } else{ 
           $('ul.mainmenu').stop().slideUp()
           $('.bar img').attr({'src': 'img/main1/bar.png'})
           
       }
   })

   $(window).resize(function () {
       var wid = $(this).width()
       if (wid >= 1280) {
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
         $('.girl, .guitar').delay(3000).fadeIn(800, function(){ 
            $('.boy').fadeIn(500, function(){
                $('.bear').fadeIn(500, function(){
                    $('.chair').fadeIn(450, function(){
                        $('.record').fadeIn(450, function(){
                            $('.fire').fadeIn(300, function(){
                                $('.radial1').fadeIn(200, function(){
                                    $('.smore').fadeIn(200, function(){
                                        $('.sausage').fadeIn(200, function(){
                                            $('.bearBox').fadeIn(300, function(){
                                                $('.light').fadeIn(300, function(){
                                                    $('.radial2').fadeIn(100, function(){
                                                        $('.dog').fadeIn(300, function(){
                                                            $('.btnHome').delay(500).fadeIn(3000)
                                                        })
                                                    })
                                                })
                                            })                        
                                        })

                                    })
        
                                })
    
                            })
                        })                    
                    })

                })
            })
         })
     })
    }
   
})
