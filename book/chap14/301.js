function countdown(seconds) { // 10초를 받는다.
  // 프라미스 객체가 생성되면 즉시 리턴됩니다.
  return new Promise(function(resolve, reject) {
    for (let i = seconds; i >= 0; i--) {

      setTimeout(function() { // jshint ignore:Line
        if (i > 0) {
          console.log(i + '...');
        } else {
          console.log("GO!");
          resolve('DONE');
        }
      }, (seconds - i) * 1000);
    }
  });
}

countdown(5).then(
  function() { // 성공 콜백
    console.log("countdown completed successfully");
  },
  function(err) { // 실패 콜백
    console.log("countdown experienced an error: " + err.message);
  }
);
