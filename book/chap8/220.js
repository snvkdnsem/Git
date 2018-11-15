var arr = Array(10).map(function(x) { return 5 });
console.log(arr);

var arr = Array(10); // new키 없이도 array는 새 객체를 만들 수 있는 패턴이다.
var arr = new Array(10); // standard 방법
arr.fill(5);
console.log(arr);

console.log("------------------------");

var arr = [1, 2, 3, 4, 5];

delete arr[2]; // 인덱스 2위치의 해당 방에 값이 삭제된다.
// 방은 보존된다.
// 일반적으로  splice 함수를 사용하여 방 자체를 삭제한다.
console.log(arr);

var ret = arr.map(x => 0);
console.log(ret); // [ 0, 0, <1 empty item>, 0, 0 ]
console.log(arr);

console.log("------------------------");

var arr = [1, null, "hello", "world", true, undefined];

delete arr[3];
console.log(arr); // [ 1, null, 'hello', <1 empty item>, true, undefined ]

arr.join(); // "1,,hello,,true,"
arr.join(''); // "1hellotrue"
arr.join(' -- '); // "1 -- -- hello -- -- true --"

const attributes = ["Nimble", "Perceptive", "Generous"];

// const html = '<ul><li>' + attributes.join('</li><li>') + '</li></ul>';

// const html = `
//   <ul>
//     <li>${attributes[0]}</li>
//     <li>${attributes[1]}</li>
//     <li>${attributes[2]}</li>
//   </ul>
// `;

const html = `
  <ul>
    <li>
      ${attributes.join('</li><li>')}
    </li>
  </ul>
`;

console.log(html);
