/*
  일반 함수 vs 화살표 함수
  - this 처리방식이 다르다.
  - arguments 지원여부
  - new 함수 문법 가능여부
  - 상속관련 prototype 객체 보유 여부
*/

// 노드에서는 전역 스코프의 this가 자동으로 처리되는
// exports 객체를 가리킨다.
console.log(this === exports);
this.a = 'this.a';

var obj = { // 객체
  a: 'obj.a',
  show: function () { // () 파라미터 자리
    console.log(this === obj);
    //arguments : 받은 파라미터들을 보관하는 객체
    console.log(typeof arguments, arguments);
    console.log(this.a);
  },
  print: () => {
    console.log(this === exports); // 여기서 this는 this.a = 'this.a';를 가리킨다.
    console.log(typeof arguments, arguments);
    console.log(this.a);
  }
};

obj.show(10, 20); // 10, 20은 프로퍼티
obj.print(20, 20);
