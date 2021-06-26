'use strict'
//sliders
$('.main__slider').slick({
  infinite: false,
  slidesToScroll: 1,
  slidesToShow: 2.2,
  arrows: false,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 448,
      settings:{
        slidesToShow: 2.2,
      }
    },
    {
      breakpoint: 400,
      settings:{
        slidesToShow: 1.5,
      }
    },
    {
      breakpoint: 320,
      settings:{
        slidesToShow: 1.8,
      }
    },
  ]
});
$('.popular__slider').slick({
  infinite: false,
  slidesToScroll: 1,
  slidesToShow: 2.4,
  arrows: false,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 320,
      settings:{
        slidesToShow: 1.4,
      }
    },
    {
      breakpoint: 370,
      settings:{
        slidesToShow: 1.6,
      }
    },
    {
      breakpoint: 400,
      settings:{
        slidesToShow: 1.8,
      }
    },
    {
      breakpoint: 450,
      settings:{
        slidesToShow: 2.1,
      }
    },
    {
      breakpoint: 550,
      settings:{
        slidesToShow: 2.5,
      }
    },
  ]
});