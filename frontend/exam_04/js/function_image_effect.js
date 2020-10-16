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

    $('.visual-01 .visual-image').eq(currentIndex).removeClass('active');
    $('.visual-01 .visual-image').eq(nextIndex).addClass('active');

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



/**
 * sliding
 */

var prevSlide;
var currentSlide;
var nextSlide;
var intervalSlide;

function autoSlide(){

    intervalSlide = setInterval(function(){

        rightSlide();

    }, 5000);

    $('.visual-02 .play-button').removeClass('play').addClass('pause');
}

function slidePause(intervalSlide){
    clearInterval(intervalSlide);
    $('.visual-02 .play-button').removeClass('pause').addClass('play');
}

function rightSlide(){

    if(nextSlide > 2){
        nextSlide = 0;
    }

    $('.visual-02 .visual-image').removeClass('prev current next jump');

    $('.visual-02 .visual-image').eq(prevSlide).addClass('prev jump');

    $('.visual-02 .visual-image').eq(currentSlide).addClass('next');

    $('.visual-02 .visual-image').eq(nextSlide).addClass('current');

    $('.visual-02 .image-number-item').eq(currentSlide).removeClass('active');
    $('.visual-02 .image-number-item').eq(nextSlide).addClass('active');

    prevSlide = currentSlide;
    currentSlide = nextSlide;
    nextSlide++;

}

function leftSlide(){

    if(prevSlide < 0){
        prevSlide = 2;
    }

    $('.visual-02 .visual-image').removeClass('prev current next jump');

    $('.visual-02 .visual-image').eq(prevSlide).addClass('current');

    $('.visual-02 .visual-image').eq(currentSlide).addClass('prev');

    $('.visual-02 .visual-image').eq(nextSlide).addClass('next jump');

    $('.visual-02 .image-number-item').eq(currentSlide).removeClass('active');
    $('.visual-02 .image-number-item').eq(prevSlide).addClass('active');

    nextSlide = currentSlide;
    currentSlide = prevSlide;
    prevSlide--;

}

$(function(){

    prevSlide = 2;
    currentSlide = 0;
    nextSlide = 1;

    $('.visual-02 .image-number-item').eq(currentSlide).addClass('active');

    autoSlide();

    var slideStatus = true;
    $('.visual-02 .play-button').on('click', function(){

        if(slideStatus){

            slidePause(intervalSlide);

            slideStatus = false;

        } else {

            autoSlide();

            slideStatus = true;

        }

    });

    $('.visual-02 .arrow-button.left').on('click', function(){
        slidePause(intervalSlide);
        slideStatus = false;
        leftSlide();
    });

    $('.visual-02 .arrow-button.right').on('click', function(){
        slidePause(intervalSlide);
        slideStatus = false;
        rightSlide();
    });


});