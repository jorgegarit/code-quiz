// Main vars for script
var status = true; 
var whichQuestion = 0; 
var whichAnswer = 0; 
var score = 0;
var highscore = 100
var checkFinalAnswer = 0;
var checktimes = 1;

// Query Selectors from HTML Text
var viewHighScoresBtnEl = document.querySelector("#viewHighScore");
var startQuizBtnEl = document.querySelector("startQuiz");
var answer1BtnEl = document.querySelector("answer1");
var answer2BtnEl = document.querySelector("answer2");
var answer3BtnEl = document.querySelector("answer3");
var answer4BtnEl = document.querySelector("answer4");
var submitHSBtnEl = document.querySelector("submitHS");
var mainContainerBtnEl = document.querySelector("mainContainer");
var quizTmeBtnEl = document.querySelector("quizTime");
var answerResultBtnEl = document.querySelector("answerResult");