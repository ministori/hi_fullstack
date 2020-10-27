/**
 * fade
 */

// 변수, 함수 선언
var currentIndex;
var nextIndex;
var prevIndex;

var intervalID;

// 자동 재생
function visualPlay(){
    
    intervalID = setInterval(function(){

        rightFade();

    }, 4000);

}

// right arrow 클릭시 페이드
// 순서가 뒤쪽으로 변경 => 인덱스 번호가 증가
function rightFade(){

    if(nextIndex > 2){
        nextIndex = 0;
    }

    $('.main-image').eq(currentIndex).removeClass('active');
    $('.main-image').eq(nextIndex).addClass('active');

    prevIndex = currentIndex;
    currentIndex = nextIndex;
    nextIndex++;

}

function scale(currentScroll, inputMin, inputMax, outputMin, outputMax){
    return (currentScroll - inputMin) * (outputMax - outputMin) / (inputMax - inputMin) + outputMin;
}

// 이벤트, 기능 실행
$(function(){

    prevIndex = 2;
    currentIndex = 0;
    nextIndex = 1;

    visualPlay();

    var last = 0;
    $(document).on('scroll', function(){

        //console.log( $(this).scrollTop() );

        var st = $(this).scrollTop();
        if( st > last ){
            // down
            $('.header').addClass('scroll');
        } else {
            // up
            $('.header').removeClass('scroll');
        }

        if( st > 10 ){
            $('.header').addClass('bg-white');
        } else {
            $('.header').removeClass('bg-white');
        }

        last = st;

        // 3300 ~ 4400
        if( $(this).scrollTop() >= 3300 && $(this).scrollTop() <= 4400 ){

            var scrollValue = scale($(this).scrollTop(), 3300, 4400, 0, 50);
            //console.log( scale($(this).scrollTop(), 3300, 4400, 0, 50) );
            $('.tablet-image').css({
                transform:'translateX(' + (-100 + scrollValue) + '%)'
            });
            
        }

    });

    $('.gallery-image-item').on('mouseenter', function(){
        $(this).addClass('scale');
    });

    $('.gallery-image-item').on('mouseleave', function(){
        $(this).removeClass('scale');
    });

});