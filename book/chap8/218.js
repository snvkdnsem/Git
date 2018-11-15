/*
  initialValue를 주지 않는 경우,
  1회전에서 callback 함수의 첫 파라미터로 배열의 첫 요소를 전달한다.
  두번째 파라미터는 배열의 두번째 요소를 전달한다.
  2회전부터는 이전 회전에서 return 한 값을 함수의
  첫 파라미터로 전달한다.
  두번째 파라미터는 배열의 세번째 요소를 전달한다.
  ...callback함수의 수행횟수는 배열의 -1만큼 수행된다.
  마지막 callback 함수의 return 값이 최종적인 리턴값이 된다.
*/

const arr = [5, 7, 2, 4];

const sum = arr.reduce(
  (a, x) => a += x,
);
/*
            a         x         return
1회전       5         7         12 // 초기값을 주지 않으면 배열의 첫번째꺼가 a에 들어간다. x는 배열의 두번째 값이 들어간다.
2회전       12        2         14
3회전       14        4         18 // 마지막 18이 sum에 들어간다.
*/
console.log(sum);