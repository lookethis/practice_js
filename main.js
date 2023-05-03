// 내가 헷갈리는, 모르는 것 시리즈 

// < 1 > 자료형data types 4개별 연산, 변경,  자르기/붙이기, 형 변환, 꺼내기 
// forEach, map, filter 적용 방법 (추후)

// 예제의 원활한 중복 사용을 위해 변수 선언에 var이용
// 일단 소수, 불리언, undefined, null 제외함 -> 간단한 프로젝트와 코딩테스트 준비용이라

// ********** 0. 공통 사항 **********
// 서로 다른 타입의 피연산자를 단순히 '붙일(+)' 수만 있다. number에서만 연산
var a = 1
var b = '23'
var c = [4, 5, 6]
var d = {name: 7, count: 8}

// console.log(a+b) // 123
// console.log(b+c) // 234,5,6
// console.log(c+d) // 4,5,6[object Object]
// console.log(d+a) // [object Object]1
// console.log(d+b) // [object Object]23

// console.log(a-b) // -22, 빼는 건 문자와 스트링 사이만 가능
// console.log(b-a) // 22
// console.log(b-c) // NaN
// console.log(c-d) // NaN
// console.log(d-a) // NaN
// console.log(d-b) // NaN

// ********** 0-1. 연산자 **********
// 하나 이상의 표현식을 대상으로 산술, 할당 등 수행해 하나의 값을 만든다.

// 산술 연산자
var area = 5 * 4; // 20

// 문자열 연결 연산자
var str = 'My name is ' + 'Lee'; // "My name is Lee"

// 할당 연산자
var color = 'red'; // "red"

// 비교 연산자
var foo = 3 > 5; // false

// 논리 연산자
var bar = (5 > 3) && (2 < 4);  // true

// 타입 연산자
var type = typeof 'Hi'; // "string"

// 인스턴스 생성 연산자
var today = new Date(); // Sat Dec 01 2018 00:57:19 GMT+0900 (한국 표준시)

// ********** 0-2. Wrapper Object **********
// 

// ********** 0-3. Method **********
// 

// ********** 1. number **********
var a = 10
var b = 20
var c = 30

// 값 사칙연산
// console.log(a+b) //  30
// console.log(a-b) // -10  
// console.log(a*b) // 200  
// console.log(a/b) // 0.5

// 변경 --> 불가능. 새 값을 만들어서 바꿔야 함. 둘째 자리값 5로 바꾸기
// var newC = Number(c.toString().replace(/^(.)(.)/, '$25')); // 5
// console.log(newC) // 5 / replace 좀더 봐라

// 형 변환
// console.log(a.toString()) // 10 / number -> string
// console.log(String(a)) // 10 / number -> string, new없이 활용
// console.log(b+'') // 20 / 암묵적 타입 변환 array -> string

// 성분 꺼내기
// var newB = Math.floor(b / Math.pow(10, Math.floor(Math.log10(b)))); // 2
// console.log(newB) // 2 

// 자르기, 붙이기
// var newA = a % 100; // 10 / 뒤 2자리 숫자만 잘라
// console.log(newA)

// let newAB = a.toString() + b.toString(); // 1020 / 붙이기는 그냥 문자형 변환
// console.log(newAB)


// ********** 2. string **********
var a = '40'
var b = '50'
var c = '60'
var d = '50.3'
var e = '12345.6'

// 값 사칙연산
// console.log(a+b) // 4050 , 왜 이것만 그냥 붙인 형태지? 나머진 number같이 계산
// console.log(a-b) // -10 
// console.log(a*b) // 2000 
// console.log(a/b) // 0.8

// 변경 --> 불가능. 새 값을 만들어서 바꿔야 함, 둘째 자리값 5로 바꾸기
// var newC = Number(c.toString().replace(/^(.)(.)/, '5$1')); // 56
// console.log(newC) // 56 / replace 좀더 봐라

// 형 변환
// console.log(parseInt(a)) // 40 / 소수 없는 정수
// console.log(parseFloat(b)) // 50 / 소수 있는 실수(왜 50?)
// console.log(Number(c)) // 60 / string -> number
// console.log(+d) // 50.3 / 암묵적 타입 변환 string -> number (*1도 가능)

// 성분 꺼내기
// let newD = parseInt(d.charAt(0)); // 5
// console.log(newD) // 5

// 자르기, 붙이기(0에 있음)
// let newE = e.substring(1); // 2345.6 / 맨앞 1자리 제외하고 뒷자리 자르기
// let newE2 = e.slice(1); // 2345.6 / 맨앞 1자리 제외하고 뒷자리 자르기
// let newE3 = e.split(1); // [ '', '2345.6' ] / 맨앞 1자리 기준 그 뒤와 나눠 자른뒤 배열 생성



// ********** 3. array **********
var a = [11, 22, 33]
var b = [44, 55, 66]
var c = ['11', '22', '33']

// 값 사칙연산
// let sum = Number(a[0]) + Number(b[2]); // 77
// let sum1 = Number(a) + Number(b); // NaN
// console.log(a+b) // 11,22,3344,55,66
// console.log(a-b) // NaN
// console.log(a*b) // NaN 
// console.log(a/b) // NaN

// 변경: 일부 인덱스 값 바꾸기, 특정 인덱스 특정 자릿수 값 바꾸기
// a[1] = 5; // [11, 5, 33]

// 형 변환
// console.log(a.toString()) // 11,22,33 / array -> string 
// console.log(b+'') // 44,55,66 / array -> string 암묵적 타입 변환 
// console.log(Number(b)) // NaN / 숫자로 변환 안됨
// console.log(+c) // NaN / 숫자로 암묵적 변환 안됨

// 성분 꺼내기
// let newA = a[0]; // 11

// 자르기, 붙이기
// let newB = b.slice(-2); // [55, 66]

// let newB2 = b.concat(c); // 그냥 인덱스 붙이기, [ 44, 55, 66, '11', '22', '33' ]



// ********** 4. object **********
var a = {name: 'a', age: 111}
var b = {name: 'b', age: 222}
var c = {name: 'c', age: 333}

// 값 사칙연산
// console.log(a+b) // [object Object][object Object]
// console.log(a-b) // NaN
// console.log(a*b) // NaN
// console.log(a/b) // NaN

// 변경
a.name = 1 // { name: 1, age: 111 } / value 바꾸기

c.firstname = c.name;
delete c.name // { age: 333, firstname: 'c' } / key 바꾸기


// 형 변환
// console.log(a.toString()) // [object Object] / x
// console.log(b+'') // [object Object] / object -> string암묵적 타입 변환 x

// 성분 꺼내기
// let newA = Object.keys(a)[0]; // name / key꺼냄
// console.log(b.name) // b / value꺼냄

// 자르기, 붙이기
// let keysB = Object.keys(b).slice(-1); // [ 'age' ]
// let keysB2 = Object.values(b).slice(-1); // [ 222 ]
