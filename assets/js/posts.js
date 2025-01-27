document.addEventListener("DOMContentLoaded", function () {
  // Select the container and buttons dynamically based on the current post
  const container = document.querySelector(".container-img-posts");
  const btnLeft = document.querySelector(".btn-left");
  const btnRight = document.querySelector(".btn-right");

  // Get the images dynamically using a `data-images` attribute from the container
  const images = JSON.parse(container?.dataset.images || "[]");
  let currentIndex = 0; // Start with the first image
  const visibleImages = 3; // Number of images to show at once

  // Function to render images
  function renderImages() {
    if (!container) return;
    container.innerHTML = ""; // Clear existing images
    for (let i = 0; i < visibleImages; i++) {
      const img = document.createElement("img");
      img.className = "img-posts";
      img.src = images[(currentIndex + i) % images.length]; // Loop back to the start
      img.alt = `Image ${currentIndex + i + 1}`; // Optional: Add alt text
      container.appendChild(img);
    }
  }

  // Event listeners for buttons
  if (btnLeft) {
    btnLeft.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length; // Move left
      renderImages();
    });
  }

  if (btnRight) {
    btnRight.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % images.length; // Move right
      renderImages();
    });
  }

  // Initial render
  if (images.length > 0) {
    renderImages();
  } else {
    console.warn("No images found for this post.");
  }
// Select the button, section, summary button, and the second image
const button = document.querySelector('.details-text-posts');
const section = document.querySelector('.section-text-posts');
const summaryBtn = button.querySelector('.summary-btn'); // Target the element to rotate
const firstImage = document.querySelector('.img-posts:nth-of-type(2)'); // Correct selector for the second image

// Function to toggle the section and rotate the button
function toggleSection() {
  if (!section.classList.contains('visible')) {
    // Show the section and rotate the button
    section.classList.remove('hidden');
    section.classList.add('visible');
    section.style.display = 'block'; // Ensure it's visible for the animation
    summaryBtn.classList.add('rotate'); // Add the rotate class
  } else {
    // Hide the section and rotate the button back
    section.classList.remove('visible');
    section.classList.add('hidden');
    summaryBtn.classList.remove('rotate'); // Remove the rotate class
    section.addEventListener('animationend', () => {
      if (section.classList.contains('hidden')) {
        section.style.display = 'none';
      }
    }, { once: true });
  }
}

// Add event listener to the button
button.addEventListener('click', toggleSection);

// Add event listener to the second image
if (firstImage) {
  firstImage.addEventListener('click', toggleSection);
} else {
  console.error('Second image not found!');
}

});
