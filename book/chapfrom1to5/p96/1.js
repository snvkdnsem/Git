// 자바
// List<Object> list = new ArrayList<Object>();
// list.add(1);
// list.add(new Integer(2));
// list.add("Hi");

var ary = [];

ary[0] = 1;
console.log(ary);

ary.push(2); // 끝에 추가한다.
console.log(ary);

ary.push("Hi");
console.log(ary); // [ 1, 2, 'Hi' ] 숫자와 문자열을 한번에 출력 가능

ary = {
  1,
  2,
  3,
};

ary = [1, 2, 3,]; // 맨뒤어 , 찍어도 나온다.
console.log(ary);

var obj = {a:1, b:2,};
console.log(obj);

var z = 3.14
var zz = z.toString();
zz = String(z);
console.log(typeof zz, zz);
