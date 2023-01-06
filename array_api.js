// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  // 내 답: console.log(fruits.toString());
  // 답
  const result = fruits.join(''); // 반점까지 없앨 수 있다
  console.log(result);
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  console.log(fruits.split(',')); // 구분자 안넣으면 스트링 통째로 배열됨
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  // 3. 
  const result = array.reverse();
  console.log(result);
  console.log(array); // 배열 자체도 바뀐다

  // 1. console.log(array.sort((a,b) => b-a));
  // 2.
  function compare(a,b) {
    return b - a;
  }
  array.sort(compare);
  console.log(array);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  // 3....근데 얘는 원 배열을 자르므로 문제에 안 맞다
  const result = array.splice(0, 2);
  console.log(result); // 1, 2
  console.log(array); // 3, 4, 5

  const array1 = [1, 2, 3, 4, 5];
  // 4.
  const result1 = array1.slice(2, 5);
  console.log(result1); // 3, 4, 5
  console.log(array1); // 1, 2, 3, 4, 5 원 배열 보존됨

  // 1. 이것도 원 배열 변화..
  // array.shift();
  // array.shift();
  // console.log(array);
  const array2 = [1, 2, 3, 4, 5];

  // 2. 이것도 원 배열 변화..
  for (let i = 0; i < 2; i++) {
    array2.shift();
  }
  console.log(array2);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  // 1.
  const result = students.find(function (student, index) {
    console.log(student, index); // 인덱스는 없어도 됨
    return student.score === 90; // 점수가 90인 학생들만 불리언 리턴
  })
  console.log(result);

  // 2.위를 화살표로(펑션,괄호 없애)
  const result1 = students.find((student) => student.score === 90);
  console.log(result1);
}

// Q6. make an array of enrolled students
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((student) => student.score);
  console.log(result);
  // ((value) => student.score); 이케 쓰면 코드 많아질때 이해 힘듬
}

// Q8. check if there is a student with the score lower than 50
{
  const result = students.some((student) => student.score < 50);
  console.log(result);

  const result2 = students.every((student) => student.score < 50);
  console.log(result2); // 이 문제에선 썸이 맞음.에브리는 모든 점수조건
}

// Q9. compute students' average score
{
  const result = students.reduce((prev, curr) => {
    console.log('-------------');
    console.log(prev);
    console.log(curr);
    return prev + curr.score;
  }, 0);
  console.log(result / students.length);

  const result2 = students.reduce((prev, curr) => prev + curr.score, 0);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students.map((student) => student.score).join;
  console.log(result);
  // map써서 성적을 배열로 만든 후 스트링으로 바꾼다.

  const result1 = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();
  console.log(result);
  // 이렇게 여러 함수 중첩도 가능
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
    .map(student => student.score)
    .sort((a, b) => a - b)
    .join();
  console.log(result);
  // 문제: 오름차순으로 정렬
  // 배열로 만든 후, 오름차순으로 정렬, 스트링으로 변환
}