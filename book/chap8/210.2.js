
var arr = [4, 10, 7, 100, 25, 34, 21, 79];

// 가장 작은 숫자를 출력하세요.
console.log(arr.sort((a, b) => a > b)[0]);

// 가장 큰 숫자를 출력하세요.
console.log(arr.sort((a, b) => a < b)[0]);

var people = [
  {id:10, name:'Brad', age:18},
  {id:20, name:'Tom', age:34},
  {id:30, name:'Iaan', age:45},
  {id:40, name:'Aaron', age:64},
];

// id 값으로 오름차순 정렬을 하세요.
console.log(people.sort((a, b) => a.id > b.id));

// 나이가 가장 어린 사람의 이름을 출력하세요.
console.log(people.sort((a,b) => a.age > b.age)[0].name);

// name 값으로 내림차순 정렬을 하세요.
console.log(people.sort((a, b) => a.name < b.name));
