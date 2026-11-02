let quizScore = 0;
let currentQuizQuestion = 0;

const quizQuestions = [

    {
        question:
        "What should you do if you receive a suspicious link?",

        options: [
            "Click it immediately",
            "Ignore and verify the message",
            "Share it with friends"
        ],

        answer: 1,

        explanation:
        "You should not click suspicious links. Verify the message using an official source."
    },

    {
        question:
        "Should you share your OTP with someone who calls you?",

        options: [
            "Yes",
            "Only if they say they are from the bank",
            "No"
        ],

        answer: 2,

        explanation:
        "Never share your OTP with anyone."
    },

    {
        question:
        "Which is a common warning sign of a scam?",

        options: [
            "Urgent request for money",
            "Normal conversation",
            "Official information"
        ],

        answer: 0,

        explanation:
        "Scammers often create urgency and pressure people to act quickly."
    },

    {
        question:
        "What should you do before making an online payment?",

        options: [
            "Verify the receiver",
            "Send money immediately",
            "Share your PIN"
        ],

        answer: 0,

        explanation:
        "Always verify the receiver and payment details before paying."
    },

    {
        question:
        "What should you do if you receive a suspicious message?",

        options: [
            "Reply with personal information",
            "Ignore it and report it if necessary",
            "Forward it to everyone"
        ],

        answer: 1,

        explanation:
        "Do not share personal information. Ignore and report suspicious messages."
    }

];


function loadQuizQuestion() {

    document.getElementById("question-number")
        .innerText =
        "Question " + (currentQuizQuestion + 1);

    document.getElementById("question")
        .innerText =
        quizQuestions[currentQuizQuestion].question;

    const buttons =
        document.querySelectorAll(".hero-buttons button");

    buttons[0].innerText =
        quizQuestions[currentQuizQuestion].options[0];

    buttons[1].innerText =
        quizQuestions[currentQuizQuestion].options[1];

    buttons[2].innerText =
        quizQuestions[currentQuizQuestion].options[2];

}


function checkQuizAnswer(selectedAnswer) {

    const correctAnswer =
        quizQuestions[currentQuizQuestion].answer;

    const result =
        document.getElementById("quiz-result");

    if (selectedAnswer === correctAnswer) {

        quizScore += 10;

        result.innerHTML =
            "✅ Correct!<br><br>" +
            quizQuestions[currentQuizQuestion].explanation;

        result.style.color = "#00ff88";

    } else {

        result.innerHTML =
            "❌ Incorrect.<br><br>" +
            quizQuestions[currentQuizQuestion].explanation;

        result.style.color = "#ff4444";
    }

    document.getElementById("quiz-next")
        .style.display = "inline-block";

}


function nextQuizQuestion() {

    currentQuizQuestion++;

    if (currentQuizQuestion >= quizQuestions.length) {

        document.getElementById("quiz-card").innerHTML =

        `
        <h2>🎉 Quiz Completed!</h2>

        <p>Your final score is:</p>

        <h1>${quizScore} / 50</h1>

        <p>
            Keep learning and stay safe online!
        </p>

        <button
            class="btn primary"
            onclick="location.reload()">

            Try Again

        </button>
        `;

        return;
    }

    loadQuizQuestion();

    document.getElementById("quiz-result")
        .innerText = "";

    document.getElementById("quiz-next")
        .style.display = "none";
}


// Load first question
loadQuizQuestion();