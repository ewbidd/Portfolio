const texts = ["Developer", "Tech Enthusiast", "Student"];
let count = 0;
let index = 0;
let isDeleting = false;
let currentText = "";
let letter = "";

(function type() {
  currentText = texts[count];
  
  if (isDeleting) {
    letter = currentText.slice(0, --index);
  } else {
    letter = currentText.slice(0, ++index);
  }

  document.getElementById("typed-text").innerHTML = `Hello, I'm a <span class="text-primary">${letter}</span>`;

  let delay = isDeleting ? 60 : 100;

  if (!isDeleting && letter.length === currentText.length) {
    isDeleting = true;
    delay = 1500;
  } else if (isDeleting && letter.length === 0) {
    isDeleting = false;
    count = (count + 1) % texts.length;
    delay = 500;
  }

  setTimeout(type, delay);
})();