
function restartQuiz() {
    // Redirect back to the home page to start over
    window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name'); // Retrieve name from query parameters
    const score = urlParams.get('score');
    const questions = JSON.parse(decodeURIComponent(urlParams.get('questions')));

    const scoreDiv = document.getElementById('score');
    scoreDiv.textContent = `Hi ${name}, you scored ${score} out of ${questions.length}!`; // Display the user's name

    const answersDiv = document.getElementById('answers');
    let correctAnswers = 0;

    // Iterate over questions to display each question and the user's answer
    questions.forEach((question, index) => {
        const answerItem = document.createElement('div');
        answerItem.innerHTML = `<strong>Question ${index + 1}:</strong> ${question.question}<br>`;
        answerItem.innerHTML += `<em>Correct Answer:</em> ${question.answer}<br>`;
        answerItem.innerHTML += `<em>Explanation:</em> ${question.explanation}<br>`;
        answersDiv.appendChild(answerItem);

        // Check if user's answer matches the correct answer
        if (question.userAnswerIndex !== undefined && question.options[question.userAnswerIndex] === question.answer) {
            correctAnswers++;
        }
    });



});

