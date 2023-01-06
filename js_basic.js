// ---<1> 역사--------------------------------
// 필기 생략. 알고만 있으믄 됨.



// ---<2> 콘솔 출력, script async 와 defer의 차이점 및 앞으로 자바스크립트 공부 방향--------------------------------
console.log('hello world');
// 화면에 띄워봄

// console은 api 중 하나임
// -> Application Programming Interface
// 브라우저가 제공하는 함수들

// dev tools 잘 활용하면 좋다
// f12 개발자도구임. 
// console tab에 들어가서 js입력 가능
// source tab 디버깅
// network tab 네트워크 상태

//js 공식사이트 ecma인데 난해해서 mdn가라~

// async 와 defer
// html에 js 효율적으로 넣는 법?
// fetch: js에서 서버로 네트워크 요청 보내고 응답 받게 해주는 메서드
// executing: 실행
// 1. <head>에 넣기: html 파싱 멈추고 js다운받고 다시 파싱하는거. js크면 웹사이트 뜨는 시간 많이 걸림
// 2. <body>에 넣기: 사용자가 기본html 컨텐츠는 빨리보겠지만 js에 의존적인 사이트라면 정상적인 페이지 보기 전까지 받는 시간 걸림
// 3. <head>에 넣 + async: async는 불리언 값이라 선언하는 것만으로 사용 가능...?다운로드 시간 절약 가능하나 js가 html다운 다되기 전에 실행되므로
//                         js에서 쿼리셀렛터 이용해서 돔 요소 조작한다하면 조작하려는 시점에 html필요한 부분이 정의 안되어있을 수 있다!
//                         파싱 동안에 js실행을 위해 멈출 수 있어서 사용자가 페이지 보는데 여전히 시간 걸림
// 4. <head> + defer: 파싱하다 defer명령하고 끝까지 파싱한 뒤 js호출함. 다운은 받아놓고 보여주는건 html뒤에 하는 거임

// 위에서 알게 되는
// async 와 defer의 차이
// async:는 다운된 것부터 실행됨. 코딩순서 노 상관
// defer: 다운만 다 받아놓고 실행순서는 코딩순서대로 -> 효율, 안전!

'use strict'
// 이거 쓰고 시작하는게 좋다. 만들 때 빨리 만들어서 비상식적으로 문법이 유연하기 때문. 이를 제어하는 문장





// ---<3> 데이터타입, data types, let vs var, hoisting--------------------------------

// 1. Use strict
// added in ES 5
// use this for Vanila JS
'use strict'

// 2.Variable
// rw(read/write)
// let (added in ES 6) -> 변수 선언할 수 있는 단 하나의 키워드!
// ES6전에는 var를 썼다 (don't ever use this!)
// block scope
let globalname = 'global name'; // 글로벌 변수~
{
  let name = 'ellie';
  console.log(name);
  name = 'hello';
  console.log(name);
  console.log(globalname);  // 스코프 안,밖에서 다 나옴
}
// console.log(name);
console.log(globalname); 

// var를 썼다 (don't ever use this!)
// 이유1. var hoisting (move declaration from bottom to top)
// 이유2. has no block scope (블럭 밖에서도 호출 가능)
console.log(age); // undefined가 나와버림(값은 없으나 선언됨)
age = 4;
console.log(age); // 4 나와버림
var age;

{
  n = 2;
  var n;
}
console.log(n); // 블럭 밖인디 2 호출됨

// name = 4;
// let name; let은 에러라고 나온다


// 3. Constant 상수
// r(read only)
// use const whenever possible.
// only use let if variable needs to change.
// 값을 갈키는 포인터가 잠겨있다.

// Note! 데이터 타입 종류
// Immutable data types: primitive types, frozen objects (i.e. objects.freeze())
// Mutable data types: all objects by default are mutable in JS
// 객체는 변경 가능
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// **js는 변수 선언시 mutable type의 let, immutable type의 const를 씀

// 4.Variable types
// 메모리에 값이 저장되는 방법
// 1. primitive : 값 자체를 저장
// 2. object : 너무 커서 메모리에 한번에 올릴 수 없.
//             object를 갈키는 레퍼런스가 저장됨. 이름과 나이 등 나뉘어 저장?

// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

const count = 17; // integer
const size = 17.1; // decimal number 십진소수법 같음.쉽게는 소수
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speicla numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity); 
console.log(nAn); 

// bigInt (fairly new 최근 추가, don't use it yet)
// 크롬과 파폭만 인식함. 딴 곳에선 에러 뜸. 그리고 너무 큰 숫자라 흔하게 안 쓴다.
const bigInt = 12345678901234567890; //over (-2**53) ~2**53 / 2의 53승...
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals(string) 스트링에 변수 붙이기
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// 백틱과 콜론 차이
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ' type: ' + typeof helloBob); // 일일이 끊어줘야함

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null; // 빈값이라 지정
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
// let x = undefined; or  let x; 
// console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
// 고유식별자가 필요하거나, 뭐 고유한 식별자를 순서따라 주고플때?
// 아래 두 변수는 다르다
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);  // false

// 같게 하려면 for넣으면 된다. 주어진 스트링에 맞는 심볼을 만들어줘..란 뜻
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);  // true

// console.log(`value: ${symbol1}, type: ${typeof symbol1}`); // 심볼은 이케 하면 오류남
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`); // 이케 해야 심볼이 스트링으로 변환되어 오류 안남


// 5. Dynamic typing: dynamically typed language
// c나 java는 statically type임. 변수 선언시 어떤 타입인지 같이 선언
// js는 변수 선언시 어떤 타입인지 같이 선언 안함.run time시 할당된 값에 따라 변할 수 있
let text = 'hello';
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`); //string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); // number
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`); // string
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`); // number
// console.log(text.charAt(0)); // error (도중에 타입 바뀌어서)
// ->이런 일 없게 하기 위해 타입을 더한 타입스크립트 나옴 





// ---<4> 코딩의 기본 operator, if, for loop 코드리뷰 팁--------------------------------
// 쉽다고 대충하면 안된다. 현업시 실수가 정말 많이 나오는 부분!
// operator.js에 있음