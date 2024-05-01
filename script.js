var bee = document.getElementById("followingBee");
var offsetX = 20;
var offsetY = 20;

document.addEventListener("mousemove", function (e) {
  var mouseX = e.clientX;
  var mouseY = e.clientY;

  bee.style.transform =
    "translate(" + (mouseX + offsetX) + "px, " + (mouseY + offsetY) + "px)";
});

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.15, //Animation starts when 30% of the element is visible.
};

//Animates elements on scroll.
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
    } else {
      entry.target.classList.remove("is-visible");
    }
  });
}, options);

// "Observes" the class of the element to see which animation to apply.
function observeElements(elements) {
  elements.forEach((element) => {
    observer.observe(element);
  });
}

// Observe sections: smooth transition for each section
const fadeIn = document.querySelectorAll(".fade-in");
observeElements(fadeIn);

const up = document.querySelectorAll(".up");
observeElements(up);
