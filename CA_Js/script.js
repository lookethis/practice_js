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
  let 입력값 = document.getElementById("email").value;
  let 입력값2 = document.getElementById("pass").value;

  if (/\S+@\S+\.\S+/.test(입력값)) {
    alert("이메일 형식 아님");
  }

  if (/[A - Z]/.test(입력값2) == false) {
    alert("비번에 대문자 없다");
  }

  // if (
  //   document.getElementById("email").value == "" &&
  //   document.getElementById("pass").value == ""
  // ) {
  //   alert("아이디, 패스워드 입력안함");
  //   // 폼전송 막기
  //   e.preventDefault();
  // } else if (document.getElementById("email").value == "") {
  //   alert("아이디 입력안함");
  // } else if (document.getElementById("pass").value.length < 6) {
  //   alert("비번을 6글자 이상 입력해라");
  // }
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

// 캐러셀

document.querySelector(".slide-1").addEventListener("click", function () {
  document.querySelector(".slide-container").style.transform =
    "translateX(0vw)";
});

document.querySelector(".slide-2").addEventListener("click", function () {
  document.querySelector(".slide-container").style.transform =
    "translateX(-100vw)";
});

document.querySelector(".slide-3").addEventListener("click", function () {
  document.querySelector(".slide-container").style.transform =
    "translateX(-200vw)";
});

// 다음, 이전 버튼 만들기

// 다음버튼 누르믄 컨테이너,translateX가 -100씩 가야해
// 이프>함수:1,4번 누르믄 2번으로(%3 = 1), 2,5번 누르믄 3번으로(%3 = 2), 3,6번 누르믄 1번으로(%3 = 0)
// 이전은: 1번,4 누르믄 3번으로, 2번 누르믄 2번, 3번 누르믄 1번
let cnt = 0;

// 다음버튼 내가 만듦
document.querySelector(".next").addEventListener("click", function () {
  cnt += 1;
  if (cnt % 3 == 0) {
    document.querySelector(".slide-container").style.transform =
      "translateX(0vw)";
  } else if (cnt % 3 == 1) {
    document.querySelector(".slide-container").style.transform =
      "translateX(-100vw)";
  } else if (cnt % 3 == 2) {
    document.querySelector(".slide-container").style.transform =
      "translateX(-200vw)";
  }
});

// 이전버튼 내가 만듦
let cnt1 = 0;

document.querySelector(".previous").addEventListener("click", function () {
  cnt1 += 1;
  if (cnt1 % 3 == 0) {
    document.querySelector(".slide-container").style.transform =
      "translateX(0vw)";
  } else if (cnt1 % 3 == 1) {
    document.querySelector(".slide-container").style.transform =
      "translateX(-200vw)";
  } else if (cnt1 % 3 == 2) {
    document.querySelector(".slide-container").style.transform =
      "translateX(-100vw)";
  }
});
