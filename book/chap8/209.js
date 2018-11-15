var arr = [1, 5, 7];

var ret = arr.splice(1, 1); // 앞에 1은 배열의 순서, 뒤에 일은 한개
console.log(ret); // [ 5 ]
console.log(arr); // [ 1, 7 ]

arr = [1, 5, 7]

// splice : 배열의 중간을 조절할때 사용
arr.splice(1, 0, 2, 3, 4); // returns []; arr is now [1, 2, 3, 4, 5, 7]
console.log(arr); // [ 1, 2, 3, 4, 5, 7 ]

arr.splice(5, 0, 6); // returns []; arr is now [1, 2, 3, 4, 5, 6, 7]
console.log(arr); // [ 1, 2, 3, 4, 5, 6, 7 ]

arr.splice(1, 2); // returns [2, 3]; arr is now [1, 4, 5, 6, 7]
console.log(arr); // [ 1, 4, 5, 6, 7 ]

arr.splice(2, 1, 'a', 'b'); // returns [5]; arr is now [1, 4, 'a', 'b', 6, 7]
console.log(arr); // [ 1, 4, 'a', 'b', 6, 7 ]

console.log("----------------------");

var arr = [1, 2, 3, 4];

//  붙여 넣을 위치, 복사 시작 위치, 복사 종료 위치 미포함.

arr.copyWithin(1, 2); // arr is now [1, 3, 4, 4]
console.log(arr);

var arr = [1, 2, 3, 4];

arr.copyWithin(1, 2, 3); //
console.log(arr);

console.log();

var arr = [1, 2, 3, 4];

arr.copyWithin(2, 0, 2); // arr is now [1, 3, 1, 3]
console.log(arr); // [ 1, 2, 1, 2 ]

var arr = [1, 2, 3, 4];

arr.copyWithin(0, -3, -1); // arr is now [3, 1, 1, 3] -1에서 -3까지 이면 0에 넣어라
console.log(arr); // [ 2, 3, 3, 4 ]

console.log("----------------------");

var array1 = [1, 2, 3, 4]

var str = "Hello World!";

var ret = str.substr(0, 3); // 시작, 길이
console.log(str); // Hello World!
console.log(ret); // Hel(0부터 3개까지)

var ret = str.substring(0, 3); // 시작, 끝
console.log(str); // Hello World!
console.log(ret); // Hel
