'use strict';
/////////////콜백 종류//////////////////////

// synchronous callback
function printImmediately(print) {
  print();
}

// js is synchronous. 동기적이다 
// execute the code block in order after hoisting.
// 호이스팅 후에는 코드 작성 순서 맞춰서 동기적으로 실행된다
// hoisting: var, function declaration이 가장 위로 올라간다

console.log('1');

// 브라우저에서 제공되는 웹 api, 지정 시간 지나면 콜백함수 호출
setTimeout(function() {
  console.log('2');
}, 1000); //  1000밀리세컨초(초)지나면 함수 실행

setTimeout(() => console.log('2'), 1000);

console.log('3');



printImmediately(() => console.log('hello'));

// asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(()=> console.log('async callback'), 2000);
