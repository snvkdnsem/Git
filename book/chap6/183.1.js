function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

var a = 10;
var b = 20;

console.log(add(a, b));

var nums = [a, b]

console.log(add(nums[0], nums[1]));

// Spread Operator(...nums) : 배열의 요소를 낱개로 쪼개서 처리한다.
console.log(add(...nums));

console.log(multiply(nums[0], nums[1]));

// Rest Parameter(나머지 파라미터)
// 할당하지 않고 남은 나머지 파라미터 값들을 모두 모아서 배열에 담고
// 그 배열을 변수 args에 할당한다.
function calculator(flag, ...args) {// 파라미터 2개 ...args: 여기서는 Rest Parameter(함수에서)
  switch (flag) {
    case '+':
      return add(...args); // Spread Operator, 함수를 호출하는 자리
    case '*':
      return multiply(...args); // Spread Operator, 함수를 호출하는 자리
    default:
      return '잘 못된 연산'
  }
}

console.log(calculator('+', 2, 3, 4)); // 5
console.log(calculator('*', 2, 3)); // 6
console.log(calculator('-', 2, 3, 4, 5)); // 잘 못된 연산
