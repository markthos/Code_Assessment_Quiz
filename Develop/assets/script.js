// Get the start button, submit button, quiz container, and high scores container
const startButton = document.getElementById("start");
const submitButton = document.getElementById("submit");
const quizContainer = document.getElementById("quiz");
const highScoresContainer = document.getElementById("high-scores-container");

// Define the correct answers for each question
const correctAnswers = ["a", "b", "c", "a", "b"];

// Define high scores
let highScores = [];

// Hide the main id="quiz" element until the start button is clicked
quizContainer.style.display = "none";

//add start timer function
function startTimer() {
    // Set the time
    let time = 60;
    // Set the timer interval
    let timerInterval = setInterval(function () {
        // Decrement the time
        time--;
        // Display the time
        document.getElementById("time").textContent = time;
        // If the time is less than or equal to 0, clear the interval and display the high scores
        if (time <= 0) {
            clearInterval(timerInterval);
            quizContainer.style.display = "none";
            highScoresContainer.style.display = "block";
        }
    }, 1000);
}


// Add event listener to start button
startButton.addEventListener("click", function () {
    // Prompt user for initials
    const initials = prompt("Enter your initials:");
    // Hide the start button
    startButton.style.display = "none";
    // Show the quiz questions one at a time
    quizContainer.style.display = "block";
    // Start the timer
    startTimer();

});
// Add event listener to submit button
submitButton.addEventListener("click", function () {
    // Get all the questions
    const questions = quizContainer.querySelectorAll(".question");

    // Keep track of the number of correct answers
    let numCorrect = 0;

    // Loop through each question
    questions.forEach((question, index) => {
        // Get the answer inputs for the current question
        const answerInputs = question.querySelectorAll(".answer-input");

        // Loop through each answer input
        answerInputs.forEach(answerInput => {
            // If the answer input is checked and the value matches the correct answer, increment the number of correct answers
            if (answerInput.checked && answerInput.value === correctAnswers[index]) {
                numCorrect++;
            }
        });
    });

    // Display the number of correct answers
    alert("You got " + numCorrect + " questions correct!");
});

