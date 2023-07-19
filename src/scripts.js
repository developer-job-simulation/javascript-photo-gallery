document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modalImage");
    const closeBtn = document.getElementById("closeBtn");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    const images = Array.from(document.querySelectorAll(".image"));
    let currentImageIndex = 0;

    // TODO: (Issue #1) Add an event listener for each image in the gallery to show it in the modal when clicked
    images.forEach(function (image) {
        image.addEventListener("click", function (event) {
            currentImageIndex = images.indexOf(image);
            updateModalImage(currentImageIndex);
            modal.classList.toggle("hidden");
        });
    });
    // TODO: (Issue #2) Add event listeners for the prevBtn and nextBtn for modal navigation functionality
    function updateModalImage(imgIndex) {
        modalImage.setAttribute("src", images[imgIndex].getAttribute("src"));
    }

    prevBtn.addEventListener("click", function () {
        updateModalImage(--currentImageIndex);
    });
    nextBtn.addEventListener("click", function () {
        updateModalImage(++currentImageIndex);
    });

    // Clean Code Hint: Issue #1 and #2 both deal with updating the modal image based on currentImageIndex. Consider creating a function to handle this functionality.

    // TODO: (Issue #3) Add an event listener for the closeBtn to close the modal

    // TODO: (Issue #3) Add an event listener to close the modal when clicking the modal background

    // TODO: (Issue #4) Create a function to update the state of the navigation buttons based on currentImageIndex
});
