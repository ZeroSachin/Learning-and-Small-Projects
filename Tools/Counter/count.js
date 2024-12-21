let para = document.querySelector("p");

let btns = document.querySelectorAll("button");

let inc = document.querySelector(".increase");
let dec = document.querySelector(".decrease");
let reset = document.querySelector(".reset")

let  counter = 0;

inc.addEventListener("click", () =>{
  counter++;
  para.innerText = counter;
})

dec.addEventListener("click", () =>{
  counter--;
  if(counter< 0){
    counter = 0;
  }
  para.innerText = counter;
})

reset.addEventListener("click", () => {
  counter = 0;
  para.innerText = counter;

})