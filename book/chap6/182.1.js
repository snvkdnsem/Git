global.a = 'global.a';

function foo() {
  console.log(this === global, this === foo, this.a); // this는 global을 참조
}

foo.a = 'foo.a';

//#1
foo(); // true false 'global.a'

//#2
foo.call(foo); // false true 'foo.a'

//#3
var obj = {
a: 'obj.a',
  foo: function () {
    console.log(this === global, this === foo, this.a); // false false 'obj.a', this는 obj가 된다.
  }
};

obj.foo();

// #4
function Car() {
  this.color = 'Red'; // 여기서 this는 새로 만든 new로 지정된다.
}

var car = new Car();
console.log(car);
