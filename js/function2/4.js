// 이 코드는 죽은 코드(데드코드) ==> 오버로딩이 안된다.
// function add(a, b) {
//   return a + b;
// }

function add(a, b) {
  return a * b;
}

console.log(add(2, 3));
console.log(add(2, 3));
console.log(add(2, 3));
