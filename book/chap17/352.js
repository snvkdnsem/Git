let str = ' something ';
console.log(str.length);

let result = str.trim();

console.log(result);
console.log(result.length);

let result2 = str.replace(/^\s|\s$/g, '');
console.log(result2);
console.log(result2.length);

const beer99 = "99 bottles of beer on the wall " +
 "take 1 down and pass it around -- " +
 "98 bottles of beer on the wall.";

// const match = beer99.match(/[0-9][0-9][0-9]|[0-9][0-9]|[0-9]/gm); // 3자리, 2자리, 1자리
const match = beer99.match(/[0-9]{1,3}/gm); // 바로 윗줄의 간략 문법

let name = "Heungmin Son";
name = name.replace(/(\w+)\s(\w+)/, "$2 $1"); // 앞(\w+): 단어 및 $1을 콜, \s:공백
console.log(name); // Son Heunmin
