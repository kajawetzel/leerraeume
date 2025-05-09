document.addEventListener("DOMContentLoaded", function () {
  // Unendliches Carousel
  const carousel = document.querySelector(".carousel");
  if (carousel) {
    const items = Array.from(carousel.children);

    // Klone erstellen, um einen unendlichen Effekt zu erzeugen
    items.forEach((item) => {
      const clone = item.cloneNode(true);
      carousel.appendChild(clone); // Klone ans Ende
      carousel.offsetHeight; // Force reflow
    });

    items.forEach((item) => {
      const clone = item.cloneNode(true);
      carousel.insertBefore(clone, items[0]); // Klone an den Anfang
    });
  }
  carousel.offsetHeight;

  // Animation für img-links
  const imgLinks = document.querySelectorAll(".img-link");
  imgLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // Standard-Link-Verhalten verhindern

      const targetUrl = link.getAttribute("href"); // Ziel-URL speichern
      const image = link.querySelector("img"); // Bild im Link finden

      if (image) {
        // Animation hinzufügen
        image.classList.add("transition");

        // Nach der Animationsdauer zur Zielseite navigieren
        setTimeout(() => {
          if (targetUrl) {
            window.location.href = targetUrl;
          } else {
            console.error("Fehler: Ziel-URL konnte nicht gelesen werden.");
          }
        }, 800); // Dauer entsprechend der CSS-Animation
      }
    });
  });

  // Animation für Menü-Button
  const linkSubmit = document.querySelector(".link-submit");
  if (linkSubmit) {
    linkSubmit.addEventListener("click", (e) => {
      e.preventDefault(); // Standard-Submit verhindern

      const targetUrl = linkSubmit.href || linkSubmit.getAttribute("href");
      const menu = document.querySelector(".menu");

      if (menu) {
        menu.classList.add("move-up"); // Klasse für Animation hinzufügen
      }

      const animationDuration = 1000; // Dauer entsprechend der CSS-Animation
      setTimeout(() => {
        if (targetUrl) {
          window.location.href = targetUrl;
        } else {
          console.error("Fehler: Ziel-URL konnte nicht gelesen werden.");
        }
      }, animationDuration);
    });
  }

  // Animation für den Submit-Button im Formular
  const submitButton = document.querySelector(".btn-submit-1"); // Der Button für den Container
  if (submitButton) {
    submitButton.addEventListener("click", (e) => {
      e.preventDefault(); // Standard-Submit verhindern

      const form = submitButton.closest("form");
      const targetUrl = form ? form.getAttribute("action") : null; // Ziel-URL aus dem Formular
      const containerSubmission = document.querySelector(".container-submission");

      if (containerSubmission) {
        containerSubmission.classList.add("move-up-submission"); // Klasse für die Animation hinzufügen
      }

      // Nach der Animationsdauer zur Zielseite navigieren
      setTimeout(() => {
        if (targetUrl) {
          window.location.href = targetUrl;
        } else {
          console.error("Fehler: Ziel-URL konnte nicht gelesen werden.");
        }
      }, 1000); // Verzögerung entsprechend der CSS-Animation
    });
  }

console.log("Forcing repaint");
document.body.style.transform = "translateZ(0)"; // Trick: CSS Hack für Chrome

});

