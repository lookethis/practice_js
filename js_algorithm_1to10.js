// algorithm문제들 모아본다. 10개

// 1. 369게임

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

// 2. 소수의 합 구하기

function solution() {
  var sum = 0;

  for (var i = 1; i <= 200; i++) {
    // 1~200까지 셈
    for (var j = 2; j <= i; j++) {
      // 2~200까지 셈(소수 판별하려는 범위)
      if (i % j == 0) {
        // 소수는 자기자신으로만 나눠져야하므로
        break;
      }
    }
    if (j == i) {
      sum += j; // j가 소수
    }
  }

  return sum;
}

// 3. 숫자 자릿수 반환

function getDigits(num) {
  let newArr = []; // 답 넣을 배열 마련
  while (num > 0) {
    newArr.push(num % 10); // 1의자리 수 넣기
    num = parseInt(num / 10); // 1의 자리수 넣었으니  num은 1의 자릿수 뺀 수들로 이뤄짐 1100->110
  }
  newArr.reverse(); // 뒤집
  return newArr;
}

// 4. 약수의 약수

function solution(data) {
  let result = [];

  for (i = 1; i <= data; i++) {
    if (data % i === 0) {
      const divisor = [];

      for (j = 0; j <= i; j++) i % j === 0 && divisor.push(j);
      result.push(divisor.join(" "));
    }
  }
  return result.join("\n");
}

function get_divisor(data) {
  let result = [];

  for (let i = 1; i <= parseInt(data); i++) if (data % i === 0) result.push(i);

  return result;
}

function solution(data) {
  let divisor = get_divisor(data);
  let result = [];

  for (let d of divisor) result.push(get_divisor(d).join(" "));

  return result.join("\n");
}

// 5. 구구단: 결과값이 큰 순대로 출력

function solution() {
  let dict = {};
  let result = [];

  for (let i = 2; i <= 9; i++)
    for (let j = 1; j <= 9; j++) dict[i + ' * ' + j] = i * j;

  dict = Object.entries(dict).sort((a, b) => a[1] - b[1]);

  for (let [k, v] of dict) result.push(k + ' = ' + v);

  return result.join('\n')
}
