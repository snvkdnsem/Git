// fs: 노드가 내장하여 제공하는 파일처리 모듈
const fs = require('fs');

console.log(__dirname); // E:\git\work\book\chap14, 저장된 위치를 찾아주는 명령어

let dir = __dirname + '/';

console.log('START');
// 노드가 제공하는 대부분의 함수는 비동기 함수고
// 동기함수는 sync라는 단어가 붙는다.
fs.readFile(dir + 'a.txt', function(err, dataA) { // 에러가 없으면 dataA에 데이터를 저장, 앞에 err를 작성한 이유는 관습때문
  if (err) console.error(err); // 에러가 있으면 에러 출력
  fs.readFile(dir + 'b.txt', function(err, dataB) {
    if (err) console.error(err);
    fs.readFile(dir + 'c.txt', function(err, dataC) {
      if (err) console.error(err);
      setTimeout(function() {
        let data = dataA + dataB + dataC;

        fs.writeFile(dir + 'd.txt', data, function(err) {
          if (err) console.error(err);
          console.log("DONE");
        });

      }, 3 * 1000); // 3초 지연

    });
  });
});
