const words = [
  "Beachball", "Rodeo", "Bali", "Angel",
 "Aardvark", "Xylophone", "November", "Chocolate",
 "Papaya", "Uniform", "Joker", "Clover"]; // 배열의 길이만큼  callback을 하기 때문에 12번 돈다.

// 단어의 첫글자가 같은 스펠링을 정렬한다.
 var fn = (a, x) => {
  if(!a[x[0]]) { // a객체의 프로퍼티가 없다면, [0] 첫글자를 따옴
    a[x[0]] = []; // a 객체의 해당 프로퍼티를 추가하고 빈 배열을 할당한다.
  }

  a[x[0]].push(x);
  return a;
};

const alphabetical = words.reduce(fn, {}); // {빈객체} : 초기값
/*
            a                                  x               return
1회전       {}                                 Beachball       {'B':['Beachball']}
2회전       {'B':['Beachball']}                Rodeo           {'B':['Beachball'],'R':['Rodeo']}
3회전       {'B':['Beachball'],'R':['Rodeo']}  Bali            {'B':['Beachball','Bali'],'R':['Rodeo']}
4회전       ...
*/


console.log(alphabetical);
// { B: [ 'Beachball', 'Bali' ],
//   R: [ 'Rodeo' ],
//   A: [ 'Angel', 'Aardvark' ],
//   X: [ 'Xylophone' ],
//   N: [ 'November' ],
//   C: [ 'Chocolate', 'Clover' ],
//   P: [ 'Papaya' ],
//   U: [ 'Uniform' ],
//   J: [ 'Joker' ] }
