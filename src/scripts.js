document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modalImage');
  const closeBtn = document.getElementById('closeBtn');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  const images = Array.from(document.querySelectorAll('.image'));
  let currentImageIndex = 0;

  images.forEach((image) =>
    image.addEventListener('click', (event) => {
      modal.classList.remove('hidden');
      modalImage.src = image.src;

      currentImageIndex = images.indexOf(image);
      updateModalNavigation(currentImageIndex);
    })
  );

  nextBtn.addEventListener('click', (event) => {
    if (currentImageIndex !== 11) {
      modalImage.src = images[++currentImageIndex].src;
    }
    updateModalNavigation(currentImageIndex);
  });

  prevBtn.addEventListener('click', (event) => {
    if (currentImageIndex !== 0) {
      modalImage.src = images[--currentImageIndex].src;
    }

    updateModalNavigation(currentImageIndex);
  });

  closeBtn.addEventListener('click', (event) => {
    modal.classList.add('hidden');
  });

  modal.addEventListener('click', (event) => {
    if (
      event.target != modalImage &&
      event.target != nextBtn &&
      event.target != prevBtn
    ) {
      modal.classList.add('hidden');
    }
  });

  function updateModalNavigation(index) {
    prevBtn.disabled = false;
    nextBtn.disabled = false;

    if (index === 0) prevBtn.disabled = true;
    else if (index === 11) nextBtn.disabled = true;
  }
});
