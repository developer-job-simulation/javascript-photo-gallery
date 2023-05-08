document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modalImage");
  const closeBtn = document.getElementById("closeBtn");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  const images = Array.from(document.querySelectorAll(".image"));
  let currentImageIndex = 0;

  for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", () => {
      modal.className = "modal";
      modalImage.src = images[i].src;
      currentImageIndex = i;
      updateButtons();
    });
  }

  prevBtn.addEventListener("click", () => {
    currentImageIndex--;
    modalImage.src = images[currentImageIndex].src;   
    updateButtons();
  });

  nextBtn.addEventListener("click", () => {
    currentImageIndex++;
    modalImage.src = images[currentImageIndex].src;
    updateButtons();
  });

  closeBtn.addEventListener("click", () => {
    modal.className = "hidden";
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.className = "hidden";
    }
  });

  function updateButtons() {
    if (currentImageIndex === 0) {
      prevBtn.disabled = true;
    } else {
      prevBtn.disabled = false;
    }
    if (currentImageIndex === images.length - 1) {
      nextBtn.disabled = true;
    } else {
      nextBtn.disabled = false;
    }
  }
});
