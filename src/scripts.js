document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modalImage");
  const closeBtn = document.getElementById("closeBtn");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  const images = Array.from(document.querySelectorAll(".image"));
  let currentImageIndex = 0;


  // TODO: (Issue #1) Add an event listener for each image in the gallery to show it in the modal when clicked
  images.forEach(
    element=>{
      element.addEventListener("click", (e)=>{

        modal.classList.remove("hidden");
        modalImage.src = e.currentTarget.src;
        images.forEach(
          (element, index)=>{
            if(element.src == e.currentTarget.src)
              {
                currentImageIndex = index;
              }
          }
        );

        if(currentImageIndex==0){
          nextBtn.disabled = false;
          prevBtn.disabled = true;
        }

        if(currentImageIndex==11){

          nextBtn.disabled = true;
          prevBtn.disabled = false;
        }
      } )
    }
  );


  // TODO: (Issue #2) Add event listeners for the prevBtn and nextBtn for modal navigation functionality
  // Clean Code Hint: Issue #1 and #2 both deal with updating the modal image based on currentImageIndex. Consider creating a function to handle this functionality.
  nextBtn.addEventListener("click", (e)=>{

    prevBtn.disabled = false;

    currentImageIndex = (currentImageIndex + 1) % 12;
    modalImage.src = images[currentImageIndex].src;
  
    if(currentImageIndex==11)
      nextBtn.disabled = true;

  } );

  prevBtn.addEventListener("click",(e)=>{

    nextBtn.disabled = false; 

    currentImageIndex = (currentImageIndex - 1 + 12 ) % 12;
    modalImage.src = images[currentImageIndex].src;

    if(currentImageIndex==0)
      prevBtn.disabled = true;
          
  } );


  // TODO: (Issue #3) Add an event listener for the closeBtn to close the modal
  closeBtn.addEventListener("click",(e)=>{
    modal.classList.add("hidden");
    modalImage.src = "";
  });

  // TODO: (Issue #3) Add an event listener to close the modal when clicking the modal background
  modal.addEventListener("click",(e)=>{
    if(e.target!=modalImage && e.target!= prevBtn && e.target !=nextBtn && e.target !=closeBtn){
      modal.classList.add("hidden");
      modalImage.src = "";  
    }
  });

  // TODO: (Issue #4) Create a function to update the state of the navigation buttons based on currentImageIndex


});
