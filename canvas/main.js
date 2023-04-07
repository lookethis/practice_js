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
