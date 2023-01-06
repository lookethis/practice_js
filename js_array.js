'use strict'
// 플젝을 할 때 array를 안 쓴적 없다! 그만큼 많이 씀

// array 첫번째 자료구조다

// 1. reclaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. index position
const fruits = ['🍾', '🍷'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);



// 3. looping over an array
// print all fruits

// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) { 
  console.log(fruit);
}

// c. forEach
fruits.forEach(function (fruit) {
  console.log(fruit);
});

// c를 자세히 써보자
fruits.forEach(function (fruit, index) {
  console.log(fruit, index);
});

// d. forEach + arrow function
fruits.forEach((fruit) => console.log(fruit));



// 4. addition, deletion, copy
// push: add an item to the end
fruits.push('🍸', '🍺');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
console.log(fruits);

// add an item to the beginning
fruits.unshift('🍹', '🍺');
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
console.log(fruits);

// note!! (un)shift are slower than pop, push
// 앞에서 데이터 넣고 빼려면 다른 데이터들을 뒤로/앞으로 옮겨야하기 때문
// remove an item by index position
fruits.push('🥩', '🍜', '🍢');
console.log(fruits);

// fruits.splice(1); -> 첫번째만 쓰면 이 번호 이상의 인덱스 다 지움. 즉 0번 한개만 나옴
fruits.splice(1, 1);
console.log(fruits);

fruits.splice(1, 1, '🫕', '🍩'); // 1번 인덱스부터 1개 지우가 뒤의 것들 넣어
console.log(fruits);

// combine two arrays
const fruits2 = ['🍕', '🍔'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);



// 5. searching
// find the index
// indexOf: find the index
// includes
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍩')); // 인덱스 몇번에 있느냐
console.log(fruits.indexOf('🐿️')); // 없는거 찾으면 -1나와
console.log(fruits.includes('🍩')); // 포함하고 있냐?

// lastIndexOf
fruits.push('🍺');
console.log(fruits);
console.log(fruits.indexOf('🍺'));  //중복이면 첫번째 나오는 애꺼 나옴
console.log(fruits.lastIndexOf('🍺'));



// 6. js api들 어떻게 쓰는건지 읽고 써보라했는데 귀찮고 짜증이라 그냥 정의 읽기만 했다 







