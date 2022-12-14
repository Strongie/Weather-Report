

//variables
var searchButton = document.querySelector("searchbutton")
var APIkey = "d7e855042494c9af3ade96d7ae371609"
var chosencity = document.getElementById("cityname");
var searchButton = document.getElementById('searchbutton');
var weatherInfo = []
//fetch the api data

function getApi() {
   
    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + chosencity.value + "&units=metric&appid=d7e855042494c9af3ade96d7ae371609";
     
        fetch(requestUrl)
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
              weatherInfo.push(data)

               
        var temp = data.main.temp
        document.querySelector("#temperature").innerHTML = "Temperature:  " + temp + " C";
        var windSpeed = data.wind.speed
        document.querySelector("#wind-speed").innerHTML = "Wind Speed:  " + windSpeed + ' kmh';
        var humidity = data.main.humidity
      //  console.log(humidity);
        document.querySelector("#humidity").innerHTML = "Humidity:  " + humidity + " %";  
          })};        

function weatherForcaste (){
  var requestForcaste = 'https://api.openweathermap.org/data/2.5/forecast?q=' + chosencity.value  + "&units=metric&appid=d7e855042494c9af3ade96d7ae371609";

  fetch(requestForcaste)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
  //  console.log(data);
  
    // Day 1 forcaste
    var date = data.list[0].dt_txt
    document.querySelector("#forcasteday1").innerHTML = "Date:   " + date;
    var forcasteTemp1 = data.list[0].main.temp;
    document.querySelector("#forcasteTemperature1").innerHTML = "Temperature:  " + forcasteTemp1 + " C";
    var forcasteWindSpeed1 = data.list[0].wind.speed;
    document.querySelector("#forcasteWindSpeed1").innerHTML = "Wind Speed:  " + forcasteWindSpeed1 + ' kmh';
    var forcasteHumidity1 = data.list[0].main.humidity;
    document.querySelector("#forcasteHumidity1").innerHTML = "Humidity:  " + forcasteHumidity1 + " %";
    var weatherIcon1 =  data.list[0].weather[0].icon;
    document.getElementById('weatherIcon1').src = "http://openweathermap.org/img/w/"+ data.list[0].weather[0].icon+".png";
    // Day 2 forcaste
    var date = data.list[8].dt_txt
    document.querySelector("#forcasteday2").innerHTML = "Date:   " + date;
    var forcasteTemp2 = data.list[8].main.temp;
    document.querySelector("#forcasteTemperature2").innerHTML = "Temperature:  " + forcasteTemp2 + " C";
    var forcasteWindSpeed2 = data.list[8].wind.speed;
    document.querySelector("#forcasteWindSpeed2").innerHTML = "Wind Speed:  " + forcasteWindSpeed2 + ' kmh';
    var forcasteHumidity2 = data.list[8].main.humidity;
    document.querySelector("#forcasteHumidity2").innerHTML = "Humidity:  " + forcasteHumidity2 + " %";
    var weatherIcon2 =  data.list[8].weather[0].icon;
    document.getElementById('weatherIcon2').src = "http://openweathermap.org/img/w/"+ data.list[8].weather[0].icon+".png";
    //Day 3 forcaste
    var date3 = data.list[16].dt_txt
    document.querySelector("#forcasteday3").innerHTML = "Date:   " + date3;
    var forcasteTemp3 = data.list[16].main.temp;
    document.querySelector("#forcasteTemperature3").innerHTML = "Temperature:  " + forcasteTemp3 + " C";
    var forcasteWindSpeed3 = data.list[16].wind.speed;
    document.querySelector("#forcasteWindSpeed3").innerHTML = "Wind Speed:  " + forcasteWindSpeed3 + ' kmh';
    var forcasteHumidity3 = data.list[16].main.humidity;
    document.querySelector("#forcasteHumidity3").innerHTML = "Humidity:  " + forcasteHumidity3 + " %";
    var weatherIcon3 =  data.list[16].weather[0].icon;
    document.getElementById('weatherIcon3').src = "http://openweathermap.org/img/w/"+ data.list[16].weather[0].icon+".png";
    //Day 4 forcaste
    var date4 = data.list[24].dt_txt
    document.querySelector("#forcasteday4").innerHTML = "Date:   " + date4;
    var forcasteTemp4 = data.list[24].main.temp;
    document.querySelector("#forcasteTemperature4").innerHTML = "Temperature:  " + forcasteTemp4 + " C";
    var forcasteWindSpeed4 = data.list[24].wind.speed;
    document.querySelector("#forcasteWindSpeed4").innerHTML = "Wind Speed:  " + forcasteWindSpeed4 + ' kmh';
    var forcasteHumidity4 = data.list[24].main.humidity;
    document.querySelector("#forcasteHumidity4").innerHTML = "Humidity:  " + forcasteHumidity4 + " %";
    var weatherIcon4 =  data.list[24].weather[0].icon;
    document.getElementById('weatherIcon4').src = "http://openweathermap.org/img/w/"+ data.list[24].weather[0].icon+".png";
    //Day 5 forcaste
    var date5 = data.list[32].dt_txt
    document.querySelector("#forcasteday5").innerHTML = "Date:   " + date5;
    var forcasteTemp5 = data.list[32].main.temp;
    document.querySelector("#forcasteTemperature5").innerHTML = "Temperature:  " + forcasteTemp5 + " C";
    var forcasteWindSpeed5 = data.list[32].wind.speed;
    document.querySelector("#forcasteWindSpeed5").innerHTML = "Wind Speed:  " + forcasteWindSpeed5 + ' kmh';
    var forcasteHumidity5 = data.list[32].main.humidity;
    document.querySelector("#forcasteHumidity5").innerHTML = "Humidity:  " + forcasteHumidity5 + " %";
    var weatherIcon5 =  data.list[32].weather[0].icon;
    document.getElementById('weatherIcon5').src = "http://openweathermap.org/img/w/"+ data.list[32].weather[0].icon+".png";
});

};





// save city search to new button
function savedCities (){
  var btn = document.createElement("button");
  btn.setAttribute('id', "searchedCity");
  btn.setAttribute("class", "searchedCity");
  btn.innerHTML = document.getElementById("cityname").value;
  document.getElementById("savedFirstCity").appendChild(btn);
};

//Insert name of city and date in city weather results

function placesearchcity () {
    const todaysdate = new Date();
    var placesearchcity = document.getElementById("cityname").value;
    document.getElementById("searchedcity").innerHTML = placesearchcity;
    document.getElementById("todaysdate").textContent = todaysdate ;
    
};

  
//save the search city to local storage
function storeActivity1(weather) {

  var storedWeatherInfo = localStorage.getItem('storedWeatherInfo');

  if (storedWeatherInfo && storedWeatherInfo != null) {
    var weatherData = JSON.parse(storedWeatherInfo);
    weatherData.push(weather);
    
    localStorage.setItem('storedWeatherInfo', weatherInfo);
    localStorage.setItem('storedWeatherInfo', JSON.stringify(weatherInfo));
  }
  else {
    localStorage.setItem('storedWeatherInfo', JSON.stringify([weather]));
  };

  };




 searchButton.onclick = () => {
 storeActivity1();
 placesearchcity();
 getApi();
 weatherForcaste();
 savedCities()
 };

//retreive city from local storage

//document.getElementById("searchedCity").addEventListener("click", getApi, weatherForcaste);

function reload() {
    getApi();
    placesearchcity();
    weatherForcaste();
};   

document.getElementById("searchedcity").addEventListener("click", reload);
var searchedCityBtn = 0;
var savedCitySearch = [];  
var savedCitySearch = localStorage.getItem("storedWeatherInfo");

$("#savedFirstCity").html("");

if(savedCitySearch && savedCitySearch != null) {

console.log(savedCitySearch);
// var arrStoredWeatherInfo = JASON.parse(savedCitySearch);
// arrStoredWeatherInfo.forEach(element => {
//   var citySave;
//   citySave.
  
// });

};
// document.getElementById("cityname").innerHTML = x;
// };

