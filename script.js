

//variables
var searchButton = document.querySelector("searchbutton")
var APIkey = "d7e855042494c9af3ade96d7ae371609"
var chosencity = document.getElementById("cityname");
var searchButton = document.getElementById('searchbutton');

//fetch the api data

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
        document.querySelector("#humidity").innerHTML = "Humidity:  " + humidity;  
          })};        

function weatherForcaste (){
  var requestForcaste = 'https://api.openweathermap.org/data/2.5/forecast?q=' + chosencity.value  + "&appid=d7e855042494c9af3ade96d7ae371609";

  fetch(requestForcaste)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    // Day 1 forcaste
    var date = data.list[0].dt_txt
    document.querySelector("#forcasteday1").innerHTML = "Date:   " + date;
    var forcasteTemp1 = data.list[0].main.temp;
    document.querySelector("#forcasteTemperature1").innerHTML = "Temperature:  " + forcasteTemp1;
    var forcasteWindSpeed1 = data.list[0].wind.speed;
    document.querySelector("#forcasteWindSpeed1").innerHTML = "Wind Speed:  " + forcasteWindSpeed1;
    var forcasteHumidity1 = data.list[0].main.humidity;
    document.querySelector("#forcasteHumidity1").innerHTML = "Wind Speed:  " + forcasteHumidity1;
    // Day 2 forcaste
    var date = data.list[8].dt_txt
    document.querySelector("#forcasteday2").innerHTML = "Date:   " + date;
    var forcasteTemp2 = data.list[8].main.temp;
    document.querySelector("#forcasteTemperature2").innerHTML = "Temperature:  " + forcasteTemp2;
    var forcasteWindSpeed2 = data.list[8].wind.speed;
    document.querySelector("#forcasteWindSpeed2").innerHTML = "Wind Speed:  " + forcasteWindSpeed2;
    var forcasteHumidity2 = data.list[8].main.humidity;
    document.querySelector("#forcasteHumidity2").innerHTML = "Wind Speed:  " + forcasteHumidity2;
    //Day 3 forcaste
    var date3 = data.list[16].dt_txt
    document.querySelector("#forcasteday3").innerHTML = "Date:   " + date3;
    var forcasteTemp3 = data.list[16].main.temp;
    document.querySelector("#forcasteTemperature3").innerHTML = "Temperature:  " + forcasteTemp3;
    var forcasteWindSpeed3 = data.list[16].wind.speed;
    document.querySelector("#forcasteWindSpeed3").innerHTML = "Wind Speed:  " + forcasteWindSpeed3;
    var forcasteHumidity3 = data.list[16].main.humidity;
    document.querySelector("#forcasteHumidity3").innerHTML = "Wind Speed:  " + forcasteHumidity3;
    //Day 4 forcaste
    var date4 = data.list[24].dt_txt
    document.querySelector("#forcasteday4").innerHTML = "Date:   " + date4;
    var forcasteTemp4 = data.list[24].main.temp;
    document.querySelector("#forcasteTemperature4").innerHTML = "Temperature:  " + forcasteTemp4;
    var forcasteWindSpeed4 = data.list[24].wind.speed;
    document.querySelector("#forcasteWindSpeed4").innerHTML = "Wind Speed:  " + forcasteWindSpeed4;
    var forcasteHumidity4 = data.list[24].main.humidity;
    document.querySelector("#forcasteHumidity4").innerHTML = "Wind Speed:  " + forcasteHumidity4;
    //Day 5 forcaste
    var date5 = data.list[32].dt_txt
    document.querySelector("#forcasteday5").innerHTML = "Date:   " + date5;
    var forcasteTemp5 = data.list[32].main.temp;
    document.querySelector("#forcasteTemperature5").innerHTML = "Temperature:  " + forcasteTemp5;
    var forcasteWindSpeed5 = data.list[32].wind.speed;
    document.querySelector("#forcasteWindSpeed5").innerHTML = "Wind Speed:  " + forcasteWindSpeed5;
    var forcasteHumidity5 = data.list[32].main.humidity;
    document.querySelector("#forcasteHumidity5").innerHTML = "Wind Speed:  " + forcasteHumidity5;
}
)};





// save city search to new button
function savedCities (){
  var btn = document.createElement("button");
  btn.setAttribute('id', "searchedCity");
  
//  var searchCity = document.getElementById("cityname").value;
//  var text = document.createTextNode(searchCity);
  document.appendChild(btn);
 // document.getElementById("savedFirstCity").appendChild(btn) ;
  
};



//city button becomes visible when text inserted

function placesearchcity () {
    const todaysdate = new Date();
    var placesearchcity = document.getElementById("cityname").value;
    document.getElementById("searchedcity").innerHTML = placesearchcity;
    document.getElementById("todaysdate").textContent = todaysdate ;
    
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
 savedCities()
 };

//retreive city from local storage

function reload() {
var x = localStorage.getItem("cityname");
document.getElementById("cityname").innerHTML = x;
};

