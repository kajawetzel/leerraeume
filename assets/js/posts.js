document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container-img-posts");
  const btnLeft = document.querySelector(".btn-left");
  const btnRight = document.querySelector(".btn-right");

  let images = JSON.parse(container?.dataset.images || "[]");

  // Find and store the text-slide div (before it's removed)
  const textSlide = document.querySelector(".text-slide");
  images.splice(1, 0, "text-slide"); // Insert placeholder at index 1

  let currentIndex = 0;
  const visibleImages = 3;

  function renderImages() {
    if (!container) return;
    container.innerHTML = ""; // Clear everything

    for (let i = 0; i < visibleImages; i++) {
      const currentItem = images[(currentIndex + i) % images.length];

      if (currentItem === "text-slide") {
        // Clone textSlide so it's not lost from the DOM
        const textDivClone = textSlide.cloneNode(true);
        container.appendChild(textDivClone);
      } else {
        const img = document.createElement("img");
        img.className = "img-posts";
        img.src = currentItem;
        img.alt = "Galeriebild";
        container.appendChild(img);
      }
    }
  }

  if (btnLeft) {
    btnLeft.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      renderImages();
    });
  }

  if (btnRight) {
    btnRight.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % images.length;
      renderImages();
    });
  }

  if (images.length > 0) {
    renderImages();
  } else {
    console.warn("No images found for this post.");
  }
});
