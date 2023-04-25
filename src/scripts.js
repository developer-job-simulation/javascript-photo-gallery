document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modalImage");
  const closeBtn = document.getElementById("closeBtn");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  const images = Array.from(document.querySelectorAll(".image"));
  let currentImageIndex = 0;

  // TODO: (Issue #1) Add an event listener for each image in the gallery to show it in the modal when clicked
  images.forEach((image, index) => {
    image.addEventListener("click", () => {
      currentImageIndex = index;
      updateModalImage();
      updateNavButtons();
      modal.classList.remove("hidden");
    });
  });
  // TODO: (Issue #2) Add event listeners for the prevBtn and nextBtn for modal navigation functionality
  prevBtn.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateModalImage();
    updateNavButtons();
  });

  nextBtn.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateModalImage();
    updateNavButtons();
  });
  // Clean Code Hint: Issue #1 and #2 both deal with updating the modal image based on currentImageIndex. Consider creating a function to handle this functionality.

  function updateModalImage() {
    modalImage.src = images[currentImageIndex].src;
  }

  // TODO: (Issue #3) Add an event listener for the closeBtn to close the modal
  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  // TODO: (Issue #3) Add an event listener to close the modal when clicking the modal background

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.add("hidden");
    }
  });

  // TODO: (Issue #4) Create a function to update the state of the navigation buttons based on currentImageIndex

  function updateNavButtons() {
    prevBtn.disabled = currentImageIndex === 0;
    nextBtn.disabled = currentImageIndex === images.length - 1;
  }
});
