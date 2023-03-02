// tab만들기
// 다른 모든 탭의 orange,show가 없어져야 함
// 탭을 클릭하면,탭 클래스에 orange붙게
// 내용 클래스에 show붙어야한다

// 쌩js로 하려는 오기를 부리다가 클래스 삭제가 안되어 걍 jquery써보기로 함
// classList.remove가 왜 안되냐!

// document
//   .querySelectorAll(".tab-button")[0]
//   .addEventListener("click", function () {
//     document.querySelector(".tab-button").classList.toggle("orange");
//     // document.querySelectorAll(".tab-button ")[0].classList.add("orange");
//     //
//     document.querySelector(".tab-content").classList.toggle("show");
//     // document.querySelectorAll(".tab-content")[0].classList.add("show");
//   });

//querySelectorAll(".tab-button")[0] = eq(0)

// 탭 버튼 기능

let 버튼 = $(".tab-button"); // 이게 효율 좋음

for (let i = 0; i <= $(".tab-button").length; i++) {
  $(".tab-button")
    .eq(i)
    .on("click", function () {
      $(".tab-button").removeClass("orange");
      $(".tab-button").eq(i).addClass("orange");
      $(".tab-content").removeClass("show");
      $(".tab-content").eq(i).addClass("show");
    });
}

// array, object

var car = ["sonata", 50000, "white"];
var car2 = { name: "sonata", price: 50000 };
var car3 = { name: "lamborgini", price: [50000, 3000, 4000] };

console.log(car2.price);
car2.price = 60000;
console.log(car2.price);

// car2데이터를 html에서 보여주기
// 프론트엔드는 자료 꺼내는 일이 더 많다! 꺼내는 법을 알자

// document.querySelector(".card").innerHTML = car2.name + " / " + car2.price;

document.querySelector(".car-title").innerHTML = car3.price[0];

////셔츠 클릭하믄 밑 셀렉 보이게

// 내 답 (클릭시 보이게하는 선택자 붙이기)
document
  .querySelector(".form-select option")
  .addEventListener("click", function () {
    document.querySelectorAll(".form-select mt-2")[1].toggle(".see");
  });

// 쌤 답. 셔츠 선택하는지 아닌지도 넣음
// 여기서 addevent..빠지면 페이지 로드 시 최초 1회만 함수가 실행됨

var pants = [28, 30, 32];
var shirts = [85, 90, 95, 100];

$(".form-select")
  .eq(0)
  .on("input", function () {
    let value = $(".form-select")
      .eq(0)
      // let value = this.value
      // let value = e.currentTarget.value
      // 위의 방식은 function(e)로 만들고 나서임
      .val();
    if (value == "셔츠") {
      $(".form-select").eq(1).removeClass("form-hide");
    } // 바지 누르면 밑에 선택창 또 생김
    else if (value == "바지") {
      $(".form-select").eq(1).removeClass("form-hide");
      $(".form-select").eq(1).html(" ");
      // var 템플릿 = `<option>90</option>
      // <option>100</option>`;
      // $(".form-select").eq(1).html(템플릿);

      //
      // array에 붙일 수 있는 forEach
      pants.forEach((a) => {
        $(".form-select").eq(1).append(`<option>${a}</option>`);
      });
    }
  });

var obj = { name: "kim", age: 20 };

for (var key in obj) {
  console.log(obj[key]);
}

////////////////////////////////////

// 밑의 둘은 큰 차이 없음. 글고 교체(innerHTML)는 아님

// 자바스크립트로 html 생성하는 법 1

let a = document.createElement("p");
a.innerHTML = "hello";
document.querySelector("#test").appendChild(a);

// 자바스크립트로 html 생성하는 법 2

var 템플릿 = "<p>메롱</p>";
document.querySelector("#test").insertAdjacentHTML("beforeend", 템플릿);
// $("#test").append(템플릿); 와 같
