const images = Array.from(document.querySelectorAll(".image"));
let currentImageIndex = 0;

function addImageToModal(imageIndex) {
  modalImage.src = images[imageIndex].src;
}

function handleNavigationButtonsState() {
  prevBtn.disabled = currentImageIndex === 0;
  nextBtn.disabled = currentImageIndex === images.length - 1;
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
    handleNavigationButtonsState();
    addImageToModal(currentImageIndex);
  });
}

function addInteractivityNextButton() {
  nextBtn.addEventListener("click", (e) => {
    currentImageIndex =
      currentImageIndex === images.length
        ? images.length
        : currentImageIndex + 1;
    handleNavigationButtonsState();
    addImageToModal(currentImageIndex);
  });
}

function activateModalClose() {
  closeBtn.addEventListener("click", (e) => {
    modal.classList.add("hidden");
  });

  window.addEventListener("click", (event) => {
    return event.target === modal ? modal.classList.add("hidden") : null;
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
  activateModalClose();
});
