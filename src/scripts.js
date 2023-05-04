document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modalImage");
  const closeBtn = document.getElementById("closeBtn");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  const images = Array.from(document.querySelectorAll(".image"));
  let currentImageIndex = 0;

  // TODO: (Issue #1) Add an event listener for each image in the gallery to show it in the modal when clicked
  for(let i = 0; i < images.length; i++){
    images[i].addEventListener('click', () => {
      images[i].classList.toggle('modal-image')
      modal.classList.remove('hidden')
      modalImage.src = images[i].src
      currentImageIndex = i
      if(i == 0) prevBtn.setAttribute('disabled',true)
      if(i == images.length -1) nextBtn.setAttribute('disabled',true)
    })
  }
  // TODO: (Issue #2) Add event listeners for the prevBtn and nextBtn for modal navigation functionality
  nextBtn.addEventListener('click', () => {
    let i = currentImageIndex
    if(i == 0) prevBtn.removeAttribute('disabled')
    images[i].classList.toggle('modal-image')
    i++
    images[i].classList.toggle('modal-image')
    modalImage.src = images[i].src
    currentImageIndex = i
    if(i == images.length -1) nextBtn.setAttribute('disabled',true)
  })
  prevBtn.addEventListener('click', () => {
    if(currentImageIndex == 0) return
    let i = currentImageIndex
    if(i == images.length - 1) nextBtn.removeAttribute('disabled')
    
    images[i].classList.toggle('modal-image')
    i--
    images[i].classList.toggle('modal-image')
    modalImage.src = images[i].src
    currentImageIndex = i
    if(i == 0) prevBtn.setAttribute('disabled',true)
  })

  // Clean Code Hint: Issue #1 and #2 both deal with updating the modal image based on currentImageIndex. Consider creating a function to handle this functionality.

  // TODO: (Issue #3) Add an event listener for the closeBtn to close the modal
  closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden')
  })

  // TODO: (Issue #3) Add an event listener to close the modal when clicking the modal background
  // modal.addEventListener('click', () => {
  //   modal.classList.add('hidden')
  // })
  // TODO: (Issue #4) Create a function to update the state of the navigation buttons based on currentImageIndex
});
