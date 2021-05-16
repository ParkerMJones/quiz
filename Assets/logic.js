var startBtn = document.querySelector("#startBtn");
var startPage = document.querySelector("#startPage");

var quizPage = document.querySelector("#quizPage");
var questionTitle = document.querySelector("#questionTitle");
var aBtn = document.getElementById("aBtn");
var bBtn = document.getElementById("bBtn");
var cBtn = document.getElementById("cBtn");

var questionIndex = 0;
var secondsLeft = 30;
let timer = document.getElementById("timer");
var timerInterval;
var timerRunning = true;


// List of quiz questions
var quizQuestions = [
    {
        "Title": "The opposite of good is _______.",
        "A": "Good",
        "B": "Bad",
        "C": "Neutral",
        "correct": "Good"
    },
    {
        "Title": "To be or not ______?",
        "A": "To Be",
        "B": "Not To Be",
        "C": "What?",
        "correct": "Not To Be"
    },
    {
        "Title": "Karl refrained from untying his shoes.  His shoes are _______.",
        "A": "tied",
        "B": "untied",
        "C": "Please Stop",
        "correct": "untied"
    },
    {
        "Title": "A lawyer argues against the removal of antidisestablishmentarian propaganda.  Which is he in favor of?",
        "A": "Disestablishment",
        "B": "Antidisestablishment",
        "C": "I refuse to participate.",
        "correct": "Disestablishment"
    },
    ];

// default view: hide quiz and score, show intro
    quizPage.style.display = "none";
    highScorePage.style.display = "none";
    timer.textContent = `Time: ${secondsLeft}`;

// start timer, show quiz page
    var startQuiz = function() {
        document.getElementById("startPage").style.display = "none";
        document.getElementById('highScorePage').style.display="none";
        document.getElementById("quizPage").style.display = "block";
        doQuiz();

        timerInterval = setInterval(function () {
            timer.textContent = `Time: ${secondsLeft}`;
            if (timerRunning === false) {
                clearInterval(timerInterval);
            }
            if (secondsLeft === 0 || secondsLeft < 0) {
                document.getElementById("startPage").style.display = "none";
                document.getElementById("quizPage").style.display = "none";
                document.getElementById('highScorePage').style.display="block";
                yourScore.textContent = `Your Score: ${secondsLeft}`;
        timerRunning = false;
            } else {
                secondsLeft--;
            }
        }, 1000);
    }

// assign buttons, if no more questions, stop clock
    var doQuiz = function() {
        var option = quizQuestions[questionIndex];
        if (questionIndex > 3) {
            document.getElementById("startPage").style.display = "none";
            document.getElementById("quizPage").style.display = "none";
            document.getElementById('highScorePage').style.display="block";
            timerRunning = false;
            return;
        }
        questionTitle.innerHTML = option.Title;
        aBtn.innerHTML = option.A;
        aBtn.setAttribute("answer", option.A);
        bBtn.innerHTML = option.B;
        bBtn.setAttribute("answer", option.B);
        cBtn.innerHTML = option.C;
        cBtn.setAttribute("answer", option.C);     
    }
     
// save user name and score to localStorage
     var saveScore = function() {
        var getName = highScoreName.value;
        localStorage.setItem("getName", getName);
        localStorage.setItem("secondsLeft", secondsLeft);
        };

                    
// check if contents of selected button match "correct" element in quizQuestions[]
     aBtn.addEventListener('click', function() {
        if (quizQuestions[questionIndex].A !== quizQuestions[questionIndex].correct) {
             secondsLeft -= 5;
        }
        questionIndex++;
        doQuiz();
     });
     bBtn.addEventListener('click', function() {
         if (quizQuestions[questionIndex].B !== quizQuestions[questionIndex].correct) {
             secondsLeft -= 5;
        }
        questionIndex++;
         doQuiz();
      });
     cBtn.addEventListener('click', function() {
         if (quizQuestions[questionIndex].C !== quizQuestions[questionIndex].correct) {
             secondsLeft -= 5;
        }
         questionIndex++;
         doQuiz();
      });

// start and submit
    startBtn.addEventListener('click', startQuiz);
    highScoreSubmit.addEventListener('click', saveScore);