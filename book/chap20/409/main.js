const fs = require('fs');

console.log(typeof fs);

// 이미 처리한 대상을 재 사용한다.
const fs2 = require('fs');

console.log(fs === fs2); // true

const colors = require('colors');

console.log('Hello'.rainbow); // 문자열 찍고 컬러
console.log('Hello'.green);
console.log('Hello'.blue);

// book 폴더 밑에 있는 node_modules 폴더 밑에 설치되어
// 있는 것을 사용합니다. (c드라이브까지 가서 없으면 오류가 뜬다.)
const _ = require('lodash'); // lodash를 써야하나 관습적으로 _ 이렇게 작성해도 된다.

var array = [1];
var other = _.concat(array, 2, [3], [[4]]);

console.log(other);
// => [1, 2, 3, [4]]

console.log(array);
// =>[1]
