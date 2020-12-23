var inputText = document.querySelector("#cityname")
var btnTransalate=document.querySelector("#btn")
var outputText1=document.querySelector("#weather")
var outputText2=document.querySelector("#weather2")


function errorHandler(error){
    alert("Enter valid city name")
}

function clickHandler(){
  

   fetch ('https://api.openweathermap.org/data/2.5/weather?q= '+inputText.value+ '&units=metric&appid=45b01933245b1dd8655b747047c8ce9a')
   .then(response => response.json())
   .then(json => 
    // console.log(json)
    {
    var weatherget1=json.main.temp;
    var weatherget2=json.sys.country;
    outputText1.innerHTML=weatherget1;
    outputText2.innerHTML=weatherget2;}
    )
  .catch(errorHandler)
}

btnTransalate.addEventListener("click",clickHandler)