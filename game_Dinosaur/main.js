//-------- < 0 > 그릴 것, 곳(구역까지) 마련

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

//-------- < 1 >도형 그리자(메인 캐릭터, 장애물(다수,적이기도 함))
// obj는 여러 속성 넣기 편하니 캐릭터로, obj많이 생성하는 건 클래스

// 캐릭터 이름으로 변수 지정, 객체 만든다. 속성,위지 정리하면 편해

let dino1, cactus1;

let dino = {
  x: 10,
  y: 200,
  width: 50,
  height: 50,
  draw() {
    ctx.fillStyle = "blue";
    //ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(dino1, this.x, this.y);
  },
};
// dino.draw();

// 장애물. 다수를 뽑기 위해 클래스를 만든다.->인스턴스 만든다->화면에 그림
class Cactus {
  constructor() {
    this.x = 500;
    this.y = 200;
    this.width = 50;
    this.height = 50;
  }
  draw() {
    ctx.fillStyle = "red";
    //ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(cactus1, this.x, this.y);
  }
}
//let cactus = new Cactus();
// cactus.draw();

dino1 = new Image();
dino1.src = "image/carrot5080.png";

cactus1 = new Image();
cactus1.src = "image/rabbit80100.png";

// 장애물은 여러개 생성해야 함. 지우면 안되니 모음
let cactus여럿 = [];

// 캐릭터들 이미지 가져오잔

//-------- < 2.5 > 움직임 기능 주기

let 점프timer = 0;
let 점프중 = false;
let animation;

// 키보드 누르면 실행해줘라. 그게 스페이스바일 경우
document.addEventListener("keydown", function (e) {
  if (e.code === "Space") {
    점프중 = true;
  }
});

//-------- < 2 > 1초에 60번 실행해주는 함수, 움직임 만들기(requestAnimationFrame()이용)
// 캐릭을 그리는 걸 초당 60번은 해줘야 계속 보인다.움직이든 말든.

// 애니는 항상 프레임 단위로 움직임
//이를 계산하기 위한 변수의 초기화
let timer = 0;

function 프레임마다실행할거() {
  animation = requestAnimationFrame(프레임마다실행할거);

  timer++; // 프레임 지날 떄마다 타이머 오른다
  ctx.clearRect(0, 0, canvas.width, canvas.height); // 이미 그린 건 지워줘

  // 프레임이 초당 보여주는 횟수이니 타이머를 프레임으로 나누면 초당..이 됨
  if (timer % 480 === 0) {
    // 2초당 장애물 하나 만들고 목록에 넣음
    let cactus = new Cactus();
    cactus여럿.push(cactus);
  }

  // 위에서 만들고, 목록에 넣은 장애물 여러개를! 각각 그린다
  cactus여럿.forEach((a, i, o) => {
    // x < 0인 애들은 제거
    if (a.x < 0) {
      o.splice(i, 1);
    }

    // 여러개 이놈들과 충돌했는지도 알아야 함
    충돌하냐(dino, a);

    // 그려진 애들을 프레임마다 x축 줄어드는 왼쪽으로 그려줌
    a.x--;
    a.draw();
  });
  dino.draw(); // 1초에 60번 캐릭(주인공) 그려줘

  // 점프 기능 (스페이스 누름)
  if (점프중 == true) {
    dino.y--;
    점프timer++;
  }
  // 떨어지기(땅 착지까지)
  if (점프중 == false) {
    if (dino.y < 200) dino.y++;
  }
  // 점프 안하기
  if (점프timer > 100) {
    점프중 = false;
    점프timer = 0;
  }
}
프레임마다실행할거();

//-------- < 3 > 충돌 확인
function 충돌하냐(dino, cactus) {
  let x축차이 = cactus.x - (dino.x + dino.width);
  let y축차이 = cactus.y - (dino.y + dino.height);
  if (x축차이 < 0 && y축차이 < 0) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    cancelAnimationFrame(animation); // 게임 중단
  }
}
