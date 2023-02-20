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
