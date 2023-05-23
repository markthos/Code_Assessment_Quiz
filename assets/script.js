var startButton = document.getElementById ("start-button");
var questionContainer = document.getElementById ("question-container");
var answerContainer = document.getElementById ("answer-container");
var timeContainer = document.getElementById ("time-container");
var scoreContainer = document.getElementById ("score-container");
var questions = [
    {
        question: 'What characters do you use to create an in-line comment?',
        answers: ['//', 'n/', '/**/'],
        correctAnswer: '//'
    },
    {
        question: 'Which code is a Jquery operation?',
        answers: ['document.queryselectAll("#root")', '$("#root")', 'document.getElementById("#root")'],
        coorectAnswer: '$("#root")'
    }
    {
        question: 'Which of these uses LIFO to access, store, and retrieve data?',
        answers: ['Queue', 'Array', 'Stack'],
        correctAnswer: 'Stack'
    }
    {
        question: 'Which of these are a non-linear data structure?',
        answers: ['Trees', 'Arrays', 'Stacks'],
        correctAnswer: 'Trees'
    }{
        question: 'In OOPS which concept refers to the wrapping of code and data together into a single unit',
        answers: ['Inheritance', 'Encapsulation', 'Polymorphism'],
        correctAnswer: 'Encapsulation'
    }
]

startButton.addEventListener("click", function(){});