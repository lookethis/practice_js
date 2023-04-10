const canvas = document.querySelector(".canvas");
const context = canvas.getContext("2d");
const control = document.querySelector(".control");
const saveBtn = document.querySelector(".save-btn");
const resultImage = document.querySelector(".result-image");

let drawingMode = false;
let brush = "color"; // 'color'혹은 'image' 선택
let colorValue = "black"; // 색 기본값

const img1 = new Image();
img1.src = "images/벅앞3.png";
img1.addEventListener("load", () => {
  context.drawImage(img1, 10, 10, 100, 140);
  // 그림, 원점에서 떨어진 위치 xy축, 그림 크기
});

//붓으로 쓸 용도의 그림 가져오기
const img2 = new Image();
img2.src = "images/벅앞3.png";

function downHandler(이벤트) {
  drawingMode = true; //마우스 누를 때 그림 그려지게
}

function upHandler(이벤트) {
  drawingMode = false; // 마우스 떼면 그림 안그려짐
}

function moveHandler(이벤트) {
  console.log(이벤트.clientY); // (0,0) - 브라우저 왼 위(layerX, layerY 이제 안 써)
  console.log(이벤트.offsetY); // (0,0) - 캔버스 왼 위, 즉 원하는 위치에 그릴 수 있게 해줌

  if (!drawingMode) return;

  switch (brush) {
    case "color":
      context.beginPath();
      context.arc(이벤트.offsetX, 이벤트.offsetY, 10, 0, Math.PI * 2, false);
      context.fill();
      break;
    case "image":
      context.drawImage(img2, 이벤트.offsetX, 이벤트.offsetY, 50, 60);
      break;
  }
}

function setColor(이벤트) {
  // 부모 클래스 골랐으니 자식 중 정확히 고르려면 이벤트 객체의 타겟으로 선택해야 됨.
  // data-color라는 속성을 가진 애들을 데려와야 함

  brush = 이벤트.target.getAttribute("data-type");
  colorValue = 이벤트.target.getAttribute("data-color");
  context.fillStyle = colorValue; // 여러 색 나오게 할거라 색채우기를 변수로
}

function createImage() {
  // 변수: 캔버스 데이터를 그림으로 저장
  const url = canvas.toDataURL("images/png");
  // 이미지 저장하면 그린 이미지를 png로 밑에 띄워줌
  const img2 = new Image();
  img2.src = url;
  resultImage.appendChild(img2);
}

canvas.addEventListener("mousedown", downHandler);
canvas.addEventListener("mousemove", moveHandler);
canvas.addEventListener("mouseup", upHandler);
control.addEventListener("click", setColor);
saveBtn.addEventListener("click", createImage);
