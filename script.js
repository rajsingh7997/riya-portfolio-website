// Typing Effect
const roles = ["Software Developer", "Python Programmer", "Frontend Developer", "Tech Enthusiast"];
let typingIndex = 0, charIndex = 0;
const typingElement = document.getElementById("typing");

function type() {
  if (charIndex < roles[typingIndex].length) {
    typingElement.textContent += roles[typingIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    typingElement.textContent = roles[typingIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 60);
  } else {
    typingIndex = (typingIndex + 1) % roles.length;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, 1000);
});

// Back to Top

  // Show button when page is scrolled down
  window.onscroll = function () {
    const backToTop = document.getElementById("backToTop");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  };

  // Scroll smoothly to top
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }