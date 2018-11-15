// 새로운 문법을 배울 때 그 문법을 이해했는가?
// 쉽게 판단하는 기준은 : 신규 문법을 옛 문법으로 변경할 수 있다면 제대로 이해한 것을 의미한다.

function getSentence({ subject, verb, object }) {
 return `${subject} ${verb} ${object}`;
}
// `` : 문자열, ${} : 변수

// 아래 코드는 위 코드의 매개변수 해체 전
function getSentence(obj) {
  var subject = obj.subject;
  var verb = obj.verb;
  var object = obj.object;

  return subject + ' ' + verb + ' ' + object;
}

// 최신문법 학습 >> 올드 문법으로 변경 >> 최신문법으로 변경

const o = {
 subject: "I",
 verb: "love",
 object: "JavaScript",
};

// getSentence(o); // "I love JavaScript"
console.log(getSentence(o));
