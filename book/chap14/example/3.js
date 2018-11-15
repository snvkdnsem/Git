// 1.자바스크립트나 노드가 제공하는 비동기 함수를
// 선택하여 사용합니다.
// 2.또는, 브라우저가 제공하는 웹워커 기술을 사용하여
// 시간이 오래걸리는 로직을 위임할 수도 있습니다.
// 3.또는, 시간이 오래걸리는 블록연산을 다른 서버 API에게
// 요청하여 그 결과를 받아서 사용할 수도 있습니다.

// #1 : 노드가 제공하는 비동기 함수 흉내를 내 보자.
function sumAsync(start, end, cb) {
  // setTimeout 함수에 전달한 cb 함수가 기동하기 위한 2가지 조건
  // 1. 시간이 지나야 한다.
  // 2. 개발자가 사용할 수 있는 단 하나의 메인스레드가
  // 다른일을 하고 있지 않는 IDLE 상태여야 한다.
  // 우리가 작성한 코드는 메인스레드 한 곳에서만 작동한다.
  // setTimeout에서 다른 스레드들을 진행한다.
  setTimeout(function () {
    let result = 0;
    for (var i = start; i <= end; i++) {
      result += i
    }

    let existError = false;
    if (Math.random() < 0.5) {
      existError = true;
    }

    if (existError) {
      let e = new Error('모든 코드는 비정상이 될 가능성이 있다.')
      // 관습 룰:
      // 에러가 발생하면
      // 첫 번째 파라미터는 에러객체, 그 다음은 모두 null
      cb(e, null); // 에러이니 결과도 없다라는 의미
    } else {
      // 에러가 발생하지 않으면
      // 첫 번째 파라미터는 null, 그 다음은 처리결과 데이터
      cb(null, result); // 내용은 없지만 결과 출력이라는 의미
    }
  }, 0); // 시간이 0
}

console.log('START');
let oldTime = Date.now();

// let value = sumSync(1, 2000000000); // 20억번 돈다

try {
  // 비동기 함수는 try 구문으로 에러를 잡을 수 없다.
  // 왜냐하면, 메인 스레드가 비동기 함수를 호출하고
  // 바로 다음 줄 코드를 처리하기 위해서 내려간다.
  // 비동기 함수는 아직 제대로 코드를 수행하기도 전이므로
  // 에러가 발생할 틈이 없고 따라서 비동기 함수는 try
  // 구문으로 에러를 잡을 수 없다.
  sumAsync(1, 2000000000, function (error, result) { // function은 cb(result) 값을 받는다.
    if (error) {
      console.log('에러 대응 코드: ' + error.message);
      return; // 끊자
    }
    console.log('value = ' + result);
  });
} catch (e) {
  console.log('영원히 작동하지 않는다.');
}

let newTime = Date.now();
console.log('Elapsed Time = ' + (newTime - oldTime));

console.log('긴급히 처리해야 하는 로직');

// 여기서부터는 코드가 없으므로 메인스레드는 IDLE 상태가 된다.
// 일을 시킬 떄까지 그냥 논다.

// while (Date.now() < newTime + 20000) {
//
// }
