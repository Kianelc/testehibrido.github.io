let posicao = 0;
function showSlides() {
  let slides = document.getElementsByClassName("slideshow-slide");
  let dots = document.getElementsByClassName("dot");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  posicao++;
  if (posicao > slides.length) {
    posicao = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[posicao - 1].style.display = "block";
  dots[posicao - 1].className += " active";
  setTimeout(showSlides, 2000);
}
showSlides();
