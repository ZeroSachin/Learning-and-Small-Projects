const selectDiv = document.querySelectorAll(".select-div select");
const btn = document.querySelector("button");
const amount = document.querySelector("input");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const display = document.querySelector("#msg")

const API = '77a9e318306e18eade59569c';


for(let select of selectDiv){
  for(ele in flagCode ){
    let newOption = document.createElement("option");
    newOption.innerText = ele;
    newOption.value = ele;
    if(select.name === "from" && ele === "usd"){
      newOption.selected = "selected";
    
    } else if(select.name === "to" && ele === "inr"){
      newOption.selected = "selected";
    }
    select.append(newOption);
  };
  select.addEventListener("change", (eve)=>{
    chgFlag(eve.target);
  });
};



const chgFlag= (ele)=>{
  let code = ele.value;
  let flagId = flagCode[code];
  let flag =  `https://flagsapi.com/${flagId}/flat/64.png`
  let img = ele.parentElement.querySelector('img');
  img.src = flag;
}; 

let URL = `https://v6.exchangerate-api.com/v6/${API}/pair/${fromCurr.value}/${toCurr.value}`;



const fetchCurrency = async (eve)=>{
  eve.preventDefault();
  let amtValue = amount.value;
  if(amtValue = ""|| amtValue < 1){
    amtValue =1;
    amount.value = 1;
  };

  let URL = `https://v6.exchangerate-api.com/v6/${API}/pair/${fromCurr.value}/${toCurr.value}`;
  let data = await fetch(URL);
  let exchange =await data.json();
  let exchangeValue =await exchange.conversion_rate;

  
   display.innerText = `${amount.value}${fromCurr.value} = ${amount.value*exchangeValue}${toCurr.value}`
}
btn.addEventListener("click", fetchCurrency);

window.addEventListener("load", fetchCurrency);