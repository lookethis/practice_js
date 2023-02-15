// var str = "ddd fff";

// console.log(str.charAt(6)); // 특정 인덱스 문자 출력
// console.log(str.split(" ")); // 공백 기준으로 문자 나눠서 배열로 출력
/////////////////////////////////////////////////////////

// && i % 10 != 0
// function timetable() {
//   var answer = [];

//   for (var i = 1; i <= 30; i++) {
//     if ((i % 10) % 3 == 0 && i % 10 != 0) {
//       // 1자리가 0 아니면서 3,6,9인지 보기
//       answer.push("짝!"); // 1자리 3, 6, 9 인지 보기, 근디 10,20도 포함해버림
//     } else if (Math.floor((i / 10) % 3) == 0 && Math.floor(i / 10) != 0) {
//       answer.push("짝!"); // 10자리 3인지 보기, 10자리 1, 2인 경우는 제외
//     } else {
//       answer.push(i);
//     }
//   }
//   return console.log(answer);
// }
// timetable();

/////////////////////////////////////////////////////////////

// function solution() {
//   var sum = 0;

//   for (var i = 1; i <= 100; i++) {
//     for (var j = 2; j <= i; j++) {
//       if (i % j == 0) {
//         break;
//       }
//     }
//     if (j == i) {
//       sum += j;
//     }

//     return console.log(sum);
//   }
// }
// solution();

// input2 = "10 30 2";

////////////////////////////////////////////////////////////

// function sol(input) {
//   var arr = input.split(" ");
//   console.log(arr);

//   return console.log(arr[1]);
// }

// sol(input2); // 2번쨰 값 나옴

//////////////////////////////////////////////////////////////

// input5 = ["아메", "카페", "카라멜"];

// function solu(input) {
//   // var cost = { 아메: 4100, 카페: 4600, 카라멜: 5100 };
//   var cost1 = {}
//   var answer = 0;

//   for (var i = 0; i < input.length; i++) {
//     console.log(cost.indexOf(i));
//     console.log(input[0]);
//     answer += cost["i"];
//   }
//   return console.log(answer);
// }
// solu(input5);

// 값도 배열로 만들어준다(혹은 객체로?)
// 모든 음료의 밸류를 뽑는다.
// 배열로 입력할 때 배열 각 인덱스를 뽑아서 더하는 식을 써야 출력이 값으로 나옴

///////////////////////////////////////////////////////////////

// var str = "HTML,CSS,JavaScript";
// var count = str.match(/,/g).filter(function (item) {
//   return item !== "";
// }).length;

// 결과 : 2

////////////////////////////////////////////////////////////////

// 직각삼각형
// for (var i = 0; i < n; i++) {
//   for (var j = n - 1; j > i; j++) {
//     console.log("&nbsp");
//   }
//   for (var j = 0; j <= i; j++) {
//     console.log("*");
//   }
// }

for (var i = 0; i < 5; i++) {
  for (var j = 0; j <= i; j++) {
    console.log("*");
  }
  console.log("\n");
}

// 못한 거: 삼각형 각도 구하기, 회문 검사(실행은 맞) 21쪽, 마천루..건물별(실행만 맞)
//          메뉴 값 합, 피라미드 반쪽, 배열 중 숫자만 뽑아내, 잘린 피라미드, 겹친 구간
//          1~10000중 8이 몇번 나오나, 배열 숫지 분류, 암호문 해석..먼말?, 겹친 길이,
//          단어 내 알파벳 갯수 세기(소문자로 변환해서), 떨어진 위치 기준 당근획득 방향
//          먹은만큼 돈 계산,문자열 데이터 압축(연속 알파벳은 숫자로 표현),괄호 짝 맞?
//          배열 인덱스 간 차이로 배열->1갯수,

// 나올 법한 문제(자주 나오는 유형): 피라미드, 숫자(단어)내 특정문자 갯수,
// 위 + 해볼만한 + 본 문제: 객체 다루는, 괄호 짝
