// json
// js obj notation
// 두가지만 확실히 알아보자 json <-> obj

// 1. obj to json
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json); // true

//배열을 json으로 변환
json = JSON.stringify(['apple', 'banana']);
console.log(json); // ["apple","banana"]


const rabbit = {
  name1: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${name1} can jump!`);
  },
}

json = JSON.stringify(rabbit);
console.log(json); // {"name1":"tori","color":"white","size":null,"birthDate":"2022-12-07T13:41:36.360Z"}

json = JSON.stringify(rabbit, ["name1"]); 
console.log(json); // {"name1":"tori"}

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return value;
}); 
console.log(json); // 모든 키와 밸류들 전달됨
// 첫번째는 key: , value: [object Object]



// 2. json to obj
// parse(json)
json = JSON.stringify(rabbit);
console.log(json); // json자체가 어케 생겼는지 봐라

// const obj = JSON.parse(json); // json을 obj로
// console.log(obj); // 출력해본다
// rabbit.jump(); //name1 is not defined
// obj.jump(); // obj.jump is not a function
// 위 이유: 스트링으로 만들어진 json으로부터 만들어지므로 함수는 시리얼라이즈 안되어 전달 안됨

// console.log(rabbit.birthDate.getDate()); // 오늘 날짜
// // rabbit오브제 안의 birthDate함수는 date함수라서 그 계열의 api쓸 수 있
// console.log(obj.birthDate.getDate()); // 에러
// // json으로부터 만든 obj의 birthDate출력하믄 에러남
// // 이유: birthDate가 스트링이라서.json으로 만든 데이터 자체에 있는 string이 obj에 할당된 것

// ------------위를 고친게 밑------------------

// 그래서 위를 세밀하게 뭐 변환하고프믄 콜백 써
// 위는 중복으로, 주석처리함, 새로 정의해야함
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'birthDate' ? new Date(value) : value;
}); // 이러믄 모든 키와 밸류 나옴

console.log(rabbit.birthDate.getDate()); 
console.log(obj.birthDate.getDate()); // 위에서 안된거 됨
