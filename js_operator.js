// ---<4> 코딩의 기본 operator, if, for loop 코드리뷰 팁--------------------------------
// 쉽다고 대충하면 안된다. 현업시 실수가 정말 많이 나오는 부분!
// operator.js에 있음

// 1. string concatenation
console.log('my' + 'cat'); // 문자열 더하기
console.log('1' + 2); // 숫자가 문자로 변환되어 더해짐
console.log(`string literals: 1 + 2 =${1 + 2}`); 

// 2. numeric operators
console.log(1 + 1);  // add
console.log(1 - 1);  // substacct
console.log(1 / 1);  // divide
console.log(1 * 1);  // multiply
console.log(5 % 2);  //remainder
console.log(2 ** 3); // exponentiation 제곱

// 3. increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`); 

const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`); 

// 4. assignment perators
let x = 3;
let y = 6;
x += y;
x -= y;
x *= y;
x /= y;

// 5. comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater
console.log(10 >= 6); // greater than or equal

// 6. logical operators: || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2;

// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`); // 심플한 함수를 맨 앞에, 복잡한 녀석을 맨 뒤에 두는게 효율적 코드

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`); // 심플한 함수를 맨 앞에, 복잡한 녀석을 맨 뒤에 두는게 효율적 코드
// often used to compress long if-statement 
// nullableObject && nullableObject.sosmething // 먼말인지? 굳이 풀어쓰믄 밑처럼 된대
// 뭐 코드 간편하게 쓸 때 좋다나...
// if (nullableObject != null) {
//   nullableObject.something;
// }

function check() {
  for (let i = 0; i < 10; i++) {
    // wasting time
    console.log('🐇');
  }
  return true;
}

// ! (not)
console.log(!value1);

// 7. equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion 타입 변경해서 검사한다
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion 타입 변경없이 검사한다
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = {name: 'ellie'};
const ellie2 = {name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2); // f
console.log(ellie1 === ellie2); // f
console.log(ellie1 === ellie3); // t

// equality - puzzler
console.log(0 == false); // t 맞
console.log(0 === false); // f 맞
console.log('' === false); // t 맞
console.log('' === false); // t 땡!불리언타입 아님------> f!
console.log(null == undefined); // f  땡!--------------> f!
console.log(null === undefined); // f 맞

// 8. conditional operators: if
// if, else if , else
const name3 = 'ellie';
if (name3 === 'ellie') {
  console.log('welcome, ellie');
} else if (name3 === 'coder') {
  console.log('you are amazing coder');
} else {
  console.log('unknown');
}

// 9. ternary operator: ?
// condition ? value1 : value2;
console.log(name3 === 'ellie' ? 'yes' : 'no');

// 10.switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
  case 'IE':
    console.log('go away!');
    break;
  case 'Chrome':
    console.log('love you!');
    break;
  case 'Firefox':
    console.log('love you!');
    break;
  default:
    console.log('same all!');
    break;
}

// 11. loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop
// body code is executed first, 특이하군..블럭먼저 실행하고플때 써
// then check the condition.
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for loop
// for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  // inline variable declaration
  console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j:${j}`);
  }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
// Q2. iterate fron 0 to 10 and print numbers until reaching 8 (use break)

for (let i = 0; i < 11; i++) {
  if (i % 2 !== 0) {
    continue; // 물론 여기에 console.log(`q1. ${i}`);쓰는게 더 간단이나 연습삼아
  }
  console.log(`q1. ${i}`);
}

for (let i = 0; i < 10; i++) {
  if (i > 8) {
    break;
  }
  console.log(`q1. ${i}`);
}








