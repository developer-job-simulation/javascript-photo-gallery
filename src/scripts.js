document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modalImage");
  const closeBtn = document.getElementById("closeBtn");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  const images = Array.from(document.querySelectorAll(".image"));
  let currentImageIndex = 0;

  images.map((image, index) => {
    image.addEventListener("click", () => {
      modalImage.src = image.src;
      modal.classList.remove("hidden");
      currentImageIndex = index;
      updateState(currentImageIndex);
    });
  });

  prevBtn.addEventListener("click", () => {
    updateState(currentImageIndex);
    --currentImageIndex;
    modalImage.src = images[currentImageIndex].src;
    updateState(currentImageIndex);
  });
  nextBtn.addEventListener("click", () => {
    updateState(currentImageIndex);
    ++currentImageIndex;
    modalImage.src = images[currentImageIndex].src;
    updateState(currentImageIndex);
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  document.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.add("hidden");
    }
  });

  function updateState(currentImageIndex) {
    if (currentImageIndex === 0) prevBtn.disabled = true;
    else if (currentImageIndex === images.length - 1) nextBtn.disabled = true;
    else {
      prevBtn.disabled = false;
      nextBtn.disabled = false;
    }
  }
});
