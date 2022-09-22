

//variables
var searchButton = document.querySelector("searchbutton")
var APIkey = "d7e855042494c9af3ade96d7ae371609"
var chosencity = document.getElementById("cityname");

//event when the submit button is pressed
//fetch the api data

// var repoList = document.querySelector('ul');
var searchButton = document.getElementById('searchbutton');

function getApi() {
   
    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + chosencity.value + "&appid=d7e855042494c9af3ade96d7ae371609";
     
        fetch(requestUrl)
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            console.log(data)
            
        var temp = data.main.temp
        document.querySelector("#temperature").innerHTML = "Temperature:  " + temp;
        var windSpeed = data.wind.speed
        document.querySelector("#wind-speed").innerHTML = "Wind Speed:  " + windSpeed;
        var humidity = data.main.humidity
        console.log(humidity);
          
          })};        

function weatherForcaste (){
  var requestForcaste = 'https://api.openweathermap.org/data/2.5/forecast?q=' + chosencity.value  + "&appid=d7e855042494c9af3ade96d7ae371609";

  fetch(requestForcaste)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    
    var date = data.list[0].dt_txt
    console.log(date)
    document.querySelector("#forcasteday1").innerHTML = "Date:   " + date;
    var forcasteTemp = data.list[0].main.temp;
    console.log(forcasteTemp);
  //  document.querySelector("#forcasteTemperature").innerHTML = "Temperature:  " + forcasteTemp;
    var forcasteWindSpeed = data.list[0].wind.speed;
    console.log(forcasteWindSpeed);
   // document.querySelector("#forcasteWindSpeed").innerHTML = "Wind Speed:  " + forcasteWindSpeed;
    var forcasteHumidity = data.list[0].main.humidity;
    console.log(forcasteHumidity);
    document.querySelector("#forcateHumidity").innerHTML = "Wind Speed:  " + forcasteHumidity;
}
)};


//searchButton.addEventListener('click', getApi);

// save city search to new button

//city button becomes visible when text inserted

function placesearchcity () {
    const todaysdate = new Date();
    var placesearchcity = document.getElementById("cityname").value;
    document.getElementById("searchedcity").innerHTML = placesearchcity;
    document.getElementById("todaysdate").textContent = todaysdate ;
    document.getElementById("savedFirstCity").textContent = placesearchcity;
};

// function listCity (){
//   var listedCity = document.getElementById("cityname").value;
  




//save the search city to local storage
function storeActivity1() {
var chosencity = document.getElementById("cityname").value;
localStorage.setItem("cityame", chosencity);
 };
 
 searchButton.onclick = () => {
 storeActivity1();
 placesearchcity();
 getApi();
 weatherForcaste();
//  listCity()
 };

//retreive city from local storage

function reload() {
var x = localStorage.getItem("cityname");
document.getElementById("cityname").innerHTML = x;
};

