const fs = require('fs');

let data = 'hello from Node!';

let dir = __dirname + '/'; // 바로 밑에 hello.txt파일을 만든다.

fs.writeFile(dir + 'hello.txt', 'hello from Node!', function(err) {
  if (err) return console.log('Error writing to file.');
  console.log('DONE.');
});
