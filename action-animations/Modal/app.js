let modal = document.querySelector(".open");
let modalClose = document.querySelector(".close");
let modalOpen = document.querySelector(".modal-overlay");


modal.addEventListener("click", ()=>{
  modalOpen.classList.add("modal-overlay-show");
});

modalClose.addEventListener("click", ()=>{
  modalOpen.classList.remove("modal-overlay-show");
});