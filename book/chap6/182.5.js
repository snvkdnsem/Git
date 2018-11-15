function foo() { // 함수
  console.log(this === foo);

// fnBind 함수내에 this는 foo로 고정된 상태다.
  setTimeout((function(){
    console.log(this.a); // foo.a
  }).bind(this), 100);
}

foo.a = 'foo.a';

foo.call(foo);
