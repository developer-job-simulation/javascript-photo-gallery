document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modalImage");
    const closeBtn = document.getElementById("closeBtn");

    document.querySelectorAll(".image").forEach((image) => {
        image.addEventListener("click", () => {
            modalImage.src = image.src;
            modal.classList.remove("hidden");
        });
    });

    closeBtn.addEventListener("click", () => {
        modal.classList.add("hidden");
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.classList.add("hidden");
        }
    });
});

