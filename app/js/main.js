$ (function(){
   
  $('.reviews__inner').slick({
    dots: true,
    responsive: [{
      breakpoint: 576,
      settings: {
        dots: false,
      }
    }]
  });

});





if (window.matchMedia("(min-width: 375px)").matches) {

  $('.restaurants-item').slick('unslick');
    sliderIslive = false;

} else {

  $('.restaurants-item').slick({
    arrows: false,
    fade: true,
    dots: true
  });
  sliderIslive = true;
};