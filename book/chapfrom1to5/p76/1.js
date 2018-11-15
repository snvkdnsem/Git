var a = 10; // 변수
var a = 10; // 변수, 같은것을 넣어도 출력이된다.(자바에서는 상상도 못함)
console.log(a);

let b = 10; // 변수(ES6로 오면서 var을 let으로 변경)
// let b = 10; // let으로 바뀌면서 같은것을 넣으면 출력이 안된다.
console.log(b);

// Scope : 범위 연산자를 기준으로 해당 자원을 어느 위치에서
// 접근하여 사용할 수 있는가를 판단하는 기준

var x = 100;
if(true) {
  console.log(x);
  var y = 200;
  let yy = 200;
}

console.log(y);
// console.log(yy); // ReferenceError: yy is not defined


// 100명의 고객이 있는데 한 명이 구닥다리 브라우저를 사용하여 let 키워드를 처리할 수 없다.
// all or nothing!
