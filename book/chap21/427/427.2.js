log = console.log;

let obj = {a:10}; // {}:new와 같음
obj.b = 20;
Object.defineProperty(obj, 'c', {
  value: 30,
  writable: false,
  enumerable: true,
  configurable: true
});
log(obj); // { a: 10, b: 20, c: 30 }

// 해당 객체의 프로퍼티 상태를 조회합니다.
log(Object.getOwnPropertyDescriptor(obj, 'c'));

obj.c = 40; // writable: false이므로 바뀌지 않는다.
log(obj); // { a: 10, b: 20, c: 30 }
