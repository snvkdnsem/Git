const beer99 = "99 bottles of beer on the wall " +
 "take 1 down and pass it around -- " +
 "98 bottles of beer on the wall.";

/*
  정규표현식이 기호를 다른 의미로 정해서 사용하면
  그 기호를 문자열로 찾아달라고 할때 추가적인
  설정이 필요합니다.
  이스케이프 문자 역슬래쉬를 사용하면
  정규표현식 설정이 아니라 그냥 문자열로 취급됩니다.
*/

// const match = beer99.match(/[98]/ig); // 대괄호 안에는 OR처럼 여겨진다.
// console.log(match);

// const match = beer99.match(/\d/ig); // 대괄호 보다 더 간략한 표현
// console.log(match);

// const match = beer99.match(/[0-9a-z]/ig); // insensitive : 대소문자를 구분하지 않습니다.
// console.log(match);

// const match = beer99.match(/\//ig); // 슬래시 찾고 싶을때 역슬래시를 작성하면된다.
// console.log(match);

// const match = beer99.match(/\./ig); // . 을 사용하여 임의의 글자 한 글자라는 뜻으로 사용한다.
// console.log(match);

// const match = beer99.match(/-/ig);
// console.log(match);

// const match = beer99.match(/[-|0|1|2|3]/ig); // 이 줄의 문법을 간다하게 표현하면 아래와 같다.
// const match = beer99.match(/[\-0-3]/ig);
// console.log(match);

// [안에 점] : 문자열 점
// /안에 점/ : 임의의 한글자
const match = beer99.match(/[.]/ig);
console.log(match);

// const match = beer99.match(/[\-0-9a-z.]/ig);
