document.addEventListener("DOMContentLoaded", function () {
    const showreel = document.querySelector(".showreel");

    // Clone the images from the gallery into the showreel
    const galleryImages = document.querySelectorAll(".image-gallery img");
    galleryImages.forEach((img) => {
        const clone = img.cloneNode(true);
        showreel.appendChild(clone);
    });

    // Adjust the animation duration based on the number of images
    const animationDuration = (galleryImages.length * 5) + "s"; // Adjust as needed
    document.styleSheets[0].insertRule(`@keyframes scrollShowreel { 100% { transform: translateX(-100%); } }`, 0);
    document.styleSheets[0].cssRules[0].style.animationDuration = animationDuration;
});
