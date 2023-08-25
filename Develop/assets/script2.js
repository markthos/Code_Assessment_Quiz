const quizQuestions = [
    {
        question: "What is the HTML tag under which one can write the JavaScript code?",
        answers: {
            a: "<javascript>",
            b: "<scripted>",
            c: "<script>",
            d: "<js>"
        },
        correctAnswer: "c"
    },
    {
        question: "Which of the following is the correct syntax to display “GeeksforGeeks” in an alert box using JavaScript?",
        answers: {
            a: "alertbox(“GeeksforGeeks”);",
            b: "msg(“GeeksforGeeks”);",
            c: "msgbox(“GeeksforGeeks”);",
            d: "alert(“GeeksforGeeks”);"
        },
        correctAnswer: "d"
    },
    {
        question: "What is the correct syntax for referring to an external script called “geek.js”?",
        answers: {
            a: "<script src=”geek.js”>",
            b: "<script href=”geek.js”>",
            c: "<script ref=”geek.js”>",
            d: "<script name=”geek.js”>"
        },
        correctAnswer: "a"
    },
    {
        question: "Which of the following is not a reserved word in JavaScript?",
        answers: {
            a: "interface",
            b: "throws",
            c: "program",
            d: "short"
        },
        correctAnswer: "c"
    }
];

// Get the start button, questions form, highscore value, highscore initials, timer value
const startButton = document.getElementById("start-button");
const questionsForm = document.getElementById("questions-form");
const highscoreValue = document.getElementById("highscore-value");
const highscoreInitials = document.getElementById("highscore-initials");
const timerValue = document.getElementById("timer-value");

let currentQuestionIndex = 0;
let timer;
let timeLeft = 60;
let score = 0;

startButton.addEventListener("click", startQuiz);

function startQuiz() {
    // Hide the start button
    startButton.style.display = "none";
    // Show the questions form
    questionsForm.style.display = "block";
    // Start the timer
    startTimer();
    // Show the first question
    showQuestion(currentQuestionIndex);
}

function startTimer() {
    timer = setInterval(function () {
        timeLeft--;
        timerValue.textContent = timeLeft;
        if (timeLeft <= 0) {
            endQuiz();
        }
    }, 1000);
}
