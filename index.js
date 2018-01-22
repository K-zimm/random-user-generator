var url = "https://randomuser.me/api/";
var btn = document.querySelector('#btn');
var usrImg = document.querySelector('#avatar');
var fullName = document.querySelector('#fullname');
var usrName = document.querySelector('#username');
var usrEmail = document.querySelector('#email');
var usrCity = document.querySelector('#city');
var profileSection = document.querySelector('.user-profile');

btn.addEventListener("click", function () {
    fetch(url)
        .then(handleErrors)
        .then(parseJSON)
        .then(updateProfile)
        .catch(printError);
});

function handleErrors(request) {
    if (!request.ok) {
        throw Error(request.status);
    }
    return request;
};

function parseJSON(res) {
    return res.json();
};

function updateProfile(jdata) {
    console.log(jdata);
    usrImg.src = jdata.results[0].picture.medium;
    fullName.innerHTML = jdata.results[0].name.first + ' ' + jdata.results[0].name.last;
    usrName.innerHTML = jdata.results[0].login.username;
    usrEmail.innerHTML = jdata.results[0].email;
    usrCity.innerHTML = jdata.results[0].location.city;
};

function printError (err) {
    profileSection.innerHTML = "Sorry, could not find user because: " + err;
};