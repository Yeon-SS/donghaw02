$(function(){

  $("#slick01").slick({
    // centerMode : true,  // 양 옆으로 살짝씩 보이게 노출
    slide : "li",  // 슬라이드 대상 선정
    infinite : true,  // 무한대
    autoplay : true,  // 자동으로
    autoplaySpeed : 2000,  // 재생 시간
    slidesToShow : 1,  // 보이는거
    slidesToScroll : 1,  // 움직이는거
    speed : 2000,
    pausOnHover : true,  // 올렸을 때 멈춤

});    
} );

$( document ).ready( function() {
    $( '.slider' ).slick( {
      autoplay: true,
      infinite: true,
      autoplaySpeed: 2000,
      dots : true,
      slidesToShow: 6,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            arrows: true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            arrows: true,
          }
        }
      ]
    } );
  } );




