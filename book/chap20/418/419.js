// 기동 파일에서 환경변수 정보를 작동시킨다.
require('./config');

// console.log(process.env);

const debug = process.env.DEBUG === "1" ?
  console.log :
  function() {};

debug("Visible only if environment variable DEBUG is set!");

/*
E:\git\work\book\chap20\418>set DEBUG=0
E:\git\work\book\chap20\418>node 419.js

E:\git\work\book\chap20\418>set DEBUG=1
E:\git\work\book\chap20\418>node 419.js
Visible only if environment variable DEBUG is set!
*/
