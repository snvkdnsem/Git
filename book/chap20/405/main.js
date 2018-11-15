console.log('----------1----------');

// Hello.js 코드를 수행하고 그 결과인
// Hello.js # module.exports 객체를 할당한다.
const hello = require('./Hello'); // Hello.js를 불러옴

console.log('----------2----------');

console.log(hello); // === Hello.js # module.exprts

console.log(hello.id);
console.log(hello.hello());
console.log(hello.add(2, 3));
