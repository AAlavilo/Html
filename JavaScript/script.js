document.addEventListener("DOMContentLoaded", function () {
    const galleryItems = document.querySelectorAll(".gallery-item");
    const previousBtn = document.getElementById("previousBtn");
    const nextBtn = document.getElementById("nextBtn");

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

});
