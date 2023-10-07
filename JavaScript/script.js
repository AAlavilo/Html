document.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname.endsWith("/gallery.html")) {
        const galleryItems = document.querySelectorAll(".gallery-item");
        const previousBtn = document.getElementById("previousBtn");
        const nextBtn = document.getElementById("nextBtn");
        const previousBtn2 = document.getElementById("previousBtn2");
        const nextBtn2 = document.getElementById("nextBtn2");

        let currentIndex = 0;

        function showItem(index) {
            galleryItems.forEach((item, i) => {
                item.style.display = i === index ? "block" : "none";
            });
        }

        function updateParagraph(index) {
            const descriptions = document.querySelectorAll(".gallery-item p");
            descriptions.forEach((desc, i) => {
                desc.style.display = i === index ? "block" : "none";
            });
        }

        showItem(currentIndex);
        updateParagraph(currentIndex);

        previousBtn.addEventListener("click", function () {
            currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
            showItem(currentIndex);
            updateParagraph(currentIndex);
        });

        nextBtn.addEventListener("click", function () {
            currentIndex = (currentIndex + 1) % galleryItems.length;
            showItem(currentIndex);
            updateParagraph(currentIndex);
        });

        previousBtn2.addEventListener("click", function () {
            currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
            showItem(currentIndex);
            updateParagraph(currentIndex);
        });

        nextBtn2.addEventListener("click", function () {
            currentIndex = (currentIndex + 1) % galleryItems.length;
            showItem(currentIndex);
            updateParagraph(currentIndex);
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname.endsWith("/quiz.html")) {
        const submitButton = document.getElementById("submitQuiz");
        const resultsDiv = document.getElementById("results");
        const quizForm = document.getElementById("quiz");

        // Set the countdown time in seconds
        let countdownTime = 15;
        let timerInterval;

        // Function to start the countdown timer
        function startTimer() {
            timerInterval = setInterval(function () {
                countdownTime--;
                if (countdownTime <= 0) {
                    clearInterval(timerInterval);

                    showResults();
                } else {
                    // Update the timer display
                    resultsDiv.innerHTML = `Time remaining: ${countdownTime} seconds`;
                }
            }, 1000);
        }


        function stopTimer() {
            clearInterval(timerInterval);
        }


        function showResults() {
            // Check the answers and display results
            const q1Answer = document.querySelector('input[name="q1"]:checked');
            const q2Answer = document.querySelector('input[name="q2"]:checked');
            const q3Answer = document.querySelector('input[name="q3"]:checked');

            if (countdownTime <= 0) {
                resultsDiv.innerHTML = "Time's up!";
                const resetButton = document.createElement("button");
                resetButton.textContent = "Restart Quiz";
                resetButton.addEventListener("click", function () {
                    countdownTime = 15;
                    startTimer();
                    quizForm.reset();
                    resultsDiv.innerHTML = "Your quiz results will appear here.";
                });
                resultsDiv.appendChild(resetButton);
            } else if (!q1Answer || !q2Answer || !q3Answer) {
                resultsDiv.innerHTML = "Please answer all questions.";
            } else {
                const q1Value = q1Answer.value;
                const q2Value = q2Answer.value;
                const q3Value = q3Answer.value;

                let score = 0;

                if (q1Value === "a") score++;
                if (q2Value === "b") score++;
                if (q3Value === "a") score++;

                resultsDiv.innerHTML = `Your score: ${score} out of 3`;
                // Stop the timer
                stopTimer();
                const resetButton = document.createElement("button");
                resetButton.textContent = "Restart Quiz";
                resetButton.addEventListener("click", function () {
                    countdownTime = 15;
                    startTimer();
                    quizForm.reset();
                    resultsDiv.innerHTML = "Your quiz results will appear here.";
                });
                resultsDiv.appendChild(resetButton);
            }


        }

        // Start the timer when the page loads
        startTimer();

        submitButton.addEventListener("click", function (e) {
            e.preventDefault();
            showResults();
        });
    }
});


document.addEventListener("DOMContentLoaded", function () {

    if (window.location.pathname.endsWith("/about.html")) {
        function myCat(name, age, breed) {
            this.name = name;
            this.age = age,
                this.breed = breed;
        }

        const Halla = { Name: "Halla", Age: 3, Breed: "Mixed", cutenessScale: "Through the roof!" };
        document.getElementById("nameCell").textContent = Halla.Name;
        document.getElementById("ageCell").textContent = Halla.Age;
        document.getElementById("breedCell").textContent = Halla.Breed;
        document.getElementById("cuteCell").textContent = Halla.cutenessScale;
    }
});