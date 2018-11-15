class Square {
  constructor(length = 10){
    this.length = length;
    // this.area = length * length;
  }
  show(){
    console.log('this.length = ' + this.length);
  }
  get area(){
    return this.length * this.length; // this를 해줘야 객체가 가지고 있는걸 가져올 수 있다.
  }
  set area(area){
    this.length = Math.sqrt(area); // 루트400을 해서 20이 나온다.
  }
}

let s = new Square();
console.log(s);
console.log(s.length);
console.log(s.area); // ()괄호 사용하지 않는다.
s.area = 400; // ()괄호 사용하지 않는다.
console.log(s.length);
console.log(s.area);
