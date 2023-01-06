//objects
// one of the js's data types.
// a collection of related data and/or functionality.
// nearly all objects in js are intances of object
// obj = { key : value };

// 1.literals and properties
// obj만드는 방뻡2
// const obj1 = {}; // 'object 정확한literal데이터 그 자체' syntax
// const obj2 = new Object(); // 'object constructor생성자' syntax

// function print(name, age) {
//   console.log(person.name);
//   console.log(person.age);
// }

const ellie = {name: 'ellie', age: 4};
// print(ellie);

// with js magic (dynamically typed language)
// can add properties later
// ellie.hasJob = true;
// console.log(ellie.hasJob);

// can delete properties later
// delete ellie.hasjob;


// 2. conputed properties
// key should be always string
//프로퍼티 접근 방법
// console.log(ellie.name); // 문법을 통해 접근-> 원래는 이게 맞다. 필요 키를 알 때
// console.log(ellie['name']); // 변수를 스트링 형태로 접근 ->정확히 어떤 키 필요한지 모를 때
// ellie['hasJob'] = true;
// console.log(ellie.hasJob);

// 예. 동적으로 키에 관련한 밸류 받아와야 할 때 쓸 수 있다....아 먼말이냐
// function printValue(obj, key) {
//   console.log(obj[key]);
// }

// printValue(ellie, 'name');
// printValue(ellie, 'age');




// 3. property value shorthand
// 새로 만들 함수의 키와 밸류가 동일하면 생략 가능
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('ellie', 30);
console.log(person4);



// 4. constructor function
function Person(name, age) { // 순수하게 obj 만드는 함수는 대문자로 시작
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}


// 5. in operator: property existence check (key in obj)
console.log('name' in ellie); // 키가 있는지 없는지 확인
console.log(ellie.name);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in ellie) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for (value of array) {
  console.log(value);
}


// 7. fun cloning
// object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20' };
const user2 = user;
user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.clear(); // 위 기록을 지운다는데 vs에선 안되는듯?
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = {color: 'red'};
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Onject.assign({}, fruit1, fruit2);
console.log(mixed.color); // 뒤에 나오는 애가 덮어서 fruit2의 색
console.log(mixed.size);
