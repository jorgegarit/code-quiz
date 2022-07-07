
// Dom Elements
var quizTimeEl = document.querySelector("#quizTime");
var questionsEl = document.querySelector("#questions");
var answersEl = document.querySelector("#answers");
var startQuizBtn = document.querySelector("#startQuiz");
var submitBtn = document.querySelector("#submit");
var initialsEl = document.querySelector("#initials");
var answerResultEl = document.querySelector("#answerResult");

// changing variables depending on amount of questions
var ongoingQuestionArray = 0;
var time = questions.length * 10;
var timerId;


function startCodeQuiz () {
    //  We want to hide the home screen
    var homeScreenEl = document.getElementById("homeScreen");
    homeScreenEl.setAttribute("class", "hidden");

    // Next we will make the questiosn section visible 
    questionsEl.removeAttribute("class");

    // Timer will start counting down
    timerId = setInterval(clockTick, 1000);

    quizTimeEl.textContent = time;

    pullQuestions();
}

function pullQuestions() {
    // will pull the questions from its array
    var ongoingQuestion = questions[ongoingQuestionArray];

    // pulled questioned will appear on screen
    var questionTitleEl = document.getElementById("questionTitle");
    questionTitleEl.textContent = ongoingQuestion.title;

    // remove any of the old answers
    answersEl.innerHTML = "";
}