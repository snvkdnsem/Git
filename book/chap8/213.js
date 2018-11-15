class Person { // 생성자 함수
 constructor(name) {
 this.name = name;
 this.id = Person.nextId++; // 일단 초기값 0을 주고 증가한다.
 }
}

Person.nextId = 0; // new Person 한 회수

// let i, j, k=1; // k만 1, i와 j는 undefined

const jamie = new Person("Jamie"),
 juliet = new Person("Juliet"),
 peter = new Person("Peter"),
 jay = new Person("Jay");

console.log(jamie); // Person { name: 'Jamie', id: 0 }
console.log(juliet); // Person { name: 'Juliet', id: 1 }
console.log(peter); // Person { name: 'Peter', id: 2 }
console.log(jay); // Person { name: 'Jay', id: 3 }
console.log();

const arr = [jamie, juliet, peter, jay];

// option 1: direct comparison of ID:
var ret = arr.find(p => p.id === juliet.id); // returns juliet object, find는 하나 찾으면 break한다.
console.log(ret);

// option 2: using "this" arg:
arr.find(p => p.id === this.id, juliet); // returns juliet object

var ret = arr.some(item => item.name.includes('J')); // some : J가 들어가 있는게 있으면 true
console.log(ret);

var ret = arr.every(item => item.name.includes('J')); // every : 모두다 J가 있으면 true
console.log(ret);

console.log('PeterJ'.includes('J'));
