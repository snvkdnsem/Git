// var b = 20; // 변수
//
// var obj = { // 새로운 객체 생성
//   a: 10, // 변수
//   b, // ==(같다) b: b, 좌측에 있는 b는 프로퍼티, 우측에 b는 변수값
//   speak() { // ==(같다) speak: function xxx() 생략가능, speak 프로퍼티키가 임명함수를 가리킨다.
//     console.log('SPEAK!');
//   }
// };
//
// console.log(obj);
// obj.speak(); // 프로퍼티키로 접근한다(위 소스 ==> speak:)

const o = {
  name: 'Wallace',
  speak() {
    return `My name is ${this.name}!`;
  },
}

console.log(o.speak()); // "My name is Wallace!

const speak = o.speak;
console.log(speak === o.speak); // true; both variables refer to the same function
console.log(speak()); // "My name is undefined!"
