const numStr = "33.3";

// const num = Number(numStr); // 숫자로 바꾼다
// const num = parseInt(numStr);
const num = Number.parseFloat(numStr); // Number. 생략가능

console.log(typeof num);

console.log(numStr + 10); // 33.310
console.log(num + 10); // Number하면 43.3 / parseInt하면 43 / parseFloat하면 43.3

/*
  0,1 : 2진법
  0,1,2,3,4,5,6,7,8,9 : 10진법
  0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f : 16진법
*/

const d = new Date();
const ts = d.valueOf();
console.log(ts); // 과거 : 1536219060470 < 미래 : 1536219069668 과거는 작고 미래는 커진다.(시간경과)

const n = 33.5;
// const s = n.toString();
const s = "" + n;
console.log(typeof s); // string

const n1 = 0; // 관습적으로 0:false, 1:true
console.log(typeof !n1); // boolean
const b1 = !!n1; // 2번째 !는 원값이 1일때 true가 되어야 부정연산자를 2번 사용하여 원값의 의미를 보존한다.

const b2 = Boolean(n1);
console.log(typeof b2);

if (!!n1) {
  console.log('True');
} else {
  console.log('False');
}

// 관습적으로 처리하는 방식을 컴파일러가 받아들여서 다음처럼 처리한다.
// number >> 0 : false, 1: true
// string >> "" : false
// null, undefined >> false
// object >> true
if (n1) {
  console.log('True');
} else {
  console.log('False');
}
