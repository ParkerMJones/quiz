var scoresList = document.getElementById('scoresList');
var scoreItem = document.getElementById("scoreItem");
var clearHighScores = document.getElementById("clearHighScores");
var numberOfScores = 10;
var gameResultArray = [];


var scoreboard = function() {
var secondsLeft = localStorage.getItem("secondsLeft");
var getName = localStorage.getItem("getName");
scoreItem.textContent = getName + " : " + secondsLeft;

};

clearHighScores.addEventListener("click", function() {
    localStorage.clear();
})

scoreboard();
