log = console.log;

let obj = {a:10}; // {}:new와 같음
obj.b = 20;
Object.defineProperty(obj, 'c', {
  value: 30,
  writable: true,
  enumerable: true,
  configurable: false
});
log(obj);
// { a: 10, b: 20, c: 30 }

log(Object.getOwnPropertyDescriptor(obj, 'c'));

delete obj.c; // c를 삭제해라
log(obj);
// { a: 10, b: 20, c: 30 }
// configurable: false이므로 삭제되지 않는다.
