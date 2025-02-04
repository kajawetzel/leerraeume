document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container-img-posts");
  const btnLeft = document.querySelector(".btn-left");
  const btnRight = document.querySelector(".btn-right");

  let images = JSON.parse(container?.dataset.images || "[]");

  // Store the text-slide and add it to the end of the array
  const textSlide = document.querySelector(".text-slide");
  textSlide.classList.add("img-posts"); // Make sure it has the same class as images
  images.push("text-slide"); // Insert the text-slide at the end

  let currentIndex = 0;
  const visibleImages = 3;

  function renderImages() {
    if (!container) return;
    container.innerHTML = ""; // Clear previous items

    for (let i = 0; i < visibleImages; i++) {
      const currentItem = images[(currentIndex + i) % images.length];

      if (currentItem === "text-slide") {
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

    applyNthChildStyles();
  }

  function applyNthChildStyles() {
    const items = container.querySelectorAll(".img-posts");
    items.forEach((item, index) => {
      item.style.display = index >= 3 ? "none" : "block"; // Only show first 3 items
    });
  }

  btnLeft.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    renderImages();
  });

  btnRight.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    renderImages();
  });

  if (images.length > 0) {
    renderImages();
  } else {
    console.warn("No images found for this post.");
  }
});
