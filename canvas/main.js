// 캔버스

const canvas = document.querySelector(".canvas");
const context = canvas.getContext("2d");

context.fillRect(50, 50, 100, 100); // 특정 위치에 도형 그리기, 기본색: 검정
context.fillStyle = "red"; // 색 바꿈
context.fillRect(0, 0, 100, 100); // 색 바꾼 이후, 도형은 바뀐 색으로 그려짐
context.clearRect(80, 80, 50, 50); // 특정위치 지움
context.strokeRect(150, 150, 100, 100); // 특정위치에 선으로 그림

context.beginPath(); // 선의 시작 알림
context.moveTo(100, 100); // 붓을 원하는 곳으로 옮긴다
context.lineTo(300, 200); // 경로 지정(그은게 보이진 않음)
context.stroke(); // 위의 경로가 보임
context.fill(); // 채우기(선 아님)
context.closePath(); // 그리기 끝

// 호도법 계산 함수 임의로 만듦, 곡선은 베지에 곡선으로 검색
function 라디안(각도) {
  return (각도 * Math.PI) / 180;
}
context.arc(300, 200, 50, 0, 라디안(360), false);
// 300, 200부근에서 50반지름으로 0~360도까지 그림, 방향 시계반대인지 아닌지
context.arc(500, 100, 20, 0, 라디안(360), false);
// 비긴패스 안하고 다른 원 그리면 한붓그리기처럼 선 안 떼고 그려짐
context.fill();
