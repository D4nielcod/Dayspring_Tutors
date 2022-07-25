const topBtnEl = document.getElementById("my-top");
const navBarEl = document.getElementById("nav-bar");
const barEl = document.getElementById("bar-el");
const quotes = document.getElementsByClassName("myQuote");
const slides = document.getElementsByClassName("mySlides");

// NAVIGATION BAR - MOBILE VIEW
barEl.addEventListener("click", function () {
  if (navBarEl.id === "nav-bar") {
    navBarEl.id = "responsive";
  } else {
    navBarEl.id = "nav-bar";
  }
});

// GO-tO-TOP BUTTON
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 150 ||
    document.documentElement.scrollTop > 150
  ) {
    topBtnEl.style.display = "block";
  } else {
    topBtnEl.style.display = "none";
  }
}

topBtnEl.addEventListener("click", function () {
  if (navBarEl.id === "responsive") {
    navBarEl.id = "nav-bar";
  }
});

// Educational Quotes
let quoteIndex = 0;
showQuote();
function showQuote() {
  for (let i = 0; i < quotes.length; i++) {
    quotes[i].style.display = "none";
  }
  quoteIndex++;
  if (quoteIndex > quotes.length) {
    quoteIndex = 1;
  }
  quotes[quoteIndex - 1].style.display = "block";
  setTimeout(showQuote, 7000);
}

// Testimony Slide
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

// Sign up request
let signUpBlock = document.getElementById("sign-up-el");
const cancelBtnLeft = document.getElementById("cancel-btn-left");
const cancelBtnRight = document.getElementById("cancel-btn-right");
const cancelBlock = document.getElementById("cancel-block");

let transfromProperty = (signUpBlock.style.transform = "translateX(90%)");
cancelBlock.addEventListener("click", function () {
  if (transfromProperty === "translateX(90%)") {
    signUpBlock.style.transform = "translateX(0)";
    signUpBlock.style.transition = "all 0.3s";
    cancelBtnLeft.style.display = "none";
    cancelBtnRight.style.display = "block";
    transfromProperty = signUpBlock.style.transform = "translateX(0)";
  } else if (transfromProperty === "translateX(0)") {
    signUpBlock.style.transform = "translateX(90%)";
    signUpBlock.style.transition = "all 0.3s";
    cancelBtnLeft.style.display = "block";
    cancelBtnRight.style.display = "none";
    transfromProperty = signUpBlock.style.transform = "translateX(90%)";
  }
});
