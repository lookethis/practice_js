// 입문자를 위한 자바스크립트 실습
// x = 2*5;
// y = 10*3;

// console.log(x, y);



// 엄격한 === 써
// console.log(0 == '0'); // true
// console.log(0 === '0'); // f

// console.log(0 == false); // true
// console.log(0 === false); // f

// x = 1;
// y = 2;
// console.log(y++); // 해당 줄 이후에 증감, 2
// console.log(++y); // 해당 줄에서 증감, 4

// and, or, not
// console.log(x > 0 && x < 3); // t && t -> t 
// console.log(x > 1 || x < 1); // f || f -> f
// console.log(!(x>y)); // t 

// 변수, 상수 let변수 생성, const상수 생성, var레거시 키워드
// const X_CONSTANT = 1; // 상수는 대부분 대문자+언저바로 구성, 파일 처음(상단에) 기재
// let y = 2;
// y = X_CONSTANT+y;
// console.log(y); //변수는 값 변할 수 있
// X_CONSTANT = X_CONSTANT + 1; 에러!상수는 값 변경 안됨



// 자료형



// 형 변환
// let original = 1;
// console.log(typeof original); // number
// console.log(typeof + "0"); // number
// console.log(typeof !original); // f

// console.log(typeof String(original)); // string
// console.log(typeof Boolean(original)); // boolean
// console.log(typeof Number(original)); // number



// 조건문 3종류
// switch는 브레이크 없으면 조건문들 다 나옴
// const age = 21;
// const sex = 'female';

// if (age >= 19){
//   console.log("19세 이상입니다.");
// } else{
//   console.log("19세 미만입니다."); 
// }

// console.log(age >= 19 ? "19세 이상입니다." : "19세 미만입니다.");

// switch (sex){
//   case 'female':
//     console.log("여성입니다.");
//     break;
//   case 'male':
//     console.log("남성입니다.");
//     break;
//   default:
//     console.log("다 아닙니다.");
// }



// 반복문
// for (let day = 1; day < 5; day++){
//   console.log(`${day}일 지났음`);
// }

// let day2 = 5;
// while(day2) { // 0 -> boolean -> f
//   console.log(`day2 D-${day2}`);
//   day2--;
// }


// let day3 = 0;
// do {
//   console.log(`day3 D-${day3}`);
//   day3--;
// } while (day3 > 0);

// for (let day4 = 5; day4 !== 0; day4--) { // day4 !==0 은 day4라고만 쓰는 것과 같다)
//   if (day4 ===3) continue;
//   if (day4 ===1) break;
//   console.log(`day4 D-${day4}`);
// }



// 함수
// let a = 2; // 밑의 함수에 a의 값 변경한 지역변수 넣고, 밖에 전역변수로 넣을 때랑 비교함

// //넘겨받은 밸류를 숫자형으로 변환하는 함수
// // 0보다 작은 수, 숫자로 변환괼 수 없는 값 -> 0 을 return
// const makeNumber = function (value) {
//   if (value < 0) return 0;

//   let a = 1; // 전역변수를 지역변수가 가림
//   console.log(`지역변수 a`, a);

//   const newValue = Number(value);
//   return isNaN(newValue) ? 0 : newValue;
// };

// console.log(makeNumber(0)); // 0
// // console.log(makeNumber(undefined)); // 0
// // console.log(makeNumber(null)); // 0
// // console.log(makeNumber('23')); // 23

// console.log(`전역변수 a`, a);
// console.log(value, newValue); //  둘다 함수 내에서 생명 끝나서 값 안 나옴



// funA();

// //정의 이전 시점
// function funA () { // 함수 선언식
//   console.log('function A');
// }

// const funB = function () { // 함수 표현식
//   console.log('function B');
// }

// const funC = () => { // 화살표 함수
//   console.log('function C');
// }

// funB();
// funC();



// 객체 기본
// const obj = {
//   a: 1,
//   b: {
//     c: 2,
//     d: 2,
//   }
// };

// const obj2 = Object.assign({}, obj); // Object의 어사인 메서드 이용, 빈 객체에 오브젝트 객체 ㅔ복사하는 코드
// obj2.b.c = 0;
// console.log(obj); 

// const deepCopy = (origin) => {
//   const result = {};
//   for (let key in origin) {
//     if (origin[key] != null && typeof origin[key] === "object") {
//       result[key] = deepCopy(origin[key]);
//     } else {
//       result[key] = origin[key];
//     }
//   }
//   return result;
// }

// const obj3 = deepCopy(obj);
// obj3.b.c = -1;
// console.log(obj);
// console.log(obj3);


// 또 함수..
const person = {
  name: '아무개',
  something: '',
  talk: (sentence) => {
    console.log(sentence);
  }
}

person.talk(`제 이름은 ${person['name']}입니다.`);

person.name = '우희은';
person.talk(`제 이름은 ${person['name']}입니다.`);

console.log('something' in person);
person.something = undefined;
console.log(person);
delete person.something;
console.log(person);

for (let key in person) {
  console.log(key);
}

console.log(pereson.address?.city); // undefined

// const name = person.name; 이거랑
// const talk = person.talk; 이거를 밑이 더 간단하게 나타내고 있음
const { name, talk } = person;
console.log(name, talk);






