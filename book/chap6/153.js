const skipIt = "사용자가 입력한 문자열";

let x = 0;

const result = skipIt || x++;
// skipIt : true같은 값이면 skipIt에 있는 값을 출력, false같은 값이면 x++;을 진행한다.

console.log(x, result);
