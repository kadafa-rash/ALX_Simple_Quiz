function checkAnswer() {
    const correctAnswer = "4"; // Step 1: Set correct answer

    // Step 2: Get user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    if (selectedOption) {
        const userAnswer = selectedOption.value;

        // Step 3: Compare user's answer with the correct answer
        const feedback = document.getElementById("feedback");

        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
        } else {
            feedback.textContent = "That's incorrect. Try again!";
        }
    } else {
        // Optional: No answer selected
        document.getElementById("feedback").textContent = "Please select an answer.";
    }
}

// Step 4: Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
