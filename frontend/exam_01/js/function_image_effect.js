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

    $('.visual-01 .play-button').removeClass('play').addClass('pause');
}

// 일시 정지
function visualPause(intervalID){
    clearInterval(intervalID);
    $('.play-button').removeClass('pause').addClass('play');
}

// left arrow 클릭시 페이드
// 순서가 앞쪽으로 변경 => 인덱스 번호가 감소
function leftFade(){

    if(prevIndex < 0){
        prevIndex = 2;
    }

    //$('.visual-01 .visual-image').eq(currentIndex).siblings().removeClass('active');
    // $('.visual-image').removeClass('active');

    $('.visual-01 .visual-image').eq(currentIndex).removeClass('active');
    $('.visual-01 .visual-image').eq(prevIndex).addClass('active');

    $('.visual-01 .image-number-item').eq(currentIndex).removeClass('active');
    $('.visual-01 .image-number-item').eq(prevIndex).addClass('active');

    nextIndex = currentIndex;
    currentIndex = prevIndex;
    prevIndex--;

    console.log("prev : " +  prevIndex + " current : " +  currentIndex + " next : " + nextIndex);

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

    $('.visual-01 .image-number-item').eq(currentIndex).removeClass('active');
    $('.visual-01 .image-number-item').eq(nextIndex).addClass('active');

    prevIndex = currentIndex;
    currentIndex = nextIndex;
    nextIndex++;

    console.log("prev : " +  prevIndex + " current : " +  currentIndex + " next : " + nextIndex);

}


// 이벤트, 기능 실행
$(function(){

    prevIndex = 2;
    currentIndex = 0;
    nextIndex = 1;

    $('.visual-01 .image-number-item').eq(currentIndex).addClass('active');

    visualPlay();

    var playStatus = true;
    $('.visual-01 .play-button').on('click', function(){

        if(playStatus){

            visualPause(intervalID);

            playStatus = false;

        } else {

            visualPlay();

            playStatus = true;

        }

    });

    $('.visual-01 .arrow-button.left').on('click', function(){
        visualPause(intervalID);
        playStatus = false;
        leftFade();
    });

    $('.visual-01 .arrow-button.right').on('click', function(){
        visualPause(intervalID);
        playStatus = false;
        rightFade();
    });

});