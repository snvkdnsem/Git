// console.log(0.1 + 0.1);
// console.log(0.1 + 0.2);
// console.log(0.1 + 0.3);
//
// let n = 0;
// while (true) {
//   n += 0.1;
//   console.log('n = ', n);
//   if (n === 0.3) break;
// }
//
// console.log(`Stopped at ${n}`);

const x = 0.2, y = 0.3, z = 0.1;
let result = x - y +z;
console.log('result = ', result); // 2.7755575615628914e-17
let equal = (Math.abs(result) < Number.EPSILON);
console.log(equal);

let n = 0;

while (true) {
  n += 0.1;
  if (Math.abs(n - 0.3) < Number.EPSILON) break;
}
console.log(`Stopped at ${n}`);
