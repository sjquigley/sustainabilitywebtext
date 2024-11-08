var bee = document.getElementById("followingBee");
var offsetX = 20;
var offsetY = 20;
let isBeeEnabled = true;

// Create and insert toggle switch
const toggleContainer = document.createElement("div");
toggleContainer.className = "toggle-container";

const toggleLabel = document.createElement("label");
toggleLabel.className = "toggle-label";

const toggleInput = document.createElement("input");
toggleInput.type = "checkbox";
toggleInput.checked = true;

const toggleSwitch = document.createElement("span");
toggleSwitch.className = "toggle-switch";

const toggleText = document.createElement("span");
toggleText.className = "toggle-text";
toggleText.textContent = "Bee Cursor";

toggleLabel.appendChild(toggleInput);
toggleLabel.appendChild(toggleSwitch);
toggleLabel.appendChild(toggleText);
toggleContainer.appendChild(toggleLabel);

// Insert toggle after hero section
const heroSection = document.querySelector(".hero-image");
heroSection.parentNode.insertBefore(toggleContainer, heroSection.nextSibling);

// Hide bee cursor initially until after hero section
let hasPassedHero = false;
const heroObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
        hasPassedHero = true;
        if (isBeeEnabled) {
          bee.style.display = "block";
        }
      } else {
        hasPassedHero = false;
        bee.style.display = "none";
      }
    });
  },
  { threshold: 0 }
);

heroObserver.observe(heroSection);

// Toggle bee cursor
toggleInput.addEventListener("change", function () {
  isBeeEnabled = this.checked;
  bee.style.display = isBeeEnabled && hasPassedHero ? "block" : "none";
});

// Update bee position
document.addEventListener("mousemove", function (e) {
  if (isBeeEnabled && hasPassedHero) {
    var mouseX = e.clientX;
    var mouseY = e.clientY;
    bee.style.transform =
      "translate(" + (mouseX + offsetX) + "px, " + (mouseY + offsetY) + "px)";
  }
});

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.15,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
    } else {
      entry.target.classList.remove("is-visible");
    }
  });
}, options);

function observeElements(elements) {
  elements.forEach((element) => {
    observer.observe(element);
  });
}

const fadeIn = document.querySelectorAll(".fade-in");
observeElements(fadeIn);

const up = document.querySelectorAll(".up");
observeElements(up);

const hamburgerMenu = document.querySelector(".hamburger-menu");
const sidebar = document.querySelector(".sidebar");

hamburgerMenu.addEventListener("click", function () {
  sidebar.classList.toggle("active");
});
