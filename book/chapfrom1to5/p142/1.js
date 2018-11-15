const x = 5;
console.log(-x);
console.log(3- -5);
console.log(3-(-5));
const y = 3- -x; // Bad!, - - 사이에 공백이 필수
console.log(y);

console.log("-------------------");

var a = 10;
var b = 10;

console.log(a == b); // 동등 : 값만 비교
console.log(a === b); // 일치 : 값 비교 + 자료형 비교

console.log("-------------------");

var str1 = "10";
var str2 = "10";
var str3 = new String("10");

console.log(str1 == str2);
console.log(str1 === str2);
console.log(str1 == str3);
console.log(str1 === str3);

console.log("-------------------");

console.log(10 == "10");
console.log(10 === "10");
