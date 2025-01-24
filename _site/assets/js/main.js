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
  // Animation für img-links
  const imgLinks = document.querySelectorAll(".img-link");

  imgLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // Standard-Link-Verhalten verhindern

      const targetUrl = link.getAttribute("href"); // Ziel-URL speichern
      const image = link.querySelector("img"); // Bild im Link finden

      // Animation hinzufügen
      image.classList.add("transition");

      // Nach der Animationsdauer zur Zielseite navigieren
      setTimeout(() => {
        if (targetUrl) {
          window.location.href = targetUrl;
        } else {
          console.error("Fehler: Ziel-URL konnte nicht gelesen werden.");
        }
      }, 800);
    });
  });

  // Animation für link-submit
  const submitButton = document.querySelector(".link-submit");

  if (submitButton) {
    submitButton.addEventListener("click", (e) => {
      e.preventDefault(); // Standard-Submit verhindern

      // Ziel-URL aus dem Button-Link lesen
      const targetUrl = submitButton.href || submitButton.getAttribute("href");

      // Menü finden und Animation hinzufügen
      const menu = document.querySelector(".menu");
      if (menu) {
        menu.classList.add("move-up"); // Klasse für Animation hinzufügen
      }

      const animationDuration = 1000; 
      setTimeout(() => {
        if (targetUrl) {
          window.location.href = targetUrl;
        } else {
          console.error("Fehler: Ziel-URL konnte nicht gelesen werden.");
        }
      }, animationDuration);
    });
  }
});
