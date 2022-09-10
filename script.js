

//variables
//var searchButton = document.querySelector("searchbutton")
var APIkey = "d7e855042494c9af3ade96d7ae371609"
var cityname;


//event when the submit button is pressed
//fetch the api data

// var repoList = document.querySelector('ul');
var searchButton = document.getElementById('searchbutton');

function getApi() {
   var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityname + "&appid=" + "APIkey";

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
 //       var temp = document.getElementById("temperature").textContent = response;
   //     var wind = document.getElementById("wind-speed");
  //      var humidity = document.getElementById("humidity");
 //       var uv = document.getElementById("uv");


      for (var i = 0; i < data.length; i++) {
      var listItem = document.createElement("button");
        listItem.textContent = data[i].html_url;
        repoList.appendChild(listItem);
      }
    });
}

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
 
 searchbutton.onclick = () => {
 storeActivity1();
 placesearchcity();
 getApi();
 }

//retreive city from local storage

function reload() {
    var x = localStorage.getItem("cityname");
    document.getElementById("cityname").innerHTML = x;
    }
