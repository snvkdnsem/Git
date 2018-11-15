const o = {
  name: 'Julie',
  greetBackwards: function() {

    // const self = this;
    // 지역함수 : 함수안에 함수
    // function getReverseName() { // 함수
    //   let nameBackwards = '';
    //   for (let i = self.name.length - 1; i >= 0; i--) {
    //     nameBackwards += self.name[i];
    //   }
    //   return nameBackwards;
    // } // 여기까지 지역함수

    const getReverseName = () => {
      let nameBackwards = '';
      for (let i = this.name.length - 1; i >= 0; i--) {
        nameBackwards += this.name[i];
      }
      return nameBackwards;
    };

    return `${getReverseName()} si eman ym ,olleH`;
  },
};
o.greetBackwards();
// Arrow functions have two
