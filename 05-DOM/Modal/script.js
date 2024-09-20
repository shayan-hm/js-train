const showModal = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModal = document.querySelector(".close-modal");
const closeModalDry = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
const openModalDry = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener("click", openModalDry);
}
closeModal.addEventListener("click", closeModalDry);
overlay.addEventListener("click", closeModalDry);
