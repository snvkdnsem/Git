// java script 함수는 호출될때 결정된다.

global.count = 100;

function increase() {
  this.count++;
  console.log('1 >>', this.count);
}

increase();

var obj = {
  count: 0,
  increase, // increase 함수를 obj에 넣는것
  escalate(){
    this.count++;
    console.log('2 >>', this.count);

    function increase() {
      this.count++;
      console.log('3 >>', this.count);

      function lift() {
        this.count++;
        console.log('3 >>', this.count);
      }

      lift();
    }

    increase();
  }
};

// obj.increase();

obj.escalate();
