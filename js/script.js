let posicao = 1;
showSlides(posicao);

function currentSlide(n) {
  showSlides((posicao = n));
}
function showSlides(n) {
  let slides = document.getElementsByClassName("slideshow-slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    posicao = 1;
  }
  if (n < 1) {
    posicao = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[posicao - 1].style.display = "block";
  dots[posicao - 1].className += " active";
}
