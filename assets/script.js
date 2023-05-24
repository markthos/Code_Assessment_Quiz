
//pull html elements into usable variables
var startButton = document.getElementById ("start-button");
var questionContainer = document.getElementById ("question-container");
var timeContainer = document.getElementById ("time-container");
var scoreContainer = document.getElementById ("score-container");
var submitButton =document.getElementById("submit-button");

//create question objects with content, answers, and correct answers for quiz
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
//declare variables for quiz functions
var currentQuestion = 0;
var timer = 0;

//create function to start quiz with timer at 60 seconds
function startQuiz() {
    timer = 60;
    console.log(timer);
    showQuestion();
}

//create function to show questions with answer field
function showQuestion() {
    var question = questions[currentQuestion];
    document.getElementById("question-container").innerHTML = question.question;
    for (var i = 0; i < question.answers.length; i++) {
        var answer = document.createElement("input");
        answer.type = "radio";
        answer.name = "question";
        answer.value = question.answers[i];
        answer.id = "answer" + i;
        document.getElementById("question-container").appendChild(answer); 
    }
}

function submitAnswer() {
    var answer = document.getElementById("answer" + currentQuestion).value;
    if (answer == questions[currentQuestion].correctAnswer) {
      currentQuestion++;
      if (currentQuestion < questions.length) {
        showQuestion();
      } else {
        endQuiz();
      }
    } else {
      timer--;
    }
}

function endQuiz() {
    alert("Quiz is over!");
    document.getElementById("start").disabled = true;
    document.getElementById("submit").disabled = true;
    var input = document.createElement("input");
    input.type = "text";
    input.name = "initials";
    input.id = "initials";
    document.getElementById("question").appendChild(input);
    var input = document.createElement("input");
    input.type = "number";
    input.name = "score";
    input.id = "score";
    document.getElementById("question").appendChild(input);
}

startButton.addEventListener("click", startQuiz);
submitButton.addEventListener("click", submitAnswer);