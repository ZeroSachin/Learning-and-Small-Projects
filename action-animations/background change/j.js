let body = document.body;
let btn = document.querySelector("#btn");
let para = document.querySelector("p");

let one = true;


btn.addEventListener("click", () =>{
  
  if(one){
    body.style.backgroundColor = "red"
    one = false;
    para.style.color = "yellow";
  }else{
    body.style.backgroundColor = "#000"
    para.style.color = "white";
    one = true;
  }
  
});
