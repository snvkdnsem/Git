// 클래스는 호이스팅이 안된다.
// 클래스는 재정의도 허용되지 않는다.
class Car {
  constructor(color){
    this.color = color || 'Red'; // 참값은 값이면 color, 거짓같은 값이면 Red
  }
}

// Sedan is-A Car.
class Sedan extends Car{

}

var car1 = new Car(); // 파라미터 이기 때문에 clss car에 대입한다.
console.log(car1);

var car2 = new Car('White');
console.log(car2);
