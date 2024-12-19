let boxes = document.querySelectorAll(".boxes");
let reset = document.querySelector("#reset");

let turnO = true;

const win = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8]
];
 
boxes.forEach((box) =>{
  box.addEventListener("click", () =>{
    if(turnO){
      box.innerHTML = "O";
      turnO = false;
    }else{
      box.innerHTML= "X";
      turnO = true;
    }
    box.disabled = true;
    
    winner();
  }); 
});

const winner = () =>{
  for(let pattern of win){
  let one = boxes[pattern[0]].innerText;
  let two = boxes[pattern[1]].innerText;
  let three = boxes[pattern[2]].innerText;

    if(one != "" &&two != ""  && three != ""){
      if ((one == two) && (two == three)){
        alert(`winner is: ${one}`);
        for(let box of boxes){
          box.disabled = true;
        }
      };
    };
  };
};


reset.addEventListener("click", () =>{
  turnO = true;
  for(let box of boxes){
    box.disabled = false;
    box.innerText = "";
  }
});