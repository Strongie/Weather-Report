

//variables
var searchButton = document.querySelector("searchbutton")
var APIkey = "d7e855042494c9af3ade96d7ae371609"
//var cityname = document.getElementById('cityname');
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
  //      var humidity = data.main.humidity
  //      document.querySelector("#humidity").innerHTML = "Humidity:  " + humidity;
        
          })};        

function weatherForcaste (){
//  var lat = data.coord.lat;
//  var lon = data.coord.lon;
  var requestForcaste = 'https://api.openweathermap.org/data/2.5/forecast?q=' + chosencity.value  + "&appid=d7e855042494c9af3ade96d7ae371609";

  fetch(requestForcaste)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    
})};
       // var wind = document.getElementById("wind-speed");
       // var humidity = document.getElementById("humidity");
       //    var uv = document.getElementById("uv");
       // temp.innerHTML = "Temperature:" + data[i].temp;

          
            
         
      


      

//searchButton.addEventListener('click', getApi);

// save city search to new button

//city button becomes visible when text inserted

function placesearchcity () {
    const todaysdate = new Date();
    var placesearchcity = document.getElementById("cityname").value;
    document.getElementById("searchedcity").innerHTML = placesearchcity;
    document.getElementById("todaysdate").textContent = todaysdate ;
    
};

//save the search city to local storage
//var saveButtonEL1 = document.querySelector('#saveBtn1');
 function storeActivity1() {
var chosencity = document.getElementById("cityname").value;
 localStorage.setItem("cityame", chosencity);
 };
 
 searchButton.onclick = () => {
 storeActivity1();
 placesearchcity();
 getApi();
 weatherForcaste();
 };

//retreive city from local storage

function reload() {
var x = localStorage.getItem("cityname");
document.getElementById("cityname").innerHTML = x;
};

//var lat = data.coord.lat;
//var lon = data.coord.lon;
//console.log('https://api.openweathermap.org/data/2.5/forecast?q=' + lat + lon + "&appid=d7e855042494c9af3ade96d7ae371609");