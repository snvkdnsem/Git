/*
  IIFE(immediately Invoked Function Expression)
*/

'use strict'
// 개발자가 스스로 컴파일러에게 엄격한 방식으로 코드를 검증하라고 요청한다.

/*
(function functionName() {
  console.log('Hi');
}//여기까지 함수선언
)();//여기까지는 함수호출
*/

/*
// 자동완성 명령어 : iife after enter
(function(){
  // 변수, 함수를 외부와 격리하여 사용하고 싶을 때 IIFE식을 사용합니다.
}());
*/

/*
var a = 10;
b = 20; // Bad!
console.log(global.a);
console.log(global.b);
*/

const message = (function() {
 const secret = "I'm a secret!";
 return `The secret is ${secret.length} characters long.`;
})();
console.log(message);

const f = (function() {
 let count = 0;
 return function() {
 return `I have been called ${++count} time(s).`;
 }
})();

console.log(f()); // "I have been called 1 time(s)."
console.log(f()); // "I have been called 2 time(s)."
