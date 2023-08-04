$(function(){

      const  swiper=new Swiper('.swiper-container', { 
        slidesPerView: 6,
        loop: true,
        spaceBetween: 0,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        autoplay: 2000, 
        autoplayDisableOnInteraction: false,
        breakpoints: {  
            1024: {
                slidesPerView: 4,
                spaceBetween: 0,
                loop: true,
                autoplay: 2000,
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                },
             900: {
                    slidesPerView: 4,
                    spaceBetween: 0,
                    loop: true,
                    autoplay: 2000,
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                },
            768: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                    loop: true,
                    autoplay: 2000,
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                },
                420: {   
                    slidesPerView: 2,       
                    spaceBetween: 0,     
                    loop: true,
                    autoplay: 2000,
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                 } 
            }
      });	 
      });