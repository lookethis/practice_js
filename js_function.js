//---<5> Arrow Function은 무엇인가? 함수의 선언과 표현
// function
// - fundamental기본적인 building block in the program
// - subprogram can be used multiple times 재사용 가능
// - performs a task or calculates a value

// 1. function declaration
// function name(param1, param2) {body... return;}
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint이거보다 -> createCard, createPoint 이렇게 나누는게 좋아
// function is object in JS -> 나중에 더~

// 이렇게만 만들면 헬로밖에 못 말한다
function printHello() {
  console.log('hello');
}
printHello();

// log를 써서 입력한 문자를 표시할 수 있다.
function log(message) {
  console.log(message);
}
log('hello@');


// 2.parameters
// primitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
  obj.name = 'coder';
}

const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);


// 3. default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
  console.log(`${message} by ${from}`);
}
showMessage('hi'); // 사용자가 parameter전달 안하믄 언노운 나오게 해놨다.
 //                   hi by unknow


// 4. rest parameters (added in ES6)
// 차차 배우도록 하자..
function printAll(...args) { // 배열 형태로 전달해준다
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');


// 5.local scope
// 밖에서는 안 안보이고 안에서만 밖 볼 수 있다(안에 있던 거는 밖에서 못 꺼내고, 밖에 있던거는 안에서 꺼낼 수 있다)
let globalMessage = 'global';  // global variable
function printMessage() {
  let message = 'hello';
  console.log(message); // local variable
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = 'hello';
  }
  // console.log(childMessage); // error
}
printMessage();


// 6. return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);


// 7. early return, early exit! -> 코드 지적 중 1
// bad (블럭 안 로직 많으면 가독성 떨)
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  }
}

// good (조건 아닐 때 빨리 return하고 긴거, 필요한 거는 밑에 써라)
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upgrade logic...
}


// first-class function
// functions are treated like anyy other variable
// can be assigned as a value to variable 변수에 값으로서 할당될 수 있다
// can be passed as an asgument to other functions.다른 함수에 parameter로 전달되며
// can be returned by another function

// 1. function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const print = function () { // 함수에 이름 없:anonymous function <-> named function
  console.log('print');
};
print(); // print
const printAgain = print;
printAgain(); // print

const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
}

// anonymous function
const printYes = function () {
  console.log('yes!');
}

// named function
// better debugging in debugger's stack traces -> 나중에
// recursions(함수 지 안에서 지 부르는거. 반복 평균,피보나치 계산시에 하고 평소에는 프로그램 죽으니 하지마)
const printNo = function print() {
  console.log('no!');
}
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// arrow function
// always anonymous
// const simplePrint = function() {
//   console.log('simplePrint!');
// }

// 위에서 function과 괄호 없애고 한줄로 이어 쓴 것
const simplePrint = () => console.log('simplePrint!');

// 많은 걸 넣을 경우 화살표 함수에도 괄호 쓸 수 있다
const add = (a, b) => a + b;
const add1 = (a, b) => {
  //do something more
  return a * b;
}

// IIFE: Immediately Invoked Function Expression
// 선언과 동시에 호출하는 방법. 요즘 잘 안 써.
(function hello() {
  console.log('IIFE');
})();


// fun quiz time🐇🐿️
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder


// 정해진 데이터를 처리하는 데는 if보다 switch가 더 좋음
function calculate(command, a, b) {
  switch (command) {
    case 'add':
      return a + b;
    case 'substract':
      return a - b;
    case 'divide':
      return a / b;
    case 'multiply':
      return a * b;
    case 'remainder':
      return a % b;
    default:
      throw Error('unknown command');
  }
}
console.log(calculate('add', 2, 3));


