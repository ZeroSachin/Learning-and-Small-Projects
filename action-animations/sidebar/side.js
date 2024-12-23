let sidebar = document.querySelector(".sidebar");
let cross = document.querySelector(".fa-x");
let bars = document.querySelector(".fa-bars");

let one = true;

bars.addEventListener("click", () =>{
  if(sidebar.classList.contains("side")){
    sidebar.classList.remove("side");
  }else{
    sidebar.classList.add("side");
  }
});

cross.addEventListener("click",()=>{
  sidebar.classList.remove("side");
})