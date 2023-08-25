const quizQuestions = [
    {
        question: "What is the HTML tag under which one can write the JavaScript code?",
        answers: [
            "<javascript>",
            "<scripted>",
            "<script>",
            "<js>"
        ],
        correctAnswer: "<script>"
    },
    {
        question: "Which of the following is the correct syntax to display “GeeksforGeeks” in an alert box using JavaScript?",
        answers: [
            "alertbox(“GeeksforGeeks”);",
            "msg(“GeeksforGeeks”);",
            "msgbox(“GeeksforGeeks”);",
            "alert(“GeeksforGeeks”);"
        ],
        correctAnswer: "alert(“GeeksforGeeks”);"
    },
    {
        question: "What is the correct syntax for referring to an external script called “geek.js”?",
        answers: [
            "<script src=”geek.js”>",
            "<script href=”geek.js”>",
            "<script ref=”geek.js”>",
            "<script name=”geek.js”>"
        ],
        correctAnswer: "<script src=”geek.js”>"
    },
    {
        question: "Which of the following is not a reserved word in JavaScript?",
        answers: [
            "interface",
            "throws",
            "program",
            "short"
        ],
        correctAnswer: "program"
    }
];

     

const startButton = document.getElementById("startBtn");
const questionForm = document.getElementById("questionForm");
const questionElement = document.getElementById("question");
const answerElements = document.querySelectorAll("span[id^='answer']");
const highscoreValue = document.getElementById("highscoreValue");
const highscoreInitials = document.getElementById("highscoreInitials");
const timerValue = document.getElementById("timerValue");

let currentQuestionIndex = 0;
let timeLeft = 60;
let timerInterval;
let score = 0;

startButton.addEventListener("click", startQuiz);

function startQuiz() {
    startButton.style.display = "none";
    questionForm.style.display = "block";
    startTimer();
    showQuestion(currentQuestionIndex);
}

function startTimer() {
    timer = setInterval(function() {
        timeLeft--;
        timerValue.textContent = timeLeft;
        if (timeLeft <= 0) {
            endQuiz();
        }
    }, 1000);
}

function showQuestion(index) {
    if (index < quizQuestions.length) {
        const questionData = quizQuestions[index];
        questionElement.textContent = questionData.question;
        answerElements.forEach((answerElement, i) => {
            answerElement.textContent = questionData.answers[i];
        });
    } else {
        endQuiz();
    }
}

function checkAnswer(selectedAnswer) {
    const correctAnswer = quizQuestions[currentQuestionIndex].correctAnswer;
    if (selectedAnswer === correctAnswer) {
        score++;
    } else {
        timeLeft -= 10; // Penalty for incorrect answer
    }
    currentQuestionIndex++;
    showQuestion(currentQuestionIndex);
}

function endQuiz() {
    clearInterval(timer);
    questionForm.style.display = "none";
    highscoreValue.textContent = score;
    highscoreInitials.textContent = "-";
    // Display input field for initials and save button
    const initialsInput = document.createElement("input");
    initialsInput.placeholder = "Enter your initials";
    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.addEventListener("click", function() {
        const initials = initialsInput.value;
        if (initials) {
            saveHighscore(initials, score);
        }
    });
    document.getElementById("quiz").appendChild(initialsInput);
    document.getElementById("quiz").appendChild(saveButton);
}

function saveHighscore(initials, score) {
    // Implement local storage logic here
    
}

function loadHighscore() {
    // Implement local storage logic here to load highscore
    // Update highscoreValue and highscoreInitials based on highscoreData
}

// Load highscore when the page loads
window.addEventListener("load", function() {
    loadHighscore();
});