$(document).ready(function(){

    const owl = $('#offer-slider');
    owl.owlCarousel({
        items: 3
    });

    const prev = $('#sliderPrev');
    const next = $('#sliderNext');

    prev.click(function(){
        owl.trigger('prev.owl.carousel');
    })
    next.click(function(){
        owl.trigger('next.owl.carousel');
    })
  });