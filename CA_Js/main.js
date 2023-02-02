// 파라미터(인자) 쓰는 이유: 함수에 구멍 뚫어놓으면, 함수 쓸 때 구멍에 뭐 입력 가능
function 알림창열기(구멍) {
  document.getElementById("alert").style.display = 구멍;
}

function 알림창열기(구멍) {
  document.getElementById("ids").style.display = 구멍;
}

function 알림창1열기(구멍) {
  // 1. 제목 바꾸기
  document.getElementById("title").innerHTML = 구멍;
  // 2. 열기
  document.getElementById("alert").style.display = "block";
}

// html에 onclick없이 기능만들기 -> addEventListener
document.getElementById("close").addEventListener("mouseover", function () {
  document.getElementById("alert").style.display = "none";
});

// function 알림창2열기() {
//   // 1. 제목 바꾸기
//   document.getElementById("title").innerHTML = "비번입력하세요";
//   // 2. 열기
//   document.getElementById("alert").style.display = "block";
// }
