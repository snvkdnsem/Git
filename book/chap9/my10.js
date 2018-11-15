class Car {
  constructor(color){
    this.color = color || 'Red'; // 참값은 값이면 color, 거짓같은 값이면 Red
  }
}

// Sedan Is-A Car.
class Sedan extends Car{
  // constructor 함수를 생략하며 넣어준다.
  // 심지어, 부모 함수에게 파라미터도 전달한다.
  constructor(kolor){ // 여기에 kolor라고 대입하니 blue라고 출력된다.
    super(kolor); // this가 부모에게 전달된다., 여기에 kolor라고 대입하니 blue라고 출력된다.
  }
}

var sedan = new Sedan('Blue'); // 파라미터 이기 때문에 clss car에 대입한다.
console.log(sedan); // Sedan { color: 'Blue' }
