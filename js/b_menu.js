$(function(){
  
    $(".p-submenu li a").next().hide();
      $(".p-submenu li a").on("mouseenter", function(){
        if($(this).is(":visible")){
        $(".p-submenu>li> a").next().stop().slideDown(500);
        }else{
        $(".p-submenu> li> a").next().stop().slideUp(500);
        $(this).next().stop().slideDown(500);
        } 
      });
    
      $(".p-submenu li a").on("mouseout", function(){
        if($(this).is(":visible")){
          $(".p-submenu>li>a").next().stop().slideUp(500);
        }else{
          $(".p-submenu>li>a").next().stop().slideDown(500);
        $(this).next().stop().slideUp(500);
        } 
       });
    
    
      // $(".p-submenu").on("mouseenter", function(){
      //   $(".p-submenu li a").next().stop().slideDown(500)
      // });
      // $(".p-submenu").on("mouseleave", function(){
      //   $(".p-submenu li a").next().stop().slideUp(500)

      // });
    });
  