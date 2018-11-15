function add(a, b) { // 함수
  return a + b;
}

const o = {
  name: 'Julie',
  greetBackwards: function() { // 함수, 메소드
    const self = this;

    // 지역함수 : 함수안에 함수
    function getReverseName() { // 함수
      let nameBackwards = '';
      for (let i = self.name.length - 1; i >= 0; i--) {
        nameBackwards += self.name[i];
      }
      return nameBackwards;
    } // 여기까지 지역함수

    return `${getReverseName()} si eman ym ,olleH`;
  }, // 여기까지 함수
}; // 여기까지 객체

console.log(o.greetBackwards());
