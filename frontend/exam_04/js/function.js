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
    $('.header-02 .gnb-list-link').on('mouseenter', function(){
        $(this).animate({
            color:'#e23084'
        }, 1000, 'easeInQuad');
    });

    $('.header-02 .gnb-list-link').on('mouseleave', function(){
        $(this).animate({
            color:'#333'
        }, 1000, 'easeInQuad');
    });

});