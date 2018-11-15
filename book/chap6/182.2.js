// 내장 함수 : 주어진 시간 후에 주어진 함수를 수행한다.
// 첫 번째 파라미터 : 함수
// 두 번째 파라미터 : 시간(밀리세컨드)

// console.log(1);
//
// function fn() { // 함수 객체
//   console.log(2);
// }
//
// console.log(3);
//
// // 2000 후에 fn 함수를 setTimeout 함수 내 로직이 처리하여 호출합니다.
// setTimeout(fn, 2000);
//
// console.log(4);


function foo() {
  // console.log(this); // this는 foo
  console.log(this.a); // this는 foo.a를 가리킨다.

  setTimeout(function () {
    console.log(this); // this는 Timeout
    console.log(this.a); // undefined
  }, 100);

}

  foo.a = 'foo.a';

  foo.call(foo);
