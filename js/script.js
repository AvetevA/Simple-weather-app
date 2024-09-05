"use strict"


const url = "http://api.weatherapi.com/v1/current.json?key=a29eae55f9f3458a859175450240509&q=";
const aqi = "&aqi=no";
const button = document.querySelector("#but");
const input = document.querySelector("#town");
const temp = document.querySelector(".temp");
const city = document.querySelector(".settown");
const time = document.querySelector(".time");
const cond = document.querySelector(".condition");
const body = document.querySelector("body");
const loctime = document.querySelector(".time2")
let date = new Date();
let cityurl;
let hours;
button.addEventListener("click",()=>{
    getinfo();

});


function error(){

    alert("there is error in your request");

}

function getinfo(){
    cityurl = url;
    cityurl+=input.value;
    cityurl+=aqi;
    fetch(cityurl)
  .then(response => {
    if (!response.ok) {
    error();
    return 0;
    }
    return response.json();
  })
  .then(data => {
    temp.innerHTML = `${data.current.feelslike_c}`;
    temp.innerHTML+="°C";
    city.innerHTML = `${data.location.name}`;
    time.innerHTML = "Last update: ";
    let h = date.toLocaleTimeString();
    time.innerHTML += `${date.toLocaleTimeString()}`;
    loctime.innerHTML = `Time in ${data.location.name}: `;
    loctime.innerHTML += `${data.location.localtime.slice(11,16)}`;
    hours = `${data.location.localtime.slice(11,13)}`
    console.log(hours);
    cond.innerHTML = `${data.current.condition.text}`;
    dayornight();
  })
}

function dayornight(){

   if(hours[0]==='0' && parseInt(hours[1])<6){
    body.classList.remove("day");
    body.classList.remove("night");
    body.classList.add("night");
    

   } 
   else if(parseInt(hours)>=20 && parseInt(hours)<=23){
    body.classList.remove("day");
    body.classList.remove("night")
    body.classList.add("night");
        
   }
   else{
    body.classList.remove("day");
    body.classList.remove("night")
    body.classList.add("day");
   }

}

