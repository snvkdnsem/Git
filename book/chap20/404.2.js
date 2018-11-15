// Hoisting
var add;
var add;

console.log(add); // undefined

// TypeError: add is not a function
// console.log(add());

add = function add() {
  return 10;
};

console.log(add()); // 10

// 위 개발자 A

// 아래 개발자 B

add = function add() {
  return 20;
};

console.log(add()); // 20

// 아래 개발자 C
// A 개발자는 10을 리턴한다고 주장하고
// B 개발자는 20을 리턴한다고 주장합니다.
// C 개발자는 A 개발자가 만든 함수를 사용하고 싶어요!
// 어떻게 가능할까요?
console.log(add());
