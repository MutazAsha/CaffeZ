const name=prompt("what's your name ?");
const gender=prompt("plase entar your gendar :");
const Age =prompt("plase enter your age :");
const Drink=prompt("plase entar your drink :");
 
const n=document.getElementById("Y");
const D=n.querySelector("ul").children;
n.querySelector("p").textContent=`Name: ${name}`;
D[0].textContent=`gendar:${gender}` ;
D[1].textContent=`Age:${Age}` ;
D[2].textContent=`Drink :${Drink}` ;
