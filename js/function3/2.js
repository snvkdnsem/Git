// function add(a, b) {
//   return a + b;
// }

// function add(obj) {
//   return obj.a + obj.b;
// }
// console.log(add({a:2, b:3}));

var obj = {
  a:2,
  b:3,
  add: function () {
    console.log(this === obj);
    return this.a + this.b;
  }
};

console.log(obj.add()); // true, 5

var adder = obj.add;

console.log(adder()); // false, NaN

console.log(adder.call(obj)); // true, 5(this를 obj라 보면된다)
