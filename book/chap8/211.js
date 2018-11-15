const o = { name: "Jerry" };
const arr = [1, 5, "a", o, true, 5, [1, 2], "9"];

var ret = arr.indexOf(5); // returns 1
console.log(ret); // 출력값 : 1, 값의 위치 인덱스 값(즉, 5가 1번째 방에 있다.)

if (arr.indexOf("9") > -1) { // "9"라는 문자열이 배열에 있다면 메시지를 출력한다.
  console.log("존재합니다.");
}

arr.lastIndexOf(5); // returns 5, 값의 위치 인덱스 값(뒤에서 부터 찾는다)
arr.indexOf("a"); // returns 2
arr.lastIndexOf("a"); // returns 2
arr.indexOf({ name: "Jerry" }); // returns -1
arr.indexOf(o); // returns 3
arr.indexOf([1, 2]); // returns -1
arr.indexOf("9"); // returns 7
arr.indexOf(9); // returns -1
arr.indexOf("a", 5); // returns -1, 5번째 부터 찾아라
arr.indexOf(5, 5); // returns 5
arr.lastIndexOf(5, 4); // returns 1
arr.lastIndexOf(true, 3); // returns -1
