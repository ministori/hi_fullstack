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
    
});