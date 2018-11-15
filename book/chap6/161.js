// Destructuring Assignment

// a normal object
const obj = {b: 2, c: 3, d: 4};

// var a;
// var b = obj.b;
// var c = obj.c;
//
// console.log(a);
// console.log(b);
// console.log(c);

// object destructuring assignment
const {a, b, c} = obj; // 해체 할당 문법

console.log(a);
console.log(b);
console.log(c);

// a; // undefined: there was no property "a" in obj
// b; // 2
// c; // 3
// d; // reference error: "d" is not defined
