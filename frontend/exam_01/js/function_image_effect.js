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

    }, 5000);
}

// 일시 정지
function visualPause(intervalID){
    clearInterval(intervalID);
    $('.play-button').removeClass('pause').addClass('play');
}

// right arrow 클릭시 페이드
// 순서가 뒤쪽으로 변경 => 인덱스 번호가 증가
function rightFade(){

    if(nextIndex > 2){
        nextIndex = 0;
    }

    //$('.visual-01 .visual-image').eq(currentIndex).siblings().removeClass('active');
    // $('.visual-image').removeClass('active');

    $('.fade-container').eq(currentIndex).removeClass('active');
    $('.fade-container').eq(nextIndex).addClass('active');

    prevIndex = currentIndex;
    currentIndex = nextIndex;
    nextIndex++;

}


// 이벤트, 기능 실행
$(function(){

    prevIndex = 2;
    currentIndex = 0;
    nextIndex = 1;

    visualPlay();

    $('.contact-input').on('focusin', function(){
        $(this).parent().addClass('active');
    });

    $('.contact-input').on('focusout', function(){
        $(this).parent().removeClass('active');
    });

    var last = 0;
    $(document).on('scroll', function(){
        var st = $(this).scrollTop();

        if( st > last ){
            // down
            $('.header').addClass('scroll');
        } else {
            // up
            if( st <= 10 ){
                $('.header').removeClass('scroll');
            }
            
        }

        last = st;

        // scroll indicator
        // scrollHeight : 스크롤바 높이를 뺀 문서의 전체 높이
        // clientHeight : 브라우저 영역의 높이
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrollPosition = $(this).scrollTop();
        var scrolled = (scrollPosition / height) * 100;
        console.log(scrolled);
        $('.scroll-indicator').css({
            width:scrolled + '%'
        });

        console.log( 'window : ' + $(window).height() );
        console.log( 'document : ' + $(document).height() );
        console.log( 'body : ' + $('body').height() );
        console.log( 'scroll : ' + $(this).scrollTop() );
        console.log( $('body').height() - $(this).scrollTop() );
    });

    $('.copy-text').on('click', function(){
        $('.textarea').select();
        document.execCommand('copy');

        window.alert('클립보드에 복사되었습니다.');
    });

});

$(window).on('load', function(){

    setTimeout(function(){
        $('.loader').remove();

        $('.contents').addClass('active');
    }, 3000);

});