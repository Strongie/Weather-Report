

//variables
var searchButton = document.querySelector("searchbutton")

//event when the submit button is pressed

//fetch the api data

// save city search to new button

//city button becomes visible when text inserted

//save the search city to local storage

//var saveButtonEL1 = document.querySelector('#saveBtn1');
 function storeActivity1() {
    var cityname = document.getElementById("cityname").value;
 localStorage.setItem("cityame", cityname);
 };
 
 searchbutton.onclick = () => {
 storeActivity1();
 }

//retreive city from local storage


function reload() {
    var x = localStorage.getItem("cityname");
    document.getElementById("input1").innerHTML = x;
    }
