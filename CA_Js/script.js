document
  .querySelector(".navbar-toggler")
  .addEventListener("click", function () {
    document.querySelectorAll(".list-group")[0].classList.toggle("list-modal");
  });

document.querySelector("#login").addEventListener("click", function () {
  document.querySelector(".black-bg").classList.toggle("show-modal");
});

document.querySelector("#close").addEventListener("click", function () {
  document.querySelector(".black-bg").style.display = "none";
});

// 다크모드 만들기
// 클릭횟수 홀수: 라이트, 짝수: 다크
// 클릭횟수를 먼저 세야 한다.

let count = 0;

document.querySelector(".badge").addEventListener("click", function () {
  count += 1;
  console.log(count);

  if (count % 2 !== 0) {
    document.querySelector(".badge").addEventListener("click", function () {
      document.querySelector(".badge").innerHTML = "Light ⭐";

      document.body.style.backgroundColor = "white";
    });
  } else {
    document.querySelector(".badge").addEventListener("click", function () {
      document.querySelector(".badge").innerHTML = "Dark 🔄";

      // document.body.style.backgroundColor = "black";

      document.querySelector(".a").classList.toggle("dark");
    });
  }
});

// 조건문: 전송 누르면(이벤트리스너)
// 저기 input에 입력한 값이 공백이면(조건), 알림창 띄워주세요

document.querySelector("form").addEventListener("submit", function (e) {
  if (
    document.getElementById("email").value == "" &&
    document.getElementById("pass").value == ""
  ) {
    alert("아이디, 패스워드 입력안함");
    // 폼전송 막기
    e.preventDefault();
  } else if (document.getElementById("email").value == "") {
    alert("아이디 입력안함");
  } else if (document.getElementById("pass").value.length < 6) {
    alert("비번을 6글자 이상 입력해라");
  }
});

document.getElementById("email").addEventListener("click", function () {
  console.log("안녕");
});

// 이성계

let count1 = 0;

document.querySelector("#send-answer").addEventListener("click", function () {
  count1 += 1;
  console.log(count1);
  let year = document.querySelector("#answer").value;

  if (year == "1335") {
    alert("성공");
  } else if (count1 >= 3 && year != "1335") {
    alert("멍청아");
  }
});

// 사은품

// 일정 시간 이후 실행
// setTimeout(function () {
//   document.querySelector(".alert-danger").style.display = "none";
// }, 5000);

// 일정 시간마다 반복
// setInterval(function () {
//   console.log("hello");
// }, 3000);
// 1초마다 문구의 숫자부분을 바꾼다
// 위를 띄운다
// 5초 뒤에 사라지게 한다

// 내 답
// let n = 5;

// setInterval(function () {
//   document.querySelector("#five").innerHTML = n;
//   n -= 1;

//   setTimeout(function () {
//     document.querySelector(".alert-danger").style.display = "none";
//   }, 5000);
// }, 1000);

// 쎔 답
// n이 0이상일 때만 작동해야하므로 이게 맞
// 내 답대로 하믄 시스템은 계속 돌아가고 있음
let n1 = 5;

setInterval(function () {
  n1 -= 1;
  if (n1 >= 0) {
    document.querySelector("#five").innerHTML = n1;
  }

  setTimeout(function () {
    document.querySelector(".alert-danger").style.display = "none";
  }, 5000);
}, 1000);
