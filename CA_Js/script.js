document
  .querySelector(".navbar-toggler")
  .addEventListener("click", function () {
    document.querySelectorAll(".list-group")[0].classList.toggle("list-modal");
  });

document.querySelector("#login").addEventListener("click", function (e) {
  e.target;
  console.log(e.target);
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

// 스크롤 ////////////////////////////////////////////////

window.addEventListener("scroll", function () {
  // console.log(window.scrollY);
  // y방향으로 위에서부터 얼마나되는 거리로 스크롤했나 순간순간 보여줌

  // window.scrollTo(0, 500);
  // 항상 특정지점으로 스크롤해줌
  // 부트스트랩 설치시 이 기능이 부드럽
  // 부드럽게되는거 없애려믄 root에서 처리

  window.scrollBy(0, 100);
  // 이거는 현 스크롤에서 이동시킨다는디 뭐인지 몰겄음
});

//$()는 document.querySelector

// $(window).on("scroll", function () {
//   $(window).scrollTop();
//   // 현 위치. 스크롤와이랑 가타
// });

// 숙제 1. 페이지 스크롤바 100px내리면 폰트 작게

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    document.querySelector(".navbar-brand").style.fontSize = "20px";
  } else {
    document.querySelector(".navbar-brand").style.fontSize = "25px";
  }
});

// 숙제2. 회원약관 스크롤

// 스크롤 다 내렸을 때 알람 띄우기
// div의 스크롤바 내린 양 + 지금 화면에 보이는 div높이 == div의 실제높이
document.querySelector(".lorem").addEventListener("scroll", function () {
  var 스크롤양 = document.querySelector(".lorem").scrollTop;
  var 실제높이 = document.querySelector(".lorem").clientHeight;
  var 높이 = document.querySelector(".lorem").scrollHeight;
  if (스크롤양 + 높이 > 실제높이 - 10) {
    alert("다 읽음");
  }
});

// scroll주의점
// 1. 스크롤 이벤트리스너 안 코드는 1초에 60번 이상 실행됨..너무 많이 쓰지 마라

document.documentElement.scrollHeight; // 현재 웹페이짖 실제 높이
// documentElement = querySelector("html")
document.querySelector("html").clientHeight; // 창의 보이는 높이

document.querySelector("html").scrollTop; // 아래와 같음
window.scrollY; // 스크롤 얼마나 했는지

///////////////////////////////////////////////
// 스크롤 응용 숙제
// 스크롤 가로 게이지? 만들어봐랏

// 스크롤 만들고 안 보이게 해놨다가
// 1(30,50,100)퍼 내리면 1퍼(30,50,100) 보이게

window.addEventListener("scroll", function () {
  if (window.scrollY >= 10) {
    document.querySelector(".scroll-bar").style.width = "10vw";
  }
  if (window.scrollY >= 300) {
    document.querySelector(".scroll-bar").style.width = "30vw";
  }
  if (window.scrollY >= 500) {
    document.querySelector(".scroll-bar").style.width = "100vw";
  }
});
