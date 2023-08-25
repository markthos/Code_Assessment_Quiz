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
let initialsInput;
let saveButton;

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

// ...

function showQuestion(index) {
    if (index < quizQuestions.length) {
        const questionData = quizQuestions[index];
        questionElement.textContent = questionData.question;
        answerElements.forEach((answerElement, i) => {
            answerElement.textContent = questionData.answers[i];
            answerElement.parentNode.querySelector("input").value = questionData.answers[i];
        });

        // Remove previous event listener to avoid multiple bindings
        questionForm.removeEventListener("submit", handleSubmit);

        // Add event listener to form submission
        questionForm.addEventListener("submit", handleSubmit);
    } else {
        endQuiz();
    }
}

function handleSubmit(event) {
    event.preventDefault();
    const selectedAnswer = document.querySelector("input[name='answer']:checked");
    if (selectedAnswer) {
        checkAnswer(selectedAnswer.value);
    }
}

// Check if the selected answer is correct and remove time from the timer if incorrect while keeping user on the same question until they select the correct answer. The score at the end of the quiz will be the number of seconds remaining on the timer.
function checkAnswer(answer) {
    const questionData = quizQuestions[currentQuestionIndex];
    if (answer === questionData.correctAnswer) {
        score = timeLeft;
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    } else {
        timeLeft -= 10;
    }
}

function saveHighscore(initials, score) {
    // Check if highscoreData exists in local storage and compare it with current score
    // If current score is higher, update highscoreData
    // Save highscoreData to local storage
    const storedHighscoreData = JSON.parse(localStorage.getItem("highscoreData"));
    let highscoreData = storedHighscoreData || { initials: "", score: 0 };
    if (score > highscoreData.score) {
        highscoreData = { initials, score };
        localStorage.setItem("highscoreData", JSON.stringify(highscoreData));
    }
    // Update highscoreValue and highscoreInitials based on highscoreData
    highscoreValue.textContent = highscoreData.score;
    highscoreInitials.textContent = highscoreData.initials;

    // Remove initials input field and save button
    document.getElementById("quiz").removeChild(initialsInput);
    document.getElementById("quiz").removeChild(saveButton);


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
        location.reload();
        const initials = initialsInput.value;
        if (initials) {
            saveHighscore(initials, score);
        }    
    });
    document.getElementById("quiz").appendChild(initialsInput);
    document.getElementById("quiz").appendChild(saveButton);
    
}



function loadHighscore() {
    // Implement local storage logic here to load highscore
    const storedHighscoreData = JSON.parse(localStorage.getItem("highscoreData"));
    if (storedHighscoreData) {
        highscoreValue.textContent = storedHighscoreData.score;
        highscoreInitials.textContent = storedHighscoreData.initials;
    }
}

// Load highscore when the page loads
window.addEventListener("load", function() {
    loadHighscore();
});