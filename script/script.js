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
   
})
