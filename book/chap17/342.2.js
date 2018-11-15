function log(data) {
  console.log(data);
}

log('hello world'.replace('world', 'javascript')); // 문자 일부분을 교체할때 사용
// hello javascript

// 1개반 변경된다.
log('Blue has a blue house and a blue car'.replace('blue', 'red'));
// Blue has a red house and a blue car

// g(global): 줄끝까지 찾아라, 정규 표현식
log('Blue has a blue house and a blue car'.replace(/blue/g, 'red'));
// Blue has a red house and a red car

// gi: 대소문자 가리지 말고 줄끝까지 찾아라
log('Blue has a blue house and a blue car'.replace(/blue/gi, 'red'));
// red has a red house and a red car

// OR조건
// 대상을 찾아서 함수의 파라미터 x에 전달하고 함수가 리턴하는
// 값을 바꿔치기용으로 사용하라.
log('Blue has a blue house and a blue car'.replace(/blue|house|car/gi, function myFunction(x) {
  return x.toUpperCase(); // 대문자로 바꿔라
}));
// BLUE has a BLUE HOUSE and a BLUE CAR

console.log('hello'.replace(/h/, 'b'));

console.log('hello'.replace(/h../, 'bbb')); // h.. : h로 찾은후 뒤 두글자까지 b로 바꿔라
