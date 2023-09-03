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

// Add click event listener for the "prev" button
prevBtn.addEventListener("click", () => {
  updateModalWithImage(currentImageIndex - 1); // Show the previous image
});

// Add click event listener for the "next" button
nextBtn.addEventListener("click", () => {
  updateModalWithImage(currentImageIndex + 1); // Show the next image
});


// TODO: (Issue #3) Add an event listener for the closeBtn to close the modal

  // Add click event listener to close the modal when the closeBtn is clicked
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none"; // Close the modal
  });


  // TODO: (Issue #3) Add an event listener to close the modal when clicking the modal background
  
  // Add click event listener for the modal background to close the modal
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none"; // Close the modal
  }
});

  // TODO: (Issue #4) Create a function to update the state of the navigation buttons based on currentImageIndex

// Function to update the modal with the image at the specified index
function updateModalWithImage(index) {
  if (index >= 0 && index < images.length) {
    currentImageIndex = index; // Update the current image index
    const imageSrc = images[currentImageIndex].getAttribute("src");
    modalImage.src = imageSrc; // Set the image source in the modal
  }

  // Disable "prev" button if it's the first image, and enable it otherwise
  prevBtn.disabled = currentImageIndex === 0;

  // Disable "next" button if it's the last image, and enable it otherwise
  nextBtn.disabled = currentImageIndex === images.length - 1;
}

});


  
  // Clean Code Hint: Issue #1 and #2 both deal with updating the modal image based on currentImageIndex. Consider creating a function to handle this functionality.

  



