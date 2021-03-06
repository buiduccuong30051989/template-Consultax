$(document).ready(function(){
  "use strict";
  $('.js-testimonial-main-home04').not('.slick-initialized').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.js-testimonial-thumbs-home04'
  });
  $('.js-testimonial-thumbs-home04').not('.slick-initialized').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.js-testimonial-main-home04',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  });
});
