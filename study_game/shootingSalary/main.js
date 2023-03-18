/////////////////////////////
// 캔버스 세팅
///////////////////////////
let canvas = document.createElement("canvas"); // 그림 그릴 캔버스 만듦
let ctx = canvas.getContext("2d"); // 이미지 그리는거 도와줄 먼 변수래

// 캔버스 크기
canvas.width = 400;
canvas.height = 700;

// 캔버스를 자식으로 붙여줘라. html의 바디에
document.body.appendChild(canvas);

///////////////////////////////////////////////////////////////////////////////
// 필요한 요소들 변수로 지정
//////////////////////////////////////////

// 이미지들 가져올 변수 지정
let nightcityImage,
  companyImage,
  money500Image,
  money10000Image,
  employeeImage,
  gameOverImage;

// 회사(우주선) 좌표 : 계속 이동하니 따로 빼줌 (높이: 750-50, X는: 200, 기준 무조건 왼위꼭)
let companyX = canvas.width / 2 - 25;
let companyY = canvas.height - 50;

// 이미지 가져옴 (new가 뭔지 봐야함)
function loadImage() {
  nightcityImage = new Image(); // 도시 배경(우주 역할)
  nightcityImage.src = "images/nightcity2.png";

  companyImage = new Image(); // 회사(우주선 역할)
  companyImage.src = "images/company50.png";

  money500Image = new Image(); // 500원(총알1 역할)
  money500Image.src = "images/500.png";

  money10000Image = new Image(); // 만원(총알2 역할)
  money10000Image.src = "images/만원.png";

  employeeImage = new Image(); // 회사원(적 역할)
  employeeImage.src = "images/employee48.png";

  gameOverImage = new Image(); // 회사원(적 역할)
  gameOverImage.src = "images/gameover2.png";
}

////////////////////////////////////////////////////////////////////////////////////
// 유저의 움직임: 키보드에 이벤트 부여, 키보드 움직임대로 좌표값 변화
//////////////////////////

// 누른 버튼들 저장함
let keysDown = {};
// 키보드 누르면 이벤트 만들어 들어주고, 누른 키 다시 사라지게 할 함수
function setupKeyboardListener() {
  document.addEventListener("keydown", function (event) {
    // console.log("무슨 키 눌림?", event.keyCode); // 키코드 대신하려면 뭐 써야하지?

    keysDown[event.keyCode] = true;

    console.log("키다운 객체에 들어간 값은?", keysDown);
  });
  // 위 객체에 올라간 버튼의 키코드값 삭제해주셈
  document.addEventListener("keyup", function (event) {
    delete keysDown[event.keyCode];
    console.log("버튼 클릭 후", keysDown); // 손 떼면 정말 키스다운 객체 비는지 확인
  });
}

// 키보드 입력대로 이미지 좌표값 변화, 캔버스 안에만 있게
function update() {
  if (39 in keysDown) {
    // right
    companyX += 1; // 나는 너무 크게 움직이길래 작은 수를 줬다
  }
  if (37 in keysDown) {
    // left
    companyX -= 1;
  }
  if (38 in keysDown) {
    // up
    companyY -= 1;
  }
  if (40 in keysDown) {
    // down
    companyY += 1;
  }

  // 캔버스 안에서만 움직이게 (위 if들과 같은 선상에 있어야 현 위치에서 바로 반응)
  if (companyX <= 0) {
    companyX = 0;
  }
  if (companyX >= canvas.width - 50) {
    companyX = canvas.width - 50; // 좌표 기준이 이미지 맨위왼쪽이기 때문
  }
  if (companyY <= 0) {
    companyY = 0;
  }
  if (companyY >= canvas.height - 50) {
    companyY = canvas.height - 50; // 좌표 기준이 이미지 맨위왼쪽이기 때문
  }
}

//////////////////////////////////////////////////////////

// 이미지 그리기
function render() {
  //ui를 그려주는 거: 렌더
  // ctx.drawImage(image, dx, dy, didth, dHeight);

  // 각 변수들(이미지들) 그려
  ctx.drawImage(nightcityImage, 0, 0, canvas.width, canvas.height); // 오류: 이거 대문자로 써서 안나왔었
  ctx.drawImage(companyImage, companyX, companyY);
}

// 이미지 그리는 함수를 1번이 아니라 계속 불러야 함, 근데 계속 이러면 컴퓨터가 힘들지 않음?
function main() {
  update(); // 좌표값 없뎃한 다음에,밑의 렌더로 아이콘 이미지 그려줘야함..이걸 계속 보내줌
  render();
  requestAnimationFrame(main);
}

// 이미지 지정하는 함수, 키 눌린거 보여주는 함수, 지정한 이미지 변수들 띄우는 함수 콜
loadImage();
setupKeyboardListener();
main();
