class Car {
  constructor(color){
    this.color = color || 'Red'; // 참값은 값이면 color, 거짓같은 값이면 Red
  }
}

// Sedan is-A Car.
class Sedan extends Car{
  // constructor 함수를 생략하며 넣어준다.
  // 심지어, 부모 함수에게 파라미터도 전달한다.
  // ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
  constructor(){
    super(); // 해결, 부모생성자
  }
}

var sedan = new Sedan('Blue'); // 파라미터 이기 때문에 clss car에 대입한다.
console.log(sedan); // Sedan { color: 'Blue' }
