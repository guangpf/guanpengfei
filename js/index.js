$(function(){
    $(".pointer_open").click(function(){
        $(".small_nav").slideDown(1000);
        //$(".top_nav").fadeOut(1000);
        //$(".nav").fadeOut(1000);
        //$(".banner").fadeOut(1000);
        //$(".list").fadeOut(1000);
        //$(".footer").fadeOut(1000);
    });
    $(".pointer_close").click(function(){
        $(".small_nav").slideUp(1000);
        //$(".top_nav").fadeIn(1000);
        //$(".nav").fadeIn(500);
        //$(".banner").fadeIn(500);
        //$(".list").fadeIn(500);
        //$(".footer").fadeIn(500);
    });

        if($(window).width()<=800){
            $(".inner-list-item-title").click(function(){
                $(this).next("ul").slideToggle();
            })
        }else if($(window).width()>800){
            $(".inner-list-item-title").click(function(){
               return false;
            })
        }

    var currentNum=0;
    var nextNum=0;
    var currentTime=0;
    var flag=true;
    function move(){
        nextNum++;
        if(nextNum==3){
            nextNum=0;
            flag=false;
        }
        $(".banner_list").eq(currentNum).animate({width:"80%",height:"80%"}).css("zIndex",0);
        $(".banner_list").eq(nextNum).animate({left:0},function(){
            $(".banner_list").eq(currentNum).css({
                left:"100%",width:"100%",height:"100%"
            });
            currentNum=nextNum;
            currentTime=0;
            flag=true;
        }).css("zIndex",1);
    }
    var  t1=setInterval(move,3000);
    var  t2=setInterval(move1,50);
    function move1(){
        currentTime+=50;
        var  scale=currentTime/3000;
        if(scale>1){
            scale=1;
        }
        $(".progress").eq(currentNum).css({width:scale*100+"%"});
        if(flag==false){
            $(".progress").css("width",0);
        }
    }


    $(window).focus(function(){
        t1=setInterval(move,3000);
        t2=setInterval(move1,50)
    })
    $(window).blur(function(){
        clearInterval(t1);
        clearInterval(t2);
    })


    $(".btn_list").click(function(){
        nextNum=$(this).index(".btn_list");
        stop();
    });
    $(".left_button").click(function(){
        nextNum--;
        if(nextNum==-1){
            nextNum=2;
        }
        stop();
    })
    $(".right_button").click(function(){
        nextNum++;
        if(nextNum==3){
            nextNum=0;
        }
        stop();
    })
    function stop(){
        /*暂停计时器*/
        clearInterval(t1);
        clearInterval(t2);
        /*按钮变化*/
        $(".btn_list").find(".progress").css("width",0);
        $(".btn_list").eq(nextNum).find(".progress").css("width","100%");
        /* 轮播图变化 */
        if(nextNum>currentNum){
            $(".banner_list").eq(currentNum).animate({width:"80%",height:"80%"}).css("zIndex",0);
            $(".banner_list").eq(nextNum).animate({left:0},function(){
                $(".banner_list").eq(currentNum).css({
                    left:"100%",width:"100%",height:"100%"
                })
                currentNum=nextNum;
            }).css("zIndex",1);
        }else{
            $(".banner_list").eq(currentNum).animate({left:"100%"}).css("zIndex",1);
            $(".banner_list").eq(nextNum).css({
                width:"80%",height:"80%",left:0
            }).animate({width:"100%",height:"100%"},function(){
                currentNum=nextNum;
            })

        }


    }
})