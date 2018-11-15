// 자바스크립트의 스코프는 크게 보아서 2가지가 있다.
// 1. 글로벌 스코프
//    파일 시작 ~ 파일 끝
//    소스코드를 여러 파일로 나눈 후 임포트해서 사용하면
//    글로벌 스코프 확장된다.
// 2. 함수 스코프
//    함수의 스코프 = 파라미터 선언 + { 코드 부분 }
// +. 동적으로 생성되는 클로져 스코프

var a = 10;

{
  a = 100;
}

function f(x) {
  console.log(a);
  return x + 3;
}

// 격리된 함수 f에 존재하는 자원을 외부에서 접근할 수 없다.
// console.log(x); // ReferenceError: x is not defined

console.log(f(5)); // 8
