const now = new Date();

console.log(now); // 2018-09-06T07:07:41.167Z

console.log(now.getFullYear()); // 2018
console.log(now.getMonth()); // 8 (0-base) == 9 월
console.log(now.getDate()); // 6 일
console.log(now.getHours()); // 16 시
console.log(now.getMinutes()); // 9 분
console.log(now.getSeconds()); // 18 초

// 2018-12-25일은 무슨 요일인가요??
const xmas = new Date(2018, 11, 25);

console.log(xmas.getDay()); // 2 (0은 일요일)

const email = /@/gi;

/*
  /정규표현식/옵션
  정규표현식 선인법으로 작성하면 바로 객체로 취급된다.
*/

console.log(email.__proto__ === RegExp.prototype);

console.log(email.test("abc.com")); // false
console.log(email.test("abc@def.com")); // true
