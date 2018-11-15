const fs = require('fs');

const dir = __dirname + '/';

const rs = fs.createReadStream(dir + 'stream.txt', {
  encoding: 'utf8'
});

rs.on('data', function(data) { // data 예약어
  console.log('>> data: ' + data.replace('\n', '\\n'));
});

rs.on('end', function(data) { // end 예약어
  console.log('>> end');
});
