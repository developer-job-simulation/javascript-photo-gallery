document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modalImage');
  const closeBtn = document.getElementById('closeBtn');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  const images = Array.from(document.querySelectorAll('.image'));
  let currentImageIndex = 0;
  let imageName;

  function disableNavBtnsOnEdges(index) {
    if (index === 0) prevBtn.disabled = true;
    else if (index === 11) nextBtn.disabled = true;
    else {
      prevBtn.disabled = false;
      nextBtn.disabled = false;
    }
  }

  images.forEach((image) =>
    image.addEventListener('click', (event) => {
      modal.classList.remove('hidden');
      modalImage.src = image.src;

      imageName = modalImage.src.slice(modalImage.src.lastIndexOf('/') + 1);

      let imageIndex = parseInt(imageName.replace(/[^0-9]/g, ''));

      if (!isNaN(imageIndex)) currentImageIndex = imageIndex;
      else currentImageIndex = 0;
      disableNavBtnsOnEdges(currentImageIndex);
    })
  );

  nextBtn.addEventListener('click', (event) => {
    imageName = modalImage.src.slice(modalImage.src.lastIndexOf('/') + 1);

    if (currentImageIndex !== 11) {
      let nextImageName = imageName.replace(/\d+/, (n) => ++n);

      if (!/\d/.test(imageName)) nextImageName = 'image-1.jpg';

      modalImage.src = '/public/' + nextImageName;
      currentImageIndex++;
    }

    disableNavBtnsOnEdges(currentImageIndex);
  });

  prevBtn.addEventListener('click', (event) => {
    imageName = modalImage.src.slice(modalImage.src.lastIndexOf('/') + 1);

    let prevImageName = 'image.jpg';

    if (currentImageIndex > 1) {
      prevImageName = imageName.replace(/\d+/, (n) => --n);
    }

    currentImageIndex--;
    modalImage.src = '/public/' + prevImageName;

    disableNavBtnsOnEdges(currentImageIndex);
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
});
