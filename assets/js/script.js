
// Dom Elements
var quizTimeEl = document.querySelector("#quizTime");
var questionsEl = document.querySelector("#questions");
var choicesEl = document.querySelector("#choices");
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
    timerId = setInterval(timerValue, 1000);

    quizTimeEl.textContent = time;

    pullQuestions();
}

function pullQuestions() {
    // will pull the questions from its array
    var ongoingQuestion = questions[ongoingQuestionArray];

    // pulled questioned will appear on screen
    var questionTitleEl = document.getElementById("questionTitle");
    questionTitleEl.textContent = ongoingQuestion.title;

    // remove any of the old chocies available 
    choicesEl.innerHTML = "";

    // chnaged the choices for the new questions
    ongoingQuestion.choices.forEach(function(choice, i) {
        var choiceNode = document.createElement("button");
        choiceNode.setAttribute("class", "choice");
        choiceNode.setAttribute("value", choice);

        choiceNode.textContent = i + 1 + ". " + choice;
        choiceNode.onclick= choiceSelection;

        // display new  choices on html page
        choicesEl.appendChild(choiceNode);
    });
}

function choiceSelection() {
    // first check for wrong answer
    if (this.value !== questions[ongoingQuestionArray].answer) {
        time= time - 10;

        if (time < 0) {
            time = 0;
        }

        // show new time on page 
        quizTimeEl.textContent = time;
        answerResultEl.textContent= "Incorrect";
        answerResultEl.style.color = "#BC4123";
        answerResultEl.style.fontSize = "15px";  
    } else {
        answerResultEl.textContent= "Correct";
        answerResultEl.style.color = "#BC4123";
        answerResultEl.style.fontSize = "15px"; 
    }

    // quickly show answer result if right or wrong
    answerResultEl.setAttribute("class", "answerResult");
    setTimeout(function () {
        answerResultEl.setAttribute("class", "answerResult hidden");
    }, 1000);

    // next question appears
    ongoingQuestionArray++;

    if (ongoingQuestionArray === questions.length) {
        endQuiz();
    } else {
        pullQuestions();
    }
}

function endQuiz() {
    clearInterval(timerId); // this will stop the timer

    // Quiz COmplete screen will appear 
    var quizCompleteEl = document.getElementById("quizComplete");
    quizCompleteEl.removeAttribute("class");

    // score will appear
    var scoreEl = document.getElementById("score");
    scoreEl.textContent = time;

    // move the questionsEl back to hidden
    questionsEl.setAttribute("class", "hidden");
}

function timerValue() {
    time--;
    quizTimeEl.textContent = time;

    if (time <= 0) {
        endQuiz();
    }
}

function saveScore() {
    // svae initials
    var initials = initialsEl.value.trim();

    if (initials !== "") {
        var scores = JSON.parse(window.localStorage.getItem("scores")) || []; // will pull empty array if their are no scores in local storage

        // if new score
        var newScore = {
            score: time,
            initials : initials
        };

        // save score to localStorage
        scores.push(newScore);
        window.localStorage.setItem("scores", JSON.stringify(scores));

        // take to the highscores.html page
        window.location.href = "./highscores.html";
    }
}

// Start Code Quiz
startQuizBtn.onclick = startCodeQuiz;


submitBtn.onclick = saveScore;