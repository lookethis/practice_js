// class - 속성fields + (행동methods)
// 속성만 있을 수도 있다-> 데이터 클래스라 함

//클래스 어찌고들이 일어나는게 객체지향 언어

// class -template, declare once, no data in
// object -instance of a class, created many times,data in

'use strict';

// object-oriented programming
// class: template
// object: instance of a class

// js classes 
// - introduced in ES6, 도입 얼마 안됨
// - 도입 전엔 클래스 정의 안하고 객체 만듬
// - syntactical sugar over prototype-based interitance

// 1. class declarations
class person {
  // constructor 생성자로 필요한 데이터 전달
  constructor(name, age) {
    //fields 컨스트럭터에 전달된 데이터를 필즈에 할당
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const ellie = new person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();



// 2. getter and setters
// 뭐 커피 주문시 처음 수량이 -1잔이라고 설정하믄 말 안되는데 그걸 0으로 돌려준대
class user {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get age() {
    return this._age;
  }

  set age(value) { // 괄호 안 두가지 방법으로 조정 가능. 에러 띄우거나 0으로 보여주거나
    // if (value < 0) {
    //   throw error('age can not be negative');
    //}  
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new user('steve', 'jobs', -1);
console.log(user1.age);



// 3.fields (public, private)
// too soon! 겁나 최근에 추가되어서 많이 쓰지는 않아(2년전이라 이젠 최근도 아니군..)
class Experiment {
  publicField = 2;
  #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);
// 지금 쓰기엔 이르고 쓰려면 바벨을 써야한다...먼말



// 4. static properties and methods -> 다시 혹은 다른 곳에서 찾아봐라
class Article {
  static publisher = 'Dream Coding';
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();


// 5. inheritance
// a way for one cllass to extend another class.
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return this.width * this.height;
  }
}

// Rectangle클래스 만들 떄 이렇게 쓰믄 자동으로 위의 클래스가 포함됨
class Rectangle extends Shape {}
// 삼각형은 넓이 구하는 공식 다르니 그 정보를 덮어씌워본다 : overriding
// draw함구는 부모꺼랑 같이 불러보자
class Triangle extends Shape {
  draw() {
    super.draw();
    console.log('🔺');
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
}

// 윗말이 맞는지 보자. Rectangle불러본다
const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();


// 6.class checking: instanceOf(앞의 것은 뒤의 것의 인스턴스인가요?)
console.log(rectangle instanceof Rectangle); // T
console.log(triangle instanceof Rectangle); // F
console.log(triangle instanceof Triangle); // T
console.log(triangle instanceof Shape); // T
console.log(triangle instanceof Object); // T
