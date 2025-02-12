document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modalImage");
  const closeBtn = document.getElementById("closeBtn");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  const images = Array.from(document.querySelectorAll(".image"));
  let currentImageIndex = 0;
  // TODO: (Issue #4) Create a function to update the state of the navigation buttons based on currentImageIndex

  function updateNavBtns() {
    prevBtn.disabled = currentImageIndex === 0;

    nextBtn.disabled = currentImageIndex === images.length - 1;
  }

  function updateModal() {
    modalImage.src = images[currentImageIndex].src;
    updateNavBtns();
  }
  // TODO: (Issue #1) Add an event listener for each image in the gallery to show it in the modal when clicked

  images.forEach((image, index) => {
    image.addEventListener("click", () => {
      modal.classList.remove("hidden"); //show modal
      currentImageIndex = index;
      updateModal();
    });
  });

  // TODO: (Issue #2) Add event listeners for the prevBtn and nextBtn for modal navigation functionality
  // Clean Code Hint: Issue #1 and #2 both deal with updating the modal image based on currentImageIndex. Consider creating a function to handle this functionality.
  prevBtn.addEventListener("click", () => {
    if (currentImageIndex > 0) {
      currentImageIndex--;
      updateModal();
    }
  });
  nextBtn.addEventListener("click", () => {
    if (currentImageIndex < images.length - 1) {
      currentImageIndex++;
      updateModal();
    }
  });

  // TODO: (Issue #3) Add an event listener for the closeBtn to close the modal

  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  // TODO: (Issue #3) Add an event listener to close the modal when clicking the modal background
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });
});
