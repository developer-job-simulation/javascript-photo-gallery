document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal')
  const modalImage = document.getElementById('modalImage')
  const closeBtn = document.getElementById('closeBtn')
  const prevBtn = document.getElementById('prevBtn')
  const nextBtn = document.getElementById('nextBtn')

  const images = Array.from(document.querySelectorAll('.image'))
  let currentImageIndex = 0

  // TODO: (Issue #1) Add an event listener for each image in the gallery to show it in the modal when clicked
  images.forEach((element) => {
    element.addEventListener('click', () => {
      modal.classList.remove('hidden')
      setCurrentImg(images.indexOf(element))
    })
  })

  // TODO: (Issue #2) Add event listeners for the prevBtn and nextBtn for modal navigation functionality
  nextBtn.addEventListener('click', () => setCurrentImg(currentImageIndex + 1))
  prevBtn.addEventListener('click', () => setCurrentImg(currentImageIndex - 1))

  // TODO: (Issue #3) Add an event listener for the closeBtn to close the modal
  closeBtn.addEventListener('click', () => modal.classList.add('hidden'))

  // TODO: (Issue #3) Add an event listener to close the modal when clicking the modal background
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.classList.add('hidden')
    }
  })

  // TODO: (Issue #4) Create a function to update the state of the navigation buttons based on currentImageIndex
  function setBtnDisabled() {
    if (currentImageIndex === 0) prevBtn.disabled = true
    else prevBtn.disabled = false
    if (currentImageIndex === images.length - 1) nextBtn.disabled = true
    else nextBtn.disabled = false
  }

  // Clean Code Hint: Issue #1 and #2 both deal with updating the modal image based on currentImageIndex. Consider creating a function to handle this functionality.
  function setCurrentImg(i) {
    modalImage.src = images[i].src
    currentImageIndex = i
    setBtnDisabled()
  }
})
