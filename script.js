let slideIndex = 1;
let autoSlideInterval = null;

// Elementele din DOM
const sectiune = document.getElementById("monitorizare-sectiune");
const slideshow = document.getElementById("slideshow-container");
const dotsContainer = document.getElementById("dots-container");
const instructiune = document.getElementById("instructiune");

// 1. Funcția pentru schimbarea manuală a slide-urilor
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

// 2. Funcția principală de afișare
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    // Ascundem toate slide-urile
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // Dezactivăm toate bulinele
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Afișăm slide-ul curent și activăm bulina corespunzătoare
    if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].style.display = "block";
    }
    if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].className += " active";
    }
}

// 3. LOGICA PENTRU DUBLE CLICK ȘI AUTOMATIZARE (3 SECUNDE)
sectiune.addEventListener("dblclick", function() {
    // Afișăm elementele slideshow-ului
    slideshow.style.display = "block";
    dotsContainer.style.display = "block";
    
    // Ascundem instrucțiunea text
    instructiune.style.display = "none";

    // Inițializăm primul slide
    showSlides(slideIndex);

    // Pornim intervalul de 3 secunde (3000 ms) dacă nu este deja pornit
    if (!autoSlideInterval) {
        autoSlideInterval = setInterval(function() {
            plusSlides(1);
        }, 3000);
        console.log("Slideshow pornit automat la interval de 3 secunde.");
    }
});