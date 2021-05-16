var scoresList = document.getElementById('scoresList');
var scoreItem = document.getElementById("scoreItem");
var clearHighScores = document.getElementById("clearHighScores");

var noRefresh = document.getElementById("noRefresh");



var scoreboard = function() {
var secondsLeft = localStorage.getItem("secondsLeft");
var getName = localStorage.getItem("getName");
// var scoresArray = localStorage.getItem("scoresArray");

$('#scoresList').append('<li>' + getName + " : " + secondsLeft + '</li>');
};

clearHighScores.addEventListener("click", function() {
    localStorage.clear();
})


var redirectHome = function() {
    location.assign("./index.html");
}


scoreboard();


noRefresh.addEventListener('click', redirectHome);