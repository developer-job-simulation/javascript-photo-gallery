const images = Array.from(document.querySelectorAll(".image"));
let currentImageIndex = 0;

function addImageToModal(imageIndex) {
  modalImage.src = images[imageIndex].src;
}

function activateImageModal() {
  images.forEach((element) => {
    element.addEventListener("click", (e) => {
      modalImage.src = e.target.src;
      modal.classList.remove("hidden");
      currentImageIndex = images.indexOf(element);
    });
  });
}

function addInteractivityPreviousButton() {
  prevBtn.addEventListener("click", (e) => {
    currentImageIndex = currentImageIndex === 0 ? 0 : currentImageIndex - 1;
    addImageToModal(currentImageIndex);
  });
}

function addInteractivityNextButton() {
  nextBtn.addEventListener("click", (e) => {
    currentImageIndex =
      currentImageIndex === images.length
        ? images.length
        : currentImageIndex + 1;
    addImageToModal(currentImageIndex);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modalImage");
  const closeBtn = document.getElementById("closeBtn");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  activateImageModal();
  addInteractivityPreviousButton();
  addInteractivityNextButton();

  // TODO: (Issue #3) Add an event listener for the closeBtn to close the modal

  // TODO: (Issue #3) Add an event listener to close the modal when clicking the modal background

  // TODO: (Issue #4) Create a function to update the state of the navigation buttons based on currentImageIndex
});
