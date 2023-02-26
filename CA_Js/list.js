var products = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];

// 선택자 띄어쓰기 - 자식요소 선택
document.querySelectorAll(".card-body h5")[0].innerHTML = products[0].title;

$(".card-body p")
  .eq(0)
  .html("가격 : " + products[0].price);

document.querySelectorAll(".card-body p")[1].innerHTML =
  "가격 : " + products[1].price;
