function foo() { // 함수

  var fn = (function() {
    console.log(this.a);
  }).bind(this);

  // var fn = function() {
  //   console.log(this.a);
  // };

// 화살표 함수 = 일반함수.bind(가장 가까운 this);

  // 화살표 함수는 this가 Lexical Scope를 기준으로
  // 가장 가까운 this에 자동으로 bind 되고 고정된다.
  var fn = () => {
    console.log(this.a);
  };

  setTimeout(fn, 100);
}

foo.a = 'foo.a';

foo.call(foo);
