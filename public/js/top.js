$(window).on('scroll',function(){
    var st = $(document).scrollTop();
    if( st>0 ){
        $('.bottom_back_top_top').fadeIn(300);
    }else{
        $('.bottom_back_top_top').fadeOut(300);
    }  
});
$(".bottom_back_top_top").click(function(){
    if(scroll=="off"){
        return;
    }
    $("html,body").animate({scrollTop: 0}, 600);
});