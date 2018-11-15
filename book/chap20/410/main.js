const debug = require('./debug')('main');
// 모듈이 반환하는 함수를 즉시 호출할 수 있습니다.

debug("starting"); // starting은 message로 간다.
// will log "main starting +0ms"
// if debugging is enabled

let sum = 0;
for (var i = 0; i < 1000000000; i++) {
  sum += i;
}
console.log(sum);

debug("END");
