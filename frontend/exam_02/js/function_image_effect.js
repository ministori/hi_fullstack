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


// 이벤트, 기능 실행
$(function(){

    prevIndex = 2;
    currentIndex = 0;
    nextIndex = 1;

    visualPlay();

});