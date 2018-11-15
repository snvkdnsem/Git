// => : 뚱뚱한 화살표 연산자(자바는 -> 를 사용)
// const f1 = function() {
//   return "hello!";
// }

// OR
const f1 = () => "hello!";

// const f2 = function(name) {
//   return `Hello, ${name}!`;
// }

// OR
const f2 = name => `Hello, ${name}!`;

// const f3 = function(a, b) {
//   var sum = a + b;
//   return sum;
// };

// OR
const f3 = (a, b) => {
  var sum = a + b;
  return sum;
};
console.log(f3(1, 2));
