
function Vehicle() {
  this.color = "Red";
  this.print = function () {
    console.log("Vehicle # print() called");
  };
}

function Car() {
  // Vehicle();

  // new 연산자와 같이 함수를 호출 했으므로
  // 이경우 Function Context는 새로 만드는 객체다.
  Vehicle.call(this); // Function Context를 알려주고 호출
}

Car.prototype.__proto__ = Vehicle.prototype;

var car = new Car();
console.log(car);
console.log(car.color);
car.print();
