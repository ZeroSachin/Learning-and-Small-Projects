let image1 = document.getElementById("img1"); 
let image2 = document.getElementById("img2"); 
let image3 = document.getElementById("img3"); 

let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");

let win = 0, lose = 0, draw = 0;

let stats = () =>{
  p1.innerText = `Win: ${win}`;
  p2.innerText =`Lose: ${lose}`;
  p3.innerText = `Draw: ${draw}`;
}

stats();


image1.addEventListener('click',function () {
  let number = Math.random();
  if(number <= 1/3){
    alert("You choose stone & bot choose stone, so It's a Draw");
    draw += 1;
 } else if(number <= 2/3 && number >= 1/3){
  alert("You choose stone & bot choose scissors, Win");
  win += 1;
 } else{
  alert("You choose stone & bot choose paper, Lose");
  lose += 1;
 }
 stats();
});

image2.addEventListener('click',function () {
  let number = Math.random();
  if(number <= 1/3){
    alert("You choose paper & bot choose stone, Win ");
    win += 1;
 } else if(number <= 2/3 && number >= 1/3){
  alert("You choose paper & bot choose scissors, You lose");
  lose += 1;
 } else{
  alert("You choose paper & bot choose paper, Draw");
  draw += 1;
 }
 stats();
});

image3.addEventListener('click',function () {
  let number = Math.random();
  if(number <= 1/3){
    alert("You choose scissors & bot choose stone, Lose");
    lose += 1;
 } else if(number <= 2/3 && number >= 1/3){
  alert("You choose scissors & bot choose scissors, Draw");
  draw += 1;
 } else{
  alert("You choose scissors & bot choose paper, You win");
  win += 1;
 }
 stats();
});
