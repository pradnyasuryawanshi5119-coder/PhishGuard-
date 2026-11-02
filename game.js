let score = 0;
let currentQuestion = 0;

const questions = [

    {
        message:
        "Your account will be blocked today. Click the link immediately to verify your account.",

        answer: "scam",

        explanation:
        "This message creates urgency and asks you to click a link. These are common warning signs of a scam."
    },

    {
        message:
        "Your friend sent you a normal message asking how your day is going.",

        answer: "safe",

        explanation:
        "This message does not request money, passwords, OTPs or suspicious links."
    },

    {
        message:
        "Congratulations! You won ₹50,000. Pay ₹500 processing fee to claim your prize.",

        answer: "scam",

        explanation:
        "Unexpected prize messages asking for payment are a common scam warning sign."
    },

    {
        message:
        "Your delivery is delayed. Please check the delivery status using the official company app.",

        answer: "safe",

        explanation:
        "Using the official company app rather than an unknown link is a safer approach."
    },

    {
        message:
        "Your bank needs your OTP. Reply with the OTP to keep your account active.",

        answer: "scam",

        explanation:
        "Never share an OTP with someone who contacts you unexpectedly."
    }

];


function checkAnswer(selectedAnswer) {

    const correctAnswer =
        questions[currentQuestion].answer;

    const result =
        document.getElementById("result");

    if (selectedAnswer === correctAnswer) {

        score += 10;

        result.innerHTML =
            "✅ Correct!<br><br>" +
            questions[currentQuestion].explanation;

        result.style.color = "#00ff88";

    } else {

        result.innerHTML =
            "❌ Not quite.<br><br>" +
            questions[currentQuestion].explanation;

        result.style.color = "#ff4444";
    }

    document.getElementById("score").innerText =
        score;

    document.getElementById("nextButton")
        .style.display = "inline-block";

}


function nextQuestion() {

    currentQuestion++;

    if (currentQuestion >= questions.length) {

        document.getElementById("game-card").innerHTML =

            `
            <h2>🎉 Game Completed!</h2>

            <p>
                Your final score is:
            </p>

            <h1>${score} / 50</h1>

            <p>
                Keep learning and stay alert
                against online scams.
            </p>

            <button
                class="btn primary"
                onclick="location.reload()">

                Play Again

            </button>
            `;

        return;
    }


    document.getElementById("question-number")
        .innerText =
        "Scenario " + (currentQuestion + 1);


    document.getElementById("message")
        .innerText =
        questions[currentQuestion].message;


    document.getElementById("result")
        .innerText = "";


    document.getElementById("nextButton")
        .style.display = "none";
}