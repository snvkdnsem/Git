console.log('START');

const start = new Date();

let i = 0;

// 1회용
// setTimeout(function (val) {
//   console.log('val = ' + val);
// }, 5 * 1000, 100);

 // setInterval(반복수행) : 인터럽트 당할 때 까지
 // clearInterval(intervalId) : 반복수행되는 것을 멈춰준다.(호출하면 작업을 멈춘다.)
// const intervalId = setInterval(function (val) {
//   console.log('val = ' + val);
//
//   clearInterval(intervalId);
// }, 5 * 1000, 100);


// const start = new Date();

// let i = 0;

const intervalId = setInterval(function() {
  let now = new Date();

  if (now.getMinutes() !== start.getMinutes() || ++i > 10)
    return clearInterval(intervalId);

  console.log(`${i}: ${now}`);
}, 5 * 1000);
