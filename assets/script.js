// pull html elements into usable variables
var startButton = document.getElementById("start-button");
var questionContainer = document.getElementById("question-container");
var timeContainer = document.getElementById("time");
var scoreContainer = document.getElementById("score");
var submitButton = document.getElementById("submit-button");

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

// create function to start quiz with timer at 60 seconds
function startQuiz() {
    timer = 60;
    showQuestion();
    var countdown = setInterval(function() {
        timer--;
        timeContainer.innerHTML = "Time: " + timer;
        if (timer <= 0) {
            endQuiz();
            clearInterval(countdown);
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
    var answer = document.querySelector("input[name='question']:checked").value;
    if (answer == questions[currentQuestion].correctAnswer) {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            endQuiz();
        }
    } else {
        timer -= 10;
    }
}

function endQuiz() {
    questionContainer.innerHTML = "Quiz is over!";
    startButton.disabled = true;
    submitButton.disabled = true;
    var initialsInput = document.createElement("input");
    initialsInput.type = "text";
    initialsInput.name = "initials";
    initialsInput.placeholder = "Enter your initials";
    questionContainer.appendChild(initialsInput);
    var scoreInput = document.createElement("input");
    scoreInput.type = "number";
    scoreInput.name = "score";
    scoreInput.placeholder = "Enter your score";
    questionContainer.appendChild(scoreInput);
}

startButton.addEventListener("click", startQuiz);
submitButton.addEventListener("click", submitAnswer);
