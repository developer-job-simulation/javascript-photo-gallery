document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modalImage");
  const closeBtn = document.getElementById("closeBtn");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  const images = Array.from(document.querySelectorAll(".image"));
  let currentImageIndex = 0;

  // event listener for each image in the gallery to show it in the modal when clicked
  images.forEach((image, index) => {
    image.addEventListener("click", () => {
      currentImageIndex = index;
      showModal();
    });
  });

  // show modal
  const showModal = () => {
    modal.classList.remove("hidden");
    updateModalImage();
    disableBtn();
  };

  // the modal will show currentImageIndex (clicked) image
  const updateModalImage = () => {
    const imageToShow = images[currentImageIndex].src;
    modalImage.src = imageToShow;
  };

  // event listeners for the prevBtn and nextBtn for modal navigation functionality
  // function to handle this functionality.
  const handleNavigation = (direction) => {
    if (direction === "prev" && currentImageIndex > 0) {
      currentImageIndex--;
    } else if (direction === "next" && currentImageIndex < images.length - 1) {
      currentImageIndex++;
    }
    updateModalImage();
    disableBtn();
  };

  prevBtn.addEventListener("click", () => {
    handleNavigation("prev");
  });

  nextBtn.addEventListener("click", () => {
    handleNavigation("next");
  });

  // event listener for the closeBtn to close the modal
  const closeModal = () => modal.classList.add("hidden");

  closeBtn.addEventListener("click", closeModal);

  // event listener to close the modal when clicking the modal background
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  // function to update the state of the navigation buttons based on currentImageIndex
  const disableBtn = () => {
    prevBtn.disabled = currentImageIndex === 0;
    nextBtn.disabled = currentImageIndex === images.length - 1;
  };
});
