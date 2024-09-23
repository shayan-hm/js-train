document.querySelector("button").addEventListener("click", function () {
  document.querySelector("body").classList.toggle("bg-dark-mode");
  document.querySelectorAll("span").forEach((value) => {
    value.classList.toggle("tx-main-dark-mode");
  });
  document.querySelectorAll(".befor-off").forEach((value) => {
    value.classList.toggle("tx-off-dark-mode");
  });
  document.querySelectorAll(".discount-percentage").forEach((value) => {
    value.classList.toggle("tx-discount-dark-mode");
  });
  document.querySelectorAll("button").forEach((value) => {
    value.classList.toggle("button-dark-mode");
  });
});
