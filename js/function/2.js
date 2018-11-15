/*
  Hoisting : 글로벌 스코프의 함수 선언식은 컴파일 전에 재 배치 됩니다.
*/
function add(a, b){ // 뒤에서 덮어쓰므로 데드코드이다.(밑에 add함수가 또 있기 때문에)
  return a+b;
}

function add(a, b){
  console.log(a); // undefined : 초기 값이 할당되지 않았다.
  console.log(b);
  return a*b; // undefined*undefined 하라는 의미
}

// console.log(add(2, 3, 4));
// console.log(add(2, 3, 4));
// console.log(add(3, 2, 4));

console.log(add()); // 결과값 : NaN(Not a Number)
