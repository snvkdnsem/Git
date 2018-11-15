const cart = [
  { name: "Widget", price: 9.95 },
  { name: "Gadget", price: 22.95 }
];

// 사상(map)
// 배열의 아이템을 꺼내서 함수에 전달하고
// 함수가 리턴하는 값으로 치환한다.
const names = cart.map(x => x.name); // 작성된 데이터에서 이름만 뽑아서 보고 싶을때 사용
console.log(names);// ["Widget", "Gadget"]
console.log(cart);

const prices = cart.map(x => x.price); // [9.95, 22.95]
console.log(prices);

const discountPrices = prices.map(x => x*0.8); // [7.96, 18.36]
console.log(discountPrices);

console.log(typeof String.prototype.toLowerCase);

console.log("Hello".toLowerCase()); // hello, 소문자로 바꿔준다.

// String.prototype.toLowerCase.call(null);

// const lcNames = names.map(
//   item => item.toLowerCase()
// );

console.log(lcNames); // ["widget", "gadget"]
