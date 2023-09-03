document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modalImage");
  const closeBtn = document.getElementById("closeBtn");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  const images = Array.from(document.querySelectorAll(".image"));
  let currentImageIndex = 0;

  // Function to open the modal and display the clicked image
  function openModal(imageSrc) {
    modalImage.src = imageSrc; // Set the image source in the modal
    modal.style.display = "block"; // Show the modal
  }

  // Add click event listeners to all images
  images.forEach((image, index) => {
    image.addEventListener("click", () => {
      currentImageIndex = index; // Update the current image index
      const imageSrc = image.getAttribute("src");
      openModal(imageSrc); // Call the openModal function with the clicked image source
    });
  });

  // TODO: (Issue #2) Add event listeners for the prevBtn and nextBtn for modal navigation functionality
  // Clean Code Hint: Issue #1 and #2 both deal with updating the modal image based on currentImageIndex. Consider creating a function to handle this functionality.

  // TODO: (Issue #3) Add an event listener for the closeBtn to close the modal

  // TODO: (Issue #3) Add an event listener to close the modal when clicking the modal background

  // TODO: (Issue #4) Create a function to update the state of the navigation buttons based on currentImageIndex
});
