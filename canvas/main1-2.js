const canvas = document.querySelector(".canvas");
const context = canvas.getContext("2d");
let x축으로이동 = 10;
let count = 0;
let timer;

function draw() {
  if (count % 30 === 0) {
    // 그린거 지워줌.
    context.clearRect(0, 0, canvas.width, canvas.height);
    //선 시작
    context.beginPath();
    // 10, 150 위치에 반지름 5인 도형을 0~2파이(360도)각도까지 시계방향으로 그려
    context.arc(x축으로이동, 150, 10, 5, -2, Math.PI * 2, true);
    // context.fill();
    context.stroke();

    x축으로이동 += 10;
    // x축으로이동 변수 넣으니 x축으로 원이 계속 이동하여 선이 그어짐
  }

  // 움직임 정지 방법 1 (밑에 requestAnimationFrame(draw)써줘야 함)
  // if (x축으로이동 >= canvas.width - 10) {
  //   return;
  // } 끝까지 왔을 때 리퀘스트 실행 전에 리턴해서 멈추기

  // 움직임 정지 방법 2 (밑에 draw()만 필요)
  timer = requestAnimationFrame(draw);
  // timer = setInterval(draw, 500) 도 가능

  if (x축으로이동 >= canvas.width - 10) {
    cancelAnimationFrame(timer);
    // clearInterval(timer) 도 가능
  }

  count++; // 카운트로 조건 넣으니 setInterval(너무 남발시 복잡해짐)처럼 실행됨
  // requestAnimationFrame(draw);
  // 자기 안에서 계속 자신을 반복함으로서 계속 그리게 됨
  // 60프레임의 속도로 그린 곳 위에 계속 그리는 것임. 그래서 더러워보임.
}
draw();

// 움직임 정지 방법 3 (위에 draw()만 필요, 클릭시 취소)
canvas.addEventListener("click", () => {
  cancelAnimationFrame(timer);
});
