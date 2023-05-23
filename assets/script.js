var startButton = document.getElementById ("start-button");
var questionContainer = document.getElementById ("question-container");
var answerContainer = document.getElementById ("answer-container");
var timeContainer = document.getElementById ("time-container");
var scoreContainer = document.getElementById ("score-container");
var questions = [
    {
        question: "What characters do you use to create an in-line comment?",
        answers: ["//", "n/", "/**/"],
        correctAnswer: "//"
    },
    {
        question: "Which code is a Jquery operation?",
        answers: ['document.queryselectAll("#root")', '$("#root")', 'document.getElementById("#root")'],
        coorectAnswer: '$("#root")'
    }
]

startButton.addEventListener("click", function(){});