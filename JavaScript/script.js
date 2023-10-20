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

        // setting the time limit for the quiz
        let countdownTime = 15;
        let timerInterval;


        function startTimer() {
            timerInterval = setInterval(function () {
                countdownTime--;
                if (countdownTime <= 0) {
                    clearInterval(timerInterval);

                    showResults();
                } else {
                    // updating the display of the timer
                    resultsDiv.innerHTML = `Time remaining: ${countdownTime} seconds`;
                }
            }, 1000);
        }


        function stopTimer() {
            clearInterval(timerInterval);
        }


        function showResults() {

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

        // staring the timer when the page loads
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

        fetch("gallery.html")
            .then(response => response.text())
            .then(data => {
                // making a temporary container
                const tempContainer = document.createElement("div");
                tempContainer.innerHTML = data;

                // finding the right image
                const imageElement = tempContainer.querySelector('img[src="HTML_kuvia/soAsleep_Halla2.jpg"][alt="VerySleepy"]');

                if (imageElement) {
                    // cloning the image
                    const clonedImage = imageElement.cloneNode(true);

                    // applying the css here for training
                    clonedImage.style.maxWidth = "65%";
                    clonedImage.style.maxHeight = "65%"

                    const imageContainer = document.getElementById("imageFromGallery");
                    imageContainer.appendChild(clonedImage);
                } else {
                    console.error("Image not found in gallery.html");
                }
            })
            .catch(error => {
                console.error("Error fetching image:", error);
            });


    }


});

document.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname.endsWith("/portfolio.html")) {
        var slideIndex = 0;

        function showSlides() {
            var i;
            var slides = document.querySelectorAll(".VileWoodPic");

            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }

            slideIndex++;
            if (slideIndex > slides.length) {
                slideIndex = 1;
            }
            slides[slideIndex - 1].style.display = "block";

            setTimeout(showSlides, 3000); // You can adjust the time to show the next picture here
        }

        // Start the slideshow
        showSlides();
    }
});

document.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname.endsWith("/portfolio.html")) {
        var slideIndex = 0;

        function showSlides() {
            var i;
            var slides = document.querySelectorAll(".ATMPic");

            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }

            slideIndex++;
            if (slideIndex > slides.length) {
                slideIndex = 1;
            }
            slides[slideIndex - 1].style.display = "block";

            setTimeout(showSlides, 6000); // You can adjust the time to show the next picture here
        }

        // Start the slideshow
        showSlides();
    }
});