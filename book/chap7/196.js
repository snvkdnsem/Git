let globalFunc; // undefined global function

{
  let blockVar = 'a'; // block-scoped variable

  globalFunc = function() {
    console.log(blockVar); // 여기서 blockVar가 let 함수를 잡고 있기 때문에 외부에서 사용가능(클로져 스코프)
  }
}

globalFunc(); // logs "a"

console.log("---------------------");

let f; // undefined function
{
  let o = { // 객체 : 객체는 범위 연산자가 될 수 없다.
    note: 'Safe'
  };

  f = function() { // 함수
    return o;
  }
}

let oRef = f(); // f()의 괄호는 즉시 실행하라는 의미. 즉, return o;를 가리킨다.

oRef.note = "Not so safe after all!";

console.log(oRef);
