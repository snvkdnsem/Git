var arr = [
  { id: 5, name: "Judith" },
  { id: 7, name: "Francis" }
];

var ret = arr.indexOf({id:5, name:"Judith"});
console.log(ret);

var ret = arr.findIndex(o => o.id === 5); // returns 0, 값의 위치 인덱스 값
console.log(ret);

arr.findIndex(o => o.name === "Francis"); // returns 1
arr.findIndex(o => o === 3); // returns -1
arr.findIndex(o => o.id === 17); // returns -1

var arr = [
  { id: 5, name: "Judith" },
  { id: 7, name: "Francis" }
];

var ret = arr.find(o => o.id === 5); // returns object { id: 5, name: "Judith" }
console.log(ret);

arr.find(o => o.id === 2); // returns null

var arr = [1, 17, 16, 5, 4, 16, 10, 3, 49];
// 배열 0, 1, 2 방의 값은 무시하고
// 배열 3 이상의 방의 값 중에서 스퀘어 루트 함수를 통해
// 구한 결과가 정수인 경우 해당 배열 요소의 값을 리턴한다.
var ret = arr.find(
  (x, i) => { // x: 배열의 요소 값, i: for문의 회전 인덱스
    // console.log('x = ', x);
    console.log('i = ', i);
    return i > 2 && Number.isInteger(Math.sqrt(x)); // returns 4, i가 배열 2번째보다 높은 배열 3이상의 방에서 루트로 나눠 떨어진 값을 출력
  }
);
console.log(ret);

console.log("--------------------------");
