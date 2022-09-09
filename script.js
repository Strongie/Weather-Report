

//variables
var searchButton = document.querySelector("searchbutton")

//event when the submit button is pressed
//fetch the api data

var repoList = document.querySelector('ul');
var searchButton = document.getElementById('searchbutton');

function getApi() {
  // replace `octocat` with anyone else's GitHub username
  var requestUrl = 'https://api.github.com/users/octocat/repos';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = data[i].html_url;
        repoList.appendChild(listItem);
      }
    });
}

searchButton.addEventListener('click', getApi);

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
