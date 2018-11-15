/*
  콜백의 헬을 해결하기 위한 시도!(난독증을 해결하기 위한)
  여러 레벨의 들여쓰기로 인한 난독증을 해결하기 위해서 프라미스를
  사용하면 들여쓰기 레벨이 1 레벨로 축소됩니다.
*/

// let promise = new Promise(function (resolve, reject) {
//   if (true) {
//     // 로직 처리 성공
//     resolve('처리 결과'); // 함수
//   } else{
//     // 로직 처리 실패(에러 발생)
//     reject(new Error('실패 사유'));
//   }
// });

// promise.then(function (result) { // 성공 콜백, resolve로 부터 받음
//
// }).catch(function (error) { // 실패 콜백, reject로 부터 받음
//
// }).finally(function () { // 최후의 항상 작동하는 콜백
//
// });
// 여기서 부터 맨 처음 줄까지 함수(그냥 외워야한다.)

function countdown(seconds) { // 10초를 받는다.
  // 프라미스 객체가 생성되면 즉시 리턴됩니다.
  return new Promise(function(resolve, reject) {
    for (let i = seconds; i >= 0; i--) {

      setTimeout(function() { // jshint ignore:Line
        if (i > 0) {
          console.log(i + '...');
        } else {
          console.log("GO!");
          resolve('DONE');
        }
      }, (seconds - i) * 1000);
    }
  });
}

// 함수가 작업결과 대신 작업 결과를 알려주겠다는
// 프라미스(약속) 객체를 즉시 리턴하므로 대기 현상이
// 발생하지 않습니다.
let promise = countdown(10);
console.log(promise instanceof Promise);

promise.then(function (result) { // 성공 콜백, resolve로 부터 받음
  console.log('result = ' + result);
}).catch(function (error) { // 실패 콜백, reject로 부터 받음
  console.log(error.message);

});
