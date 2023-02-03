document
  .querySelector(".navbar-toggler")
  .addEventListener("click", function () {
    document.querySelectorAll(".list-group")[0].classList.toggle("list-modal");
  });

document.querySelector("#login").addEventListener("click", function () {
  document.querySelector(".black-bg").classList.toggle("show-modal");
});

document.querySelector("#close").addEventListener("click", function () {
  document.querySelector(".black-bg").style.display = "none";
});
