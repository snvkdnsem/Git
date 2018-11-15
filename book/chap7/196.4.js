console.log('START');

// ReferenceError: i is not defined
// var fn = function () {
//   console.log(i);
// };

for (let i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i); // 클로저 스코프에 의해 1, 2, 3 값이 순차 저장되며 순서데로 불러온다. var는 클로저 스코프가 될 수 없다.(대체로 let을 사용해야한다.)
  }, 1000);
}

console.log('END');

// START
// END
// 1
// 2
// 3
