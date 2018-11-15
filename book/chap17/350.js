let str = 'I love you!';

let arr = str.split(' '); // [ 'I', 'love', 'you!' ] 공백 기준으로 나눠진다.
console.log(arr);

// let result = str.replace(/\s/g, ',');

let result = str.replace(/ /g, ','); // I,love,you!
console.log(result);
