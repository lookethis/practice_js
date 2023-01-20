//기본 기능=------------------------------------------------------------------

// 유저가 값 입력함: 1. 입력값 가져오는 변수
// + 버튼 누르면, 할 일 추가:
// 2-1.+버튼을 가져오는 변수, 2-2.+누르는 이벤트 추가, 2-3.+누르믄 인나는 함수
// 2-4.할 일을 리스트로 저장하는 변수, 2-5 할 일 리스트에 추가, 2-6추가한 리스트 화면에 띄우는 함수

// 심화 기능 -------------------------------------------------------------------

// check 버튼 누르면 t/f, 할 일 끝나고, 밑줄이 그어짐:
// 3-1.check 버튼 클릭시 isComplete가 true로,t:끝난거로 간주하고 밑줄 그음, f:안끝났으니 그대로
// delete 버튼 누르면, 할 일 삭제
// 진행중 끝남 탭 누르면, 언더바 이동
// 끝남탭은 누르면 끝난 아이템만, 진행중템은 누르면 진행 아이템만 보임
// 전체 탭 누르면 다시 전체 아이템으로 돌아옴

// 1. 입력값 가져오는 변수
let taskInput = document.getElementById("task-input");
// 2-1.+버튼을 가져오는 변수
let addButton = document.getElementById("add-button");
// 2-4.할 일을 리스트로 저장하는 변수
let taskList = [];

// 이벤트 주는 방식 2가지. 1: addeevent, 2:onclick을 버튼에 직접적으로
// 2-2.+누르는 이벤트 추가
addButton.addEventListener("click", addTask);

// 2-3.+누르믄 인나는 일: 함수(할 일을 2-4에 저장하기)
// task의 추가 정보
function addTask() {
  // 1번 입력값의 value가져오는 변수..는 task추가정보 넣음으로써 필요없어짐
  // let taskContent = taskInput.value;
  // task의 추가 정보
  let task = {
    //밑은 랜덤아이디임. 랜덤 아이디 생성하는 함수 밑에 찾아놈
    id: randomIDGenerate(),
    taskContent: taskInput.value,
    isComplete: false,
  };
  // 리스트에 넣음(값,상태)
  taskList.push(task);
  render();
}

// 2-6추가한 리스트 화면에 띄우는(그리는) 함수
function render() {
  let resultHTML = "";
  // 할 일 단위(입력,버튼 둘)를 가져옴. 할 일을 세트로 더하는 과정
  // i < taskList.length: 이 리스트 안에 있는거 하나하나 꺼내서 뭐 하려고 하는구나~
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].isComplete == true) {
      resultHTML += `<div class="task">
      <div class="task-done">${taskList[i].taskContent}</div>
      <div>
        <button onClick="toggleComplete('${taskList[i].id}')">Check</button>
        <button onClick="deleteTask()">Delete</button>
      </div>
    </div>`;
    } else {
      resultHTML += `<div class="task">
      <div>${taskList[i].taskContent}</div>
      <div>
        <button onClick="toggleComplete('${taskList[i].id}')">Check</button>
        <button onClick="deleteTask()">Delete</button>
      </div>
    </div>`;
    }
    // 3-1.check 버튼 클릭시 isComplete가 true로-> 근데 어떤 버튼 클릭했는지 알아야함
    // 이벤트 주는 방법2: onclick을 버튼에 직접준다. 그 담에 함수 넣어주믄 됨.
    // toggle함수 실행할 때마다 id값을 넣어주는 거임
    //   resultHTML += `<div class="task">
    //     <div>${taskList[i].taskContent}</div>
    //     <div>
    //       <button onClick="toggleComplete('${taskList[i].id}')">Check</button>
    //       <button onClick="deleteTask()">Delete</button>
    //     </div>
    // </div>`;
  }

  // 할 일 세트를 전부 가져오는 변수
  document.getElementById("task-board").innerHTML = resultHTML;
}

function toggleComplete() {
  console.log("id:", id);
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id === id) {
      taskList[i].isComplete = !taskList[i].isComplete;
      break;
    }
  }
  render();
  console.log(taskList);
}

// 할 일 삭제 함수
function deleteTask() {
  console.log("delete");
}

// 각 할일 세트마다 고유 아이디를 줘야하기 때문에 랜덤 아이디 생성 함수 만듬
// 왜 크롬 콘솔에 아무것도 안 나오냐..
function randomIDGenerate() {
  return Math.random().toString(36).substr(2, 9);
}
