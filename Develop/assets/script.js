// Get the submit button and quiz container
const submitButton = document.getElementById("submit");
const quizContainer = document.getElementById("quiz-container");

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

// Define the correct answers for each question
const correctAnswers = ["A", "B", "C", "A", "B"];

