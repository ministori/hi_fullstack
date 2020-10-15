// $(document).ready(function(){});
$(function(){

    // header-01
    $('.header-01 .gnb-list-link').on('mouseenter', function(){
        // 마우스가 over 되었을 때 over된 메뉴 대상외의 나머지 메뉴중
        // 효과가 적용되어 있으면 제거(active 클래스를 제거)
        // jQuery this : $(this) - 사용된 API의 주체가되는 객체 => 이벤트가 발생한 대상
        // 이벤트가 발생된 객체를 기준으로 동작이 실행되는 객체를 탐색해야함

        var $activeElement = $(this).parent().siblings().children();

        $activeElement.each(function(i){
            
            // hasClass('active') : active Class를 가지고 있는지 체크, true/false
            if( $activeElement.eq(i).hasClass('active') ){

                $activeElement.eq(i).addClass('current').removeClass('active');

            }

        });

    });

    $('.header-01 .gnb-list-link').on('mouseleave', function(){

        var $activeElement = $(this).parent().siblings().children();

        $activeElement.each(function(i){

            if( $activeElement.eq(i).hasClass('current') ){

                $activeElement.eq(i).addClass('active').removeClass('current');
    
            }

        });

    });

    // header-02
    var $currentPage = $('.header-02 .gnb-list-link');
    $currentPage.each(function(i){
        if( $($currentPage).eq(i).hasClass('active') ){

            $($currentPage).eq(i).stop().animate({
                color:'#e23084'
            }, 1000, 'easeInQuad');
    
            $($currentPage).eq(i).children().stop().animate({
                width:'100%'
            }, 1000, 'easeInQuad');

        }
    });


    $('.header-02 .gnb-list-link').on('mouseenter', function(){
        $(this).stop().animate({
            color:'#e23084'
        }, 1000, 'easeInQuad');

        $(this).children().stop().animate({
            width:'100%'
        }, 1000, 'easeInQuad');

        var $activeElement = $(this).parent().siblings().children();

        $activeElement.each(function(i){
            
            // hasClass('active') : active Class를 가지고 있는지 체크, true/false
            if( $activeElement.eq(i).hasClass('active') ){

                $(this).stop().animate({
                    color:'#333'
                }, 1000, 'easeInQuad');
        
                $(this).children().stop().animate({
                    width:'0'
                }, 1000, 'easeInQuad');

            }

        });

    });

    $('.header-02 .gnb-list-link').on('mouseleave', function(){
        $(this).stop().animate({
            color:'#333'
        }, 1000, 'easeInQuad');

        $(this).children().stop().animate({
            width:'0'
        }, 1000, 'easeInQuad');

        var $activeElement = $(this).parent().siblings().children();

        $activeElement.each(function(i){
            
            // hasClass('active') : active Class를 가지고 있는지 체크, true/false
            if( $activeElement.eq(i).hasClass('active') ){

                $(this).stop().animate({
                    color:'#e23084'
                }, 1000, 'easeInQuad');
        
                $(this).children().stop().animate({
                    width:'100%'
                }, 1000, 'easeInQuad');

            }

        });
    });


    // header-03
    $('.header-03 .gnb-list-link').on('mouseenter', function(){

        console.log($(this).width());
        console.log($(this).position());

        $('.header-03 .gnb .underbar').stop().animate({
            width: $(this).width(),
            left: $(this).position().left
        }, 600, 'easeOutExpo');

    });

    // header-04
    $('.header-04 .gnb-list-link').on('mouseenter', function(){

        $('.header-04 .gnb .underbar').stop().animate({
            width: $(this).width(),
            left: $(this).position().left
        }, 600, 'easeOutExpo');

        $('.header-04, .gnb').addClass('open');

    });

    $('.header-04 .gnb').on('mouseleave', function(){

        $('.header-04, .gnb').removeClass('open');

    });

    $('.header-04 .gnb-2depth-link').on('mouseenter', function(){

        var $width = $(this).parents('.gnb-2depth-list').prev().width();
        var $left = $(this).parents('.gnb-2depth-list').prev().position().left;

        $('.header-04 .gnb .underbar').stop().animate({
            width: $width,
            left: $left
        }, 600, 'easeOutExpo');

    });

    // header-05
    $('.header-05 .gnb-list-link').on('mouseenter', function(){

        $('.header-05 .gnb .underbar').stop().animate({
            width: $(this).width(),
            left: $(this).position().left
        }, 600, 'easeOutExpo');

        $('.header-05, .gnb').addClass('open');

    });

    $('.header-05 .gnb').on('mouseleave', function(){

        $('.header-05, .gnb').removeClass('open');

    });

    $('.header-05 .gnb-2depth-link').on('mouseenter', function(){

        var $width = $(this).parents('.gnb-2depth-list').prev().width();
        var $left = $(this).parents('.gnb-2depth-list').prev().position().left;

        $('.header-05 .gnb .underbar').stop().animate({
            width: $width,
            left: $left
        }, 600, 'easeOutExpo');

    });



    // accordion-01
    $('.acc-list-01 .acc-list-title').on('click', function(){

        $('.acc-list-01 .acc-list-desc').removeClass('active');

        $(this).next().addClass('active');

    });

    // accordion-02
    $('.acc-list-02 .acc-list-title').on('click', function(){

        $('.acc-list-02 .acc-list-title').removeClass('active');

        $(this).addClass('active');

        $('.acc-list-02 .acc-list-desc').removeClass('active');

        $(this).next().addClass('active');

    });

    // tab
    $('.tab-title').on('click', function(){

        $('.tab-title').removeClass('active');

        $(this).addClass('active');

        $('.tab-title').next().removeClass('active');

        $(this).next().addClass('active');

    });

    
    
    // visual effect

    // 01 fade 효과

    var visualIndex = 0;
    //$('.visual').on('click', function(){

    $('.visual-01 .image-number-item').eq(visualIndex).siblings().removeClass('active');
    $('.visual-01 .image-number-item').eq(visualIndex).addClass('active');

    visualIndex++;

    setInterval(function(){

        if(visualIndex == 3){
            visualIndex = 0;
        }

        $('.visual-01 .visual-image').eq(visualIndex).siblings().removeClass('active');
        // $('.visual-image').removeClass('active');
        $('.visual-01 .visual-image').eq(visualIndex).addClass('active');

        $('.visual-01 .image-number-item').eq(visualIndex).siblings().removeClass('active');       
        $('.visual-01 .image-number-item').eq(visualIndex).addClass('active');       

        visualIndex++;

    }, 5000);
    //});

    // 02 sliding 효과

    slidingIndex = 1;
    setInterval(function(){

        if(slidingIndex == 3){
            slidingIndex = 0;
        }

        $('.visual-02 .visual-image').removeClass('next current prev');

        if(slidingIndex - 1 == -1){
            $('.visual-02 .visual-image').eq(2).addClass('next');
        } else {
            $('.visual-02 .visual-image').eq(slidingIndex - 1).addClass('next');
        }

        $('.visual-02 .visual-image').eq(slidingIndex).addClass('current');
        
        if( slidingIndex + 1 == 3 ){
            $('.visual-02 .visual-image').eq(0).addClass('prev');
        } else {
            $('.visual-02 .visual-image').eq(slidingIndex + 1).addClass('prev');
        }

        slidingIndex++;

    }, 2000);

    var currentIndex = 1;

    $('.visual-03 .visual-image').css({
        left:'100%'
    });

    $('.visual-03 .visual-image').eq(0).css({
        left:0
    });

    setInterval(function(){


        if(currentIndex == 3){
            currentIndex = 0;
        }

        if(currentIndex-1 == -1){
            $('.visual-03 .visual-image').eq(2).stop().animate({
                left:'-100%'
            });
        } else {
            $('.visual-03 .visual-image').eq(currentIndex-1).stop().animate({
                left:'-100%'
            });
        }        

        $('.visual-03 .visual-image').eq(currentIndex).css({
            left:'100%'
        }).stop().animate({
            left:0
        });

        currentIndex++;

    }, 2000);



});

// 요소 탐색
// $('.gnb-list-link').parent() => .gnb-list-item
// $('.gnb-list-link').parents() => .gnb-list-item, .gnb-list, .gnb, .container, .header-01, body, html
// $('.gnb-list-link').parents('.gnb-list') => .gnb-list