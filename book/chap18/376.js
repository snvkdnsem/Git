const para1 = document.getElementsByTagName('p')[0]; // 배열같은 객체

console.log(para1.textContent);
// 111
// 222
// 333
console.log(para1.innerHTML); // 태그까지 살리고 싶으면 이 문법 적용
// 111
// <span>222</span>
// 333

// 태그도 문자열로 취급하여 그대로 화면에 출력한다.
// 스탠다드 문법
// para1.textContent = "<i>Modified</i> HTML file";

// textContent의 사투리 문법
// para1.innerText = "<i>Modified</i> HTML file";

// 태그는 처리되고 문자열은 그냥 출력된다.
// i는 이탤릭체
para1.innerHTML = "<i>Modified</i> HTML file";

const p1 = document.createElement('p');
const p2 = document.createElement('p');

p1.textContent = "I was created dynamically!"; // 시작태그와 엔드태그 사이에 넣어라
p2.textContent = "I was also created dynamically!";

const parent = document.getElementById('content');
const firstChild = parent.childNodes[0];

parent.insertBefore(p1, firstChild); // 376.html의 h3앞에 p1을 넣어라
parent.appendChild(p2);
