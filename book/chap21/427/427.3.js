log = console.log;

let obj = {a:10}; // {}:new와 같음
obj.b = 20;
Object.defineProperty(obj, 'c', {
  value: 30,
  writable: true,
  enumerable: false, // 보여주지말라는 의미
  configurable: true
});
log(obj);
// { a: 10, b: 20, c: 30 }
// enumerable: false이므로 로그에 출력되지 않는다.

for (var variable in obj) {
  if (obj.hasOwnProperty(variable)) {
    console.log(obj[variable]);
  }
}

// 10
// 20
console.log(obj.c); // 30

// 해당 객체의 프로퍼티 상태를 조회합니다.
log(Object.getOwnPropertyDescriptor(obj, 'c'));
