class Car {
  constructor(color){
    this.color = color || 'Red';
  }
  print(){
    console.log('this.color = ' + this.color);
  }
}

class Sedan extends Car{
  constructor(kolor, doors=4){
    super(kolor);
    this.doors = doors;
  }
  // 자바의 @Override와 같다(가까운것을 불러온다)
  print(){
    super.print();
    console.log('this.doors = ' + this.doors);
  }
}

var sedan = new Sedan('Blue');
console.log(sedan); // Sedan { color: 'Blue', doors: 4 }
sedan.print();
