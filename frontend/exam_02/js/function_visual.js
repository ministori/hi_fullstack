// $(document).ready(function(){});
var visualIndex;
var intervalID;

function visualPlay(){
    
    intervalID = setInterval(function(){

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

    $('.play-button').removeClass('play').addClass('pause');
}

function visualPause(intervalID){
    clearInterval(intervalID);
    $('.play-button').removeClass('pause').addClass('play');
}

$(function(){


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

   
    // visual effect

    // 01 fade 효과

    visualIndex = 0;
    //$('.visual').on('click', function(){

    //$('.visual-01 .image-number-item').eq(visualIndex).siblings().removeClass('active');
    $('.visual-01 .image-number-item').eq(visualIndex).addClass('active');

    visualIndex++;

    intervalID = setInterval(function(){

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

    var playStatus = true;
    $('.play-button').on('click', function(){

        if(playStatus){

            visualPause(intervalID);

            playStatus = false;

        } else {

            visualPlay();

            playStatus = true;

        }

    });

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