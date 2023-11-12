document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modalImage");
  const closeBtn = document.getElementById("closeBtn");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  const images = Array.from(document.querySelectorAll(".image"));
  let currentImageIndex;

  // TODO: (Issue #1) Add an event listener for each image in the gallery to show it in the modal when clicked
    for (let i = 0; i < images.length; i++) {
      images[i].addEventListener("click", () => {
        modal.classList.remove("hidden");
        modalImage.src = images[i].src;
        currentImageIndex = i
        console.log(currentImageIndex)
        disableNav(currentImageIndex)
      })
    }

  // TODO: (Issue #2) Add event listeners for the prevBtn and nextBtn for modal navigation functionality
    prevBtn.addEventListener("click", () => {
      if (currentImageIndex > 0) {
        currentImageIndex = currentImageIndex - 1;
        console.log(currentImageIndex)
        modalImage.src = images[currentImageIndex].src
        disableNav(currentImageIndex)
      }
    })

    nextBtn.addEventListener("click", () => {
      if (currentImageIndex < images.length - 1) {
        currentImageIndex = currentImageIndex + 1;
        console.log(currentImageIndex)
        modalImage.src = images[currentImageIndex].src
        disableNav(currentImageIndex)
      }
    })
  // TODO: (Issue #3) Add an event listener for the closeBtn to close the modal
    closeBtn.addEventListener("click", () => {
      modal.classList.add("hidden");
    })
  // TODO: (Issue #3) Add an event listener to close the modal when clicking the modal background
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.classList.add("hidden");
      }
    });
  // TODO: (Issue #4) Create a function to update the state of the navigation buttons based on currentImageIndex
  function disableNav (currentImageIndex) {
    switch (currentImageIndex) {
    case 0:
      prevBtn.disabled = true;
      nextBtn.disabled = false;
      break;
    case 11:
      prevBtn.disabled = false;
      nextBtn.disabled = true;
      break;
    default:
      prevBtn.disabled = false;
      nextBtn.disabled = false;
      break;
    }
  }
});
