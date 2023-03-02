// if/else, function 실력향상 과제

// 1. 3의 배수 박수치기 알려주기 겜

function 삼육구게임(n) {
  if (n % 3 === 0) {
    console.log("박수");
  } else {
    console.log("통과");
  }
}

삼육구게임(16);

// 2. 위 업글: 9의 배수는 박수 2번

function 삼육구게임2(n) {
  if (n % 9 == 0) {
    console.log("박수2번");
  } else if (n % 3 == 0) {
    console.log("박수");
  } else {
    console.log("통과");
  }
}
삼육구게임2(18);

// 업글. 원래 369룰 적용?
function 삼육구게임3(n) {
  let n2 = String(n);

  if (
    n2.charAt(n2.length - 1) == 3 ||
    n2.charAt(n2.length - 1) == 6 ||
    n2.charAt(n2.length - 1) == 9
  ) {
    console.log("박수!");
  } else {
    console.log("통과!");
  }
}
삼육구게임3(19);

function 삼육구게임4() {
  for (let i = 1; i < 19; i++) {
    if (i % 10 == 3 || i % 10 == 6 || i % 10 == 9) {
      console.log(i, "clap");
    }
  }
}
삼육구게임4();

function solution() {
  var answer = [];

  for (var i = 1; i <= 30; i++) {
    if ((i % 10) % 3 == 0 && i % 10 != 0) {
      answer.push("짝!");
    } else if (Math.floor((i / 10) % 3) == 0 && Math.floor(i / 10) != 0) {
      answer.push("짝!");
    } else {
      answer.push(i);
    }
  }

  return answer;
}
// 이런거 내가 진짜 꾸준히 못하는 문제....
// https://codingapple.com/forums/topic/369%EA%B2%8C%EC%9E%84-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%A0%95%EB%8B%B5%EC%A2%80-%EB%B6%80%ED%83%81%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4/

// 3. 공인중개사 점수 입력하면 합격 알려주는 함수

function 합격했냐(n, m) {
  if (n < 0 || n > 100 || m < 0 || m > 100) {
    console.log("장난하지마라 방구야");
    // alert("장난하지마라 방구야");
  } else if (n < 40 || m < 40) {
    console.log("과락, 불합격");
  } else if (n + m >= 120) {
    console.log("합격!");
  } else {
    console.log("불합격");
  }
}
합격했냐(70, 50);
합격했냐(70, -50);

////////////////////
///////////////////
///////////////////

// 변수, 사칙연산 실력향상 과제

// 1. 변수 만들자

let mybank = "100000000won";
const age = 19;
const born = "here";

// 2. 다음 상황 예측해봐라
var name = "park";
var id = 0;

function showName() {
  var name = "kim";
  var id = 1;
  console.log(name);
}

showName();
console.log(id);
// 내 예상: kim, 1
// 답 : kim, 0(name과 다르게 밖에서 안 쓰여봐서)

// 3. 이자율 계산

let 예금액 = 60000;
let 미래예금액 = 0;

if (예금액 >= 50000) {
  미래예금액 = 예금액 * 1.2 * 1.2;
} else {
  미래예금액 = 예금액 * 1.15 * 1.15;
}

console.log(미래예금액);

// 4. 최대 마실 수 있는 커피양

let first = 360;

function coffee(n) {
  console.log(n + (2 / 3) * n + (4 / 9) * n);
}

coffee(first);

// 5. 간단 퀴즈 ui(html에 있다)
let count = 0;

document.querySelector("#send-answer").addEventListener("click", function () {
  count += 1;

  let year = document.querySelector("#answer").value;

  if (year == "1335") {
    alert("성공");
  } else if (count >= 3 && year != "1335") {
    alert("멍청아");
  }
});

// 그냥 외부 첨가 문제
// 소수의 합 구하기

function solution() {
  var sum = 0;

  for (var i = 1; i <= 200; i++) {
    // 1~200까지 셈
    for (var j = 2; j <= i; j++) {
      // 2~200까지 셈(소수 판별하려는 범위)
      if (i % j == 0) {
        break;
      }
    }
    if (j == i) {
      sum += j; // j가 소수
    }
  }

  return sum;
}
