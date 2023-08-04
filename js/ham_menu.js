
    $(function(){
        function slideMenu(){
            const activeState = $(".menu-list").hasClass("active");
            $(".menu-list").animate({
                left : activeState ? "0%" : "-100%"
                // 삼항연산자 = 조건식 ? 참 : 거짓
                // == activeState 상태를 가지고 있으면 left : 0%.
                // == activeState 상태를 가지고 있지 않으면 left : -100%.
            }, 400);
        }

        $("#menu-wrapper").on("click", function(){
            $("#hamburger-menu").toggleClass("open");
            $(".menu-list").toggleClass("active");
            slideMenu();
        });

        $(".menu-list > li").click(function(){
            if($(this).next().is(":visible")){
                $(this).next().stop().slideUp(500);
                $(this).removeClass("active-tab");
                $(this).find("a").removeClass("active");
            } else {
                $(".menu-submenu").stop().slideUp(500);
                $(this).next().stop().slideDown(500);
                $(".menu-list > li").removeClass("active-tab");
                $(this).addClass("active-tab");
                $(".menu-list > li > a").removeClass("active");
                $(this).find("a").addClass("active");
            }
        });

        $(function(){
            function slideMenu(){
                const activeState = $("s-sub").hasClass("active");
                $("s-sub").animate({
                    left : activeState ? "0%" : "-100%"
                    // 삼항연산자 = 조건식 ? 참 : 거짓
                    // == activeState 상태를 가지고 있으면 left : 0%.
                    // == activeState 상태를 가지고 있지 않으면 left : -100%.
                }, 400);
            }
    
            $("s-sub").on("click", function(){
                $("menu-s-sub").toggleClass("open");
                $("menu-s-sub").toggleClass("active");
                slideMenu();
            });
            
            $(".menu-s-sub").stop().hide();
            
            $(".s-sub").click(function(){
 
                $(this).toggleClass('active-tab')
                if($(this).next().is(":visible")){
                    $(this).next().stop().slideUp(500);
                    $(this).find("a").removeClass("active");
                } else {
                    $(".menu-s-sub").stop().slideUp(500);
                    $(this).next().stop().slideDown(500);
                    $(".s-sub a").removeClass("active-tab");
                    $(this).addClass("active-tab");
                    $(".s-sub a").removeClass("active");
                    $(this).find("a").addClass("active");
                }
            });          
        });
    });
     
   
    $(function(){    
        
          $(".p-submenu").on("mouseenter", function(){
            $(".p-submenu li a").next().stop().slideDown(500)
          });
          $(".p-submenu").on("mouseleave", function(){
            $(".p-submenu li a").next().stop().slideUp(500)
    
          });
        });