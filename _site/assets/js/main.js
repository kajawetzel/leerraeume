document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const items = Array.from(carousel.children);
  
  // Clone items to create an illusion of infinity
  items.forEach((item) => {
    const clone = item.cloneNode(true);
    carousel.appendChild(clone); // Append clones to the end
  });

  items.forEach((item) => {
    const clone = item.cloneNode(true);
    carousel.insertBefore(clone, items[0]); // Prepend clones to the beginning
  });

});

document.addEventListener("DOMContentLoaded", () => {
  const imgLinks = document.querySelectorAll(".img-link");

  imgLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // Standard-Link-Verhalten verhindern

      const targetUrl = link.href; // Ziel-URL speichern
      const image = link.querySelector("img"); // Bild im Link finden

      // Animation hinzufügen
      image.classList.add("transition");

      // Nach der Animationsdauer zur Zielseite navigieren
      setTimeout(() => {
        window.location.href = targetUrl;
      }, 800); // Animationsdauer: 0.8s
    });
  });
});

