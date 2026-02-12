const startDate = new Date(Date.UTC(2025, 3, 17)); // Fecha de inicio de la relación, 3 es el índice de abril (0-basado)
const today = new Date();

const diffTime = Math.abs(today - startDate);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

document.getElementById("days").innerText = diffDays;
document.getElementById("start-date-display").innerText = startDate.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

const heartsContainer = document.querySelector('.hearts');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = Math.random() * 2 + 3 + 's';
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 300);

// Splash Screen Logic
const SECRET_KEYWORD = "amor"; // You can change this keyword

const splashScreen = document.getElementById("splash-screen");
const mainContent = document.getElementById("main-content");
const keywordInput = document.getElementById("keyword-input");
const enterButton = document.getElementById("enter-button");
const errorMessage = document.getElementById("error-message");

function enterWebsite() {
  const enteredKeyword = keywordInput.value.toLowerCase();

  if (enteredKeyword === SECRET_KEYWORD) {
    splashScreen.classList.add("fade-out"); // Trigger CSS fade-out
    setTimeout(() => {
      splashScreen.style.display = "none";
      mainContent.style.display = "block"; // Show main content
    }, 500); // Match CSS transition duration
  } else {
    errorMessage.textContent = "Palabra secreta incorrecta. Intenta de nuevo.";
    errorMessage.style.display = "block";
    keywordInput.value = ""; // Clear input
    setTimeout(() => {
      errorMessage.style.display = "none";
    }, 3000); // Hide error message after 3 seconds
  }
}

// Event listeners
enterButton.addEventListener("click", enterWebsite);

keywordInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    enterWebsite();
  }
});

// Intersection Observer for scroll animations
const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

const observerOptions = {
  root: null, // viewport
  rootMargin: '0px',
  threshold: 0.1 // Trigger when 10% of the element is visible
};

const observerCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target); // Stop observing once visible
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

elementsToAnimate.forEach(element => {
  observer.observe(element);
});

// Swiper Initialization
var swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 4000, // 4 seconds
    disableOnInteraction: false,
  },
  effect: "fade", // Add a fade effect for smoother transitions
  fadeEffect: {
    crossFade: true,
  },
});