if ($(window).width() < 790) {
  $(".vantagens").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    dots: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          dots: false,
          infinite: true
        }
      }
    ]
  });
}

$(".clientes-slideshow").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 5,
  prevArrow:
    '<div class="slide-arrow prev-arrow"><i class="icon-prev"></i></div>',
  nextArrow:
    '<div class="slide-arrow next-arrow slick-disabled"><i class="icon-next"></i></div>',
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        arrows: false,
        dots: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        arrows: false,
        dots: false
      }
    }
  ]
});
