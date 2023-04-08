// <1> 게임 설계 !!!

// 함수 많아지는 이유: 한 함수엔 한 역할이 있어야 알아보기 좋기 때문

//----------------------
//----- 캔버스 세팅 -----
//----------------------

// 그림 그릴 캔버스 만듦
let canvas = document.createElement("canvas");
// ctx = context: 그리기 영역, 그리기 메서드 갖는 객체
let ctx = canvas.getContext("2d");

// 캔버스 크기
canvas.width = 400;
canvas.height = 700;

// 캔버스를 자식으로 붙여줘라. html의 바디에
document.body.appendChild(canvas);

//-------------------------------------------
//----- 필요한 요소들 가져와서 변수로 지정 -----
//-------------------------------------------

// 이미지들 가져올 변수 지정
let nightcityImage,
  companyImage,
  money500Image,
  money10000Image,
  employeeImage,
  employee2Image,
  bossImage,
  gameOverImage;

let gameOver = false; // true로 바꾸면 게임 종료
let salary = 0; // 월급(점수)

// 회사(우주선) 좌표 : 계속 이동하니 따로 빼줌 (높이: 750-50, X는: 200, 기준 무조건 왼위꼭)
let companyX = canvas.width / 2 - 25;
let companyY = canvas.height - 60;

// 돈 저장 리스트
let money500List = [];
// 돈(총알) 위치 지정
function money500() {
  // this: 돈
  this.x = 0;
  this.y = 0;

  // 돈이 회사로부터 나가니, 항상 초기화
  // 우주선 가운데에서 돈이 나오게 하기 위해 this.x,y조절
  this.init = function () {
    this.x = companyX + 5;
    this.y = companyY + 5;
    this.alive = true; // 트루면 보이는 돈

    money500List.push(this);
  };

  // 돈 발사 기능 함수(y값 업뎃한다는 뜻)
  // 진짜 난 왜 수치에 비해 표현값?이 크지..?
  this.update = function () {
    // 문제점: 돈이 화면 밖을 나가면 사원을 미리 맞춤 -> 돈의 위치가 y <= 0이면 죽게 해야

    if (this.y <= 60) {
      this.alive = false;
    }
    this.y -= 2;
  };

  // 적군 죽음(돈과 적군이 닿음)
  // 1. 돈 y값 <= 적 y값, 돈 x >= 적x, 돈 x <= 적x + 적군 너비
  this.checkHit = function () {
    for (let i = 0; i < employeeList.length; i++) {
      if (salary > 15) this.alive = false;
      if (
        this.y <= employeeList[i].y && // y좌표: 돈이 적과 같거나 작은 좌표에 있어야 함
        this.x >= employeeList[i].x - 25 && // x좌표: 적군의 왼끝과 오른끝 좌표 사이에 있어야 함
        this.x <= employeeList[i].x + 85 // 적의 절반이상 맞으면 죽을 수 있게 적의 너비 -+ 너비 1/2를 해줌
      ) {
        // 적군이 돈에 닿으면 월급(받은 사원 수) 수 올라감
        salary++;
        this.alive = false; // 돈 안보인다.동전 죽음
        employeeList.splice(i, 1); // 죽은 동전을 잘라냄
      }
    }
  };
}

// 돈 저장 리스트
let money10000List = [];
// 돈(총알) 위치 지정
function money10000() {
  // this: 돈
  this.x = 0;
  this.y = 0;

  // 돈이 회사로부터 나가니, 항상 초기화
  // 우주선 가운데에서 돈이 나오게 하기 위해 this.x,y조절
  this.init = function () {
    this.x = companyX + 5;
    this.y = companyY + 5;
    this.alive = true; // 트루면 보이는 돈

    money10000List.push(this);
  };

  // 돈 발사하는 함수(y값 업뎃한다는 뜻)
  // 진짜 난 왜 수치에 비해 표현값?이 크지..?
  this.update = function () {
    // 문제점: 돈이 화면 밖을 나가면 사원을 미리 맞춤 -> 돈의 위치가 y <= 0이면 죽게 해야

    if (this.y <= 60) {
      this.alive = false;
    }
    this.y -= 2;

    if (salary >= 30 || salary < 15) {
      this.alive = false;
    }
  };

  // 적군 죽음(돈과 적군이 닿음)
  // 1. 돈 y값 <= 적 y값, 돈 x >= 적x, 돈 x <= 적x + 적군 너비
  this.checkHit = function () {
    for (let i = 0; i < employeeList.length; i++) {
      if (
        this.y <= employeeList[i].y && // y좌표: 돈이 적과 같거나 작은 좌표에 있어야 함
        this.x >= employeeList[i].x - 25 && // x좌표: 적군의 왼끝과 오른끝 좌표 사이에 있어야 함
        this.x <= employeeList[i].x + 85 // 적의 절반이상 맞으면 죽을 수 있게 적의 너비 -+ 너비 1/2를 해줌
      ) {
        // 적군이 돈에 닿으면 월급(받은 사원 수) 수 올라감
        salary++;
        this.alive = false; // 돈 안보인다.동전 죽음
        employeeList.splice(i, 1); // 죽은 동전을 잘라냄
      }
    }
  };

  this.checkHit2 = function () {
    for (let i = 0; i < employee2List.length; i++) {
      if (
        this.y <= employee2List[i].y && // y좌표: 돈이 적과 같거나 작은 좌표에 있어야 함
        this.x >= employee2List[i].x - 25 && // x좌표: 적군의 왼끝과 오른끝 좌표 사이에 있어야 함
        this.x <= employee2List[i].x + 85 // 적의 절반이상 맞으면 죽을 수 있게 적의 너비 -+ 너비 1/2를 해줌
      ) {
        // 적군이 돈에 닿으면 월급(받은 사원 수) 수 올라감
        salary++;
        this.alive = false; // 돈 안보인다.동전 죽음
        employee2List.splice(i, 1); // 죽은 동전을 잘라냄
      }
    }
  };
}

// 근로자 x위치 생성 함수
// 화면에 보이는 값을 주기 위해 최소,최대값 미리 설정
// 최대~최소 사이 랜덤값 설정방법을 구글링함
function generateRandomValue(min, max) {
  let randomNum = Math.floor(Math.random() * (max - min + 1));
  return randomNum;
}

// 적 저장 리스트
let employeeList = [];
// 근로자(적)의 위치 생성
function employee() {
  this.x = 0;
  this.y = 0;

  this.init = function () {
    this.y = 0;
    this.x = generateRandomValue(0, canvas.width - 50);
    employeeList.push(this);
  };

  // y좌표 증가시켜 위치 업뎃시키는 함수
  this.update = function () {
    if (employeeList.length > 15) {
      this.alive = false;
    }

    this.y += 0.4;

    // 위치 증가하다가 캔버스 바닥에 닿을때 겜 오버
    if (this.y >= canvas.height - 48) {
      gameOver = true;
      console.log("game over");
    }
  };
}

let employee2List = [];
function employee2() {
  this.x = 0;
  this.y = 0;

  this.init = function () {
    this.y = 0;
    this.x = generateRandomValue(0, canvas.width - 50);
    employee2List.push(this);
  };

  // y좌표 증가시켜 위치 업뎃시키는 함수
  this.update = function () {
    if (employee2List.length > 15) {
      this.alive = false;
    }

    this.y += 0.4;

    // 위치 증가하다가 캔버스 바닥에 닿을때 겜 오버
    if (this.y >= canvas.height - 48) {
      gameOver = true;
      console.log("game over");
    }
  };
}

// 이미지 가져옴 (new가 뭔지 봐야함)
function loadImage() {
  nightcityImage = new Image(); // 도시 배경(우주 역할)
  nightcityImage.src = "images/nightcity2.png";

  companyImage = new Image(); // 회사(우주선 역할)
  companyImage.src = "images/company5060.png";

  money500Image = new Image(); // 500원(총알1 역할)
  money500Image.src = "images/500.png";

  money10000Image = new Image(); // 만원(총알2 역할)
  money10000Image.src = "images/만원.png";

  employeeImage = new Image(); // 회사원(적 역할)
  employeeImage.src = "images/employee50.png";

  employee2Image = new Image(); // 회사원(적 역할)
  employee2Image.src = "images/employee2.png";

  bossImage = new Image();
  bossImage.src = "images/boss.png";

  gameOverImage = new Image(); // 게임 종료
  gameOverImage.src = "images/gameover2.png";
}

//----------------
//-----움직임 -----
//----------------

// 유저의 움직임: 키보드에 이벤트 부여, 키보드 움직임대로 좌표값 변화

// 누른 버튼들 저장함
let keysDown = {};

// 키보드 누르면 이벤트 만들어 들어주고, (밑 함수)누른 키에서 손 떼면 다시 사라지게 할 함수
function setupKeyboardListener() {
  document.addEventListener("keydown", function (event) {
    // console.log("무슨 키 눌림?", event.keyCode);
    // 키코드 대신하려면 뭐 써야하지?

    keysDown[event.keyCode] = true;

    console.log("키다운 객체에 들어간 값은?", keysDown);
  });

  // 키보드 손 떼면, 위 객체에 올라간 버튼의 키코드값 삭제해주셈
  document.addEventListener("keyup", function (event) {
    delete keysDown[event.keyCode];

    console.log("버튼 클릭 후", keysDown);
    // 손 떼면 정말 키스다운 객체 비는지 확인

    if (event.keyCode == 32) {
      createMoney500(); // 스페이스 바 손 떼면 총알 생성
      createMoney10000();
    }
  });
}

// 위에서 선언한 돈(총알) 생성 함수임, 더 위의 돈 생성 함수를 찍어낸다.
function createMoney500() {
  let m = new money500();
  m.init(); // this.init 호출(x,y값 세팅, 만든 총알을 리스트에 넣어줌)
  console.log("새 돈 리스트", money500List);
}

function createMoney10000() {
  let m10000 = new money10000();
  m10000.init(); // this.init 호출(x,y값 세팅, 만든 총알을 리스트에 넣어줌)
  console.log("새 돈 리스트", money10000List);
}

// 근로자(적) 생성
function createEmployee() {
  const interval = setInterval(function () {
    let e = new employee();
    e.init();
  }, 1000);
}

function createEmployee2() {
  const interval = setInterval(function () {
    let e = new employee2();
    e.init();
  }, 1000);
}

// 값 업데이트 하는 곳! 위치,돈1과 2 살았냐..
// 키보드 입력대로 이미지 좌표값 변화, 캔버스 안에만 있게
function update() {
  if (39 in keysDown) {
    // right
    companyX += 1.5; // 나는 너무 크게 움직이길래 작은 수를 줬다
  }
  if (37 in keysDown) {
    // left
    companyX -= 1.5;
  }
  if (38 in keysDown) {
    // up
    companyY -= 1.5;
  }
  if (40 in keysDown) {
    // down
    companyY += 1.5;
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

  // 돈 y좌표 업데이트하는 함수 호출
  // 그럼 위 this.update 에 쓴대로 y값 계속 준다(발사)
  for (let i = 0; i < money500List.length; i++) {
    if (money500List[i].alive) {
      // 동전 y좌표 업뎃도 하면서, 적을 쳤는지도 확인
      money500List[i].update();
      money500List[i].checkHit();
    }
  }

  for (let i = 0; i < money10000List.length; i++) {
    if (money10000List[i].alive) {
      // 동전 y좌표 업뎃도 하면서, 적을 쳤는지도 확인
      money10000List[i].update();
      money10000List[i].checkHit();
      money10000List[i].checkHit2();
    }
  }

  // 근로자 y좌표 업데이트하는 함수 호출
  for (let i = 0; i < employeeList.length; i++) {
    employeeList[i].update();
  }

  for (let i = 0; i < employee2List.length; i++) {
    employee2List[i].update();
  }
}

//------------------------
//----- 이미지 그리기 -----
//------------------------

function render() {
  //ui를 그려주는 거: 렌더
  // ctx.drawImage(image, dx, dy, didth, dHeight);

  // 각 변수들(이미지들) 그려
  ctx.drawImage(nightcityImage, 0, 0, canvas.width, canvas.height); // 오류: 이거 대문자로 써서 안나왔었
  ctx.drawImage(companyImage, companyX, companyY);
  ctx.fillText(`월급 받은 사원 수: ${salary}`, 20, 30);
  ctx.fillStyle = "white";
  ctx.font = "15px Arial";

  // 돈 그려줘(머니 리스트 각 요소가 살아있으면 보여줘)
  // 돈 2 그려줘
  for (let i = 0; i < money500List.length; i++) {
    if (money500List[i].alive) {
      ctx.drawImage(money500Image, money500List[i].x, money500List[i].y);
    }
  }

  for (let i = 0; i < money10000List.length; i++) {
    if (money10000List[i].alive) {
      ctx.drawImage(money10000Image, money10000List[i].x, money10000List[i].y);
    }
  }

  // 적 그려줘
  for (let i = 0; i < employeeList.length; i++) {
    ctx.drawImage(employeeImage, employeeList[i].x, employeeList[i].y);
  }

  for (let i = 0; i < employee2List.length; i++) {
    ctx.drawImage(employee2Image, employee2List[i].x, employee2List[i].y);
  }
}

// 이미지 그리는 함수를 1번이 아니라 계속 불러야 함, 근데 계속 이러면 컴퓨터가 힘들지 않음?
function main() {
  // if ((money500().alive = true)) ctx.drawImage(bossImage, 80, 100);

  // 게임오버 false일 때만 게임 가동
  if (!gameOver) {
    update(); // 좌표값 없뎃한 다음에,밑의 렌더로 아이콘 이미지 그려줘야함..이걸 계속 보내줌
    render();
    requestAnimationFrame(main);
  } else {
    // 겜오버 되면 겜오버 이미지 뜸
    ctx.drawImage(gameOverImage, 10, 100, 380, 380);
    ctx.drawImage(bossImage, 80, 100);
  }
}

// 이미지 지정하는 함수, 키 눌린거 보여주는 함수, 지정한 이미지 변수들 띄우는 함수 콜
loadImage();
setupKeyboardListener();
main();
createEmployee();
if (salary >= 15) createEmployee2(); // 시작하자마자 적 나옴
// createEmployee2();

// 돈(총알) 발사
// 0. 총알 이미지 가져와
// 1. 키보드를 눌렀다가 손을 떼면(누를 때 나온다면 계속 나오므로)
// 2. 총알의 y좌표가 줄어든다(총알 발사, x좌표는 우주선의 x좌표)
// 3. 발사된 총알을 저장하는 배열 만들기(클래스: 총알마다 x,y성분 존재...는 지금은 함수로 만든다)
// 4. 이 배열의 각 요소를 보이게 render로 그려줌

// 적군의 특징
// 1. 랜덤한 x 위치(x, y, init, update 필요)
// 2. 밑으로 내려옴(y 증가)
// 3. 1초마다 하나씩 나옴(속도 조절 가능)
// 4. 적군이 바닥에 닿으면 게임 오버
// 5. 적군이 돈에 닿으면 사라짐(나중에 애니메이션 추가)
// 6. 적군이 돈에 닿으면 점수가 올라간다

// 적군 죽음(돈과 적군이 닿음)
// 1. 돈 y값 <= 적 y값, 돈 x >= 적x, 돈 x <= 적x + 적군 너비
// 2. 닿은 후: 적군 없어짐 + 점수 오름 + 돈(총알) 안보이게 됨

//--------위까지 게임 설계--------

//-------------------
// <2> 구조 되새김질 !!!

// 대략 순서: 세팅--이미지 가져와 계속 그려-키보드 움직임 주자--위치들 업뎃--키보드+총알 쏘기--적 만들기(총알 비슷 수순+랜덤)--게임오버
//-------------------

//--------
// <3> 고칠 것(필수 기능)!!!
//--------
// 회사원 아이콘 대체
// 동전이 화면 밖에서도 사원들을 맞춤 -> 화면 안에서만 살아있게
// 맞아도 안 없어지는 경우가 있음
// 회사와 적이 닿아도 죽어야함
// 키코드 대체

// 고치면 좋은 것
// 회사 그림 좀 크게, 동전 액수 잘 보이게, 게임오버 그림 잘
// 적군 죽을 때 웃으며 승천하거나 없어지는 효과 보이는 거로

//--------
// <4> 수정 + 업그레이드 시도 결과

// 회사와 회사원 아이콘 url바꾸기, 보스 아이콘 불러와서 변수로 만들기 (ㅇ)
// 회사원 아이콘 크기가 달라져 화면에 제대로 나오지 않는 문제 해결 (ㅇ)
// 동전이 화면 밖에서도 사원들을 맞춤 -> 화면 안에서만 살아있게 (ㅇ)

// 적의 왼쪽부분은 돈과 닿아도 사라지지 않음
// -> x좌표를 적군의 너비 사이로 설정했으나, 돈이 적군과 크기가 비슷하여 닿아도 사라지지 않는 듯 보임, 즉 닿는 범위를 늘려야 함
// -> 오류보다는 난이도 설정에 가깝다. 그러나 맞추는 범위는 좌우 균형을 맞춰야 한다. -> 적 너비의 최소 절반과 닿으면 사라지게 하자!(ㅇ)

// 동전 월급 15명 주면 -> 동전 대신 지폐를 쏘게 (ㅇ)

// 월급 지폐로 줄 때 회사원 이미지 교체
// -> 렌더링에 조건을 거니 이미 내려오는 회사원 이미지도 바뀜 -> 생성 조건을 다르게 해야함
// ->생성 조건 다르게 해려고 동전 함수의 alive조건을 다르게 했는데 또 회사원이 안바뀜
// -> 정 안되면 그냥 렌더에 조건 넣어야겄다

// 애초에 돈2도 돈1 보내고 바로 되는거 아니고 돈1들 다 리셋 후 된다. 완전하지 않음. 완전한 기능을 구현하는 건 나중에 해도 될 것 같음

// 월급 30명 주면 보스전 이미지 나오게
