document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modalImage");
  const closeBtn = document.getElementById("closeBtn");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  const images = Array.from(document.querySelectorAll(".image"));
  let currentImageIndex = 0;

  // Event Listeners

  images.forEach((image, index) => {
    image.addEventListener('click', () => {
      openModal(index);
    });
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  prevBtn.addEventListener('click', () => {
    showPrevImage();
  });
  
  nextBtn.addEventListener('click', () => {
    showNextImage();
  });

  closeBtn.addEventListener('click', () => {
    closeModal();
  });

  // Functions

  function openModal(index) {
    modal.className = "modal";
    modalImage.src = images[index].src;
    currentImageIndex = index;
    updateButtonState();
  };

  function closeModal() {
    modal.className = "modal hidden";
  };

  function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    modalImage.src = images[currentImageIndex].src;
    updateButtonState();
  }

  function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    modalImage.src = images[currentImageIndex].src;
    updateButtonState();
  }

  function updateButtonState() {
    prevBtn.disabled = currentImageIndex === 0;
    nextBtn.disabled = currentImageIndex === images.length - 1;
  };

  updateButtonState();
});
