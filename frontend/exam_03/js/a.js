function myExec(){
    console.log('Ready');
    console.log( document.querySelector('.image').src );
}

window.onload = function(){
    document.querySelector('#alarm').addEventListener('click', myExec);    
}

// 1. ready()함수 안에 있는 myExec 함수를 호출
$(document).ready(myExec);
// 2. $() 함수 안에 있는 myExec 함수를 호출
$(myExec);
  
// window 객체의 onload 이벤트
window.onload = myExec;