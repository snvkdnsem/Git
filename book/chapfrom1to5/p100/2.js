// 관습적으로 처리하는 방식을 컴파일러가 받아들여서 다음처럼 처리한다.
// number >> 0 : false, 1: true
// string >> "" : false
// null, undefined >> false
// object >> true
var n1 = " "; // "사이에 값이 들어가면 true", {}객체는 존재하면 true

if (n1) {
  console.log('True');
} else {
  console.log('False');
}
