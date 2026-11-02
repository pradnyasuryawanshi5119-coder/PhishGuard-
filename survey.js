const surveyForm = document.getElementById("surveyForm");

surveyForm.addEventListener("submit", function(event) {

    // Stop page from refreshing
    event.preventDefault();

    // Get selected answers
    const q1 = document.querySelector('input[name="q1"]:checked').value;
    const q2 = document.querySelector('input[name="q2"]:checked').value;
    const q3 = document.querySelector('input[name="q3"]:checked').value;
    const q4 = document.querySelector('input[name="q4"]:checked').value;
    const q5 = document.querySelector('input[name="q5"]:checked').value;

    // Show result
    document.getElementById("survey-result").innerHTML = `

        <div class="card" style="margin-top:30px;">

            <h2>🎉 Thank You!</h2>

            <p>
                Your feedback has been submitted successfully.
            </p>

            <br>

            <p><strong>Your Responses:</strong></p>

            <p>Q1: ${q1}</p>
            <p>Q2: ${q2}</p>
            <p>Q3: ${q3}</p>
            <p>Q4: ${q4}</p>
            <p>Q5: ${q5}</p>

            <br>

            <p>
                🛡️ Your feedback helps improve
                cyber safety awareness.
            </p>

        </div>

    `;

    // Hide form after submission
    surveyForm.style.display = "none";

});