$(function(){
    // $(".video").colorbox({iframe:true, innerWidth:"85%", innerHeight:"65%"});

    $("#slick01").slick({
        // centerMode : true,  // 양 옆으로 살짝씩 보이게 노출
        slide : "li",  // 슬라이드 대상 선정
        infinite : true,  // 무한대
        autoplay : true,  // 자동으로
        autoplaySpeed : 2000,  // 재생 시간
        slidesToShow : 1,  // 보이는거
        slidesToScroll : 1,  // 움직이는거
        speed : 2000,
        // arrow : false,
        pausOnHover : true,  // 올렸을 때 멈춤
        // dots : true
        // responsive : [
        //     {
        //         // breakpoint : 641,
        //         settings : {
        //             slidesToShow : 1,
        //             slidesToScroll : 1
        //         }
        //     }
        // ]
    });    
});