// This script loads the navbar and handles its functionalities

fetch("navbar.html")
  .then((response) => response.text())
  .then((htmlString) => {
    const navbarContainer = document.getElementById("navbar-placeholder");
    navbarContainer.innerHTML = htmlString;

    setTimeout(() => {
      // ✅ Bootstrap Dropdown Toggle Fix
      document.querySelectorAll('[data-bs-toggle="dropdown"]').forEach((el) => {
        el.addEventListener("click", function (e) {
          e.preventDefault();
          e.stopPropagation();
          const dropdown = bootstrap.Dropdown.getOrCreateInstance(this);
          dropdown.toggle();
        });
      });

      // ✅ Toggle navbar open/close (IMPORTANT)
      const toggler = document.querySelector(".navbar-toggler");
      const collapseEl = document.getElementById("navbarNav");

      if (toggler && collapseEl) {
        toggler.addEventListener("click", function () {
          const collapseInstance =
            bootstrap.Collapse.getOrCreateInstance(collapseEl);
          collapseInstance.toggle();
        });

        // ✅ Auto-close on nav-link click
        document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
          link.addEventListener("click", () => {
            const collapseInstance = bootstrap.Collapse.getInstance(collapseEl);
            if (collapseInstance && collapseEl.classList.contains("show")) {
              collapseInstance.hide();
            }
          });
        });
      }

      // ✅ Typewriter & Popup
      if (typeof initTypewriter === "function") initTypewriter();
      if (typeof showPopup === "function") showPopup();

      // ✅ Carousel
      const carouselEl = document.querySelector("#carouselExampleIndicators");
      if (carouselEl) {
        new bootstrap.Carousel(carouselEl, {
          interval: 4000,
          ride: "carousel",
          pause: false,
          wrap: true,
        });
      }
    }, 300); // Delay after HTML injected
  });

// This script handles the dropdown toggle and other functionalities for the navbar

setTimeout(() => {
  // ✅ Force Bootstrap Dropdown (in case auto-binding fails)
  document.querySelectorAll('[data-bs-toggle="dropdown"]').forEach((el) => {
    el.addEventListener("click", function (e) {
      e.preventDefault(); // prevent anchor default
      e.stopPropagation(); // stop bubbling to avoid double firing

      const dropdown = bootstrap.Dropdown.getOrCreateInstance(this);
      dropdown.toggle();
    });
  });

  // ✅ Typewriter & Popup
  if (typeof initTypewriter === "function") initTypewriter();
  if (typeof showPopup === "function") showPopup();

  // ✅ Carousel
  const carouselEl = document.querySelector("#carouselExampleIndicators");
  if (carouselEl) {
    new bootstrap.Carousel(carouselEl, {
      interval: 4000,
      ride: "carousel",
      pause: false,
      wrap: true,
    });
  }
}, 500);

// This script handles the typewriter effect for the text in the navbar.html file

const textArray = [
  "School is Inspiring Young India",
  "Empowering the Future with Knowledge",
  "Join Us to Make a Difference",
  "Learn. Grow. Succeed.",
];
let textIndex = 0;
let charIndex = 0;
const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetweenTexts = 1500;

function type() {
  const typewriter = document.getElementById("typewriter");
  if (!typewriter) return;
  if (charIndex < textArray[textIndex].length) {
    typewriter.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayBetweenTexts);
  }
}

function erase() {
  const typewriter = document.getElementById("typewriter");
  if (!typewriter) return;
  if (charIndex > 0) {
    typewriter.textContent = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    textIndex++;
    if (textIndex >= textArray.length) textIndex = 0;
    setTimeout(type, 500);
  }
}

function initTypewriter() {
  setTimeout(type, 1000);
}

function showPopup() {
  const popup = document.getElementById("popupModal");
  if (popup) popup.style.display = "block";
}

function closePopup() {
  const popup = document.getElementById("popupModal");
  if (popup) popup.style.display = "none";
}

// testimonial slider script for navbar.html file

function scrollSlider(direction) {
  const slider = document.getElementById("testimonialSlider");
  const card = slider.querySelector(".testimonial-card");
  const scrollAmount = card.offsetWidth + 20; // including gap
  slider.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
}



 // Add smooth scroll to opened item (optional)
 document.querySelectorAll('.accordion-button').forEach((btn) => {
  btn.addEventListener('click', function () {
    const targetId = btn.getAttribute('data-bs-target');
    const target = document.querySelector(targetId);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 300); // After animation completes
    }
  });
  
});








































// form.html script

fetch("form.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("form-container").innerHTML = data;
  });

// certification.html
fetch("certification.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("certification").innerHTML = data;
  });

// Gllery.html

fetch("gallery.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("gallery").innerHTML = data;
  });

// Testimonials.html

fetch("testimonials.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("testimonials").innerHTML = data;
  });

// News.html
fetch("news.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("news").innerHTML = data;
  });

// FAQ Section.html

fetch("faqsection.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("faqsection").innerHTML = data;
  });

// Load Footer.html
fetch("footer.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("footer-container").innerHTML = data;
  });
