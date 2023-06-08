// pull html elements into usable variables
var startButton = document.getElementById("start-button");
var questionContainer = document.getElementById("question-container");
var timeContainer = document.getElementById("time");
var scoreContainer = document.getElementById("score");
var submitButton = document.getElementById("submit-button");
var restartButton = document.getElementById("restart-button");
var highScoresContainer = document.getElementById("high-scores-container");



// hide submit button until quiz starts
submitButton.style.display = "none";

// hide restart button until quiz ends
restartButton.style.display = "none";

// retrieve high scores from local storage and display them in high scores container
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
highScoresContainer.innerHTML = highScores.map(score => {
    return `<li>${score.name} - ${score.score}</li>`;
}).join("");



// create question objects with content, answers, and correct answers for quiz
var questions = [
    {
        question: 'What characters do you use to create an in-line comment?',
        answers: ['//', 'n/', '/**/'],
        correctAnswer: '//',
    },
    {
        question: 'Which code is a Jquery operation?',
        answers: ['document.queryselectAll("#root")', '$("#root")', 'document.getElementById("#root")'],
        correctAnswer: '$("#root")',
    },
    {
        question: 'Which of these uses LIFO to access, store, and retrieve data?',
        answers: ['Queue', 'Array', 'Stack'],
        correctAnswer: 'Stack',
    },
    {
        question: 'Which of these are a non-linear data structure?',
        answers: ['Trees', 'Arrays', 'Stacks'],
        correctAnswer: 'Trees',
    },
    {
        question: 'In OOPS which concept refers to the wrapping of code and data together into a single unit',
        answers: ['Inheritance', 'Encapsulation', 'Polymorphism'],
        correctAnswer: 'Encapsulation',
    },
];
// declare variables for quiz functions
var currentQuestion = 0;
var timer = 0;
var score = 0;
var countdown;

// create function to start quiz with timer at 60 seconds
function startQuiz() {
    timer = 60;
    startButton.style.display = "none";
    submitButton.style.display = "block";
    showQuestion();
    countdown = setInterval(function() {
        timer--;
        timeContainer.innerHTML = "" + timer;
        if (timer <= 0) {
            clearInterval(countdown);
            endQuiz();
        }
    }, 1000);
}

// create function to show questions with answer field
function showQuestion() {
    var question = questions[currentQuestion];
    questionContainer.innerHTML = question.question;
    for (var i = 0; i < question.answers.length; i++) {
        var answer = document.createElement("label");
        var radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "question";
        radio.value = question.answers[i];
        radio.id = "answer" + i;
        answer.appendChild(radio);
        var span = document.createElement("span");
        span.innerHTML = question.answers[i];
        answer.appendChild(span);
        questionContainer.appendChild(answer);
    }
}

function submitAnswer() {
    var selectedAnswer = document.querySelector("input[name='question']:checked");
    if (selectedAnswer) {
        var answer = selectedAnswer.value;
        if (answer == questions[currentQuestion].correctAnswer) {
            score += 5;
            scoreContainer.innerHTML = "" + score; // Update the score display
            currentQuestion++;
            if (currentQuestion < questions.length) {
                showQuestion();
            } else {
                endQuiz();
            }
        } else {
            timer -= 10;
        }
    } else {
        // No answer selected, handle the error here

    }
}

function endQuiz() {
    questionContainer.innerHTML = "Quiz is over!";
    startButton.disabled = true;
    submitButton.disabled = true;
    startButton.style.display = "none";
    submitButton.style.display = "none";
    restartButton.style.display = "block";

    clearInterval(countdown);

    var endContainer = document.getElementById("end-container");

    var initialsInput = document.createElement("input");
    initialsInput.type = "text";
    initialsInput.name = "initials";
    initialsInput.placeholder = "Enter your initials";
    endContainer.appendChild(initialsInput);

    var scoreInput = document.createElement("input");
    scoreInput.type = "number";
    scoreInput.name = "score";
    scoreInput.placeholder = "Enter your score";
    endContainer.appendChild(scoreInput);
    
    // Storing score and intials in local storage
    initialsInput.addEventListener("input", function() {
        localStorage.setItem("initials", initialsInput.value);
    });
    scoreInput.addEventListener("input", function() {
        localStorage.setItem("score", scoreInput.value);
    });

    //Retrieving and displaying stored scoree and initials
    var storedInitials = localStorage.getItem("initials");
    var storedScore = localStorage.getItem("score");

    initialsInput.value = storedInitials || ""; // Display stored initials if available
    scoreInput.value = storedScore || ""; // Display stored score if available
}
restartButton.addEventListener("click", function() {
    location.reload();
});

startButton.addEventListener("click", startQuiz);
submitButton.addEventListener("click", submitAnswer);

