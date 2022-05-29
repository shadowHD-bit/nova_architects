$(document).ready(function(){

  let infos = {
    1: {
      title: 'Project 1',
      text: 'Hey, take a look at the earthlings. Goodbye! Forget the fat lady! Youre obsessed with the fat lady!',
    },
    2: {
      title: 'Project 2',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore ipsum libero voluptatem numquam. Quaerat fugiat, maiores id eius excepturi quod ipsam incidunt a. Tempore officiis est autem officia dolor aliquam.',
    },
    3: {
      title: 'Project 3',
      text: 'Hey, take a look at the earthlings. Goodbye! Forget the fat lady! Youre obsessed with the fat lady!',
    },
  }


  let $slider = $('.slider');
  let title = document.querySelector('#title')
  let text = document.querySelector('#text')

  $(title).text(infos[1].title);
  $(text).text(infos[1].text);

  $('.slider').slick({
    draggable: true,
    fade: true,
    speed: 900,
    infinite: true,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    touchThreshold: 100,
    nextArrow: document.querySelector('#next'),
    prevArrow: document.querySelector('#prev')
  })
  

  let updateSliderCounter = function(slick, currentIndex, nextSlide) {
    let current = slick.slickCurrentSlide() + 1;
    let next = nextSlide + 1;
    let allSlides = slick.slideCount;

    $(title).text(infos[next].title);
    $(text).text(infos[next].text);
  };
  $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    updateSliderCounter(slick, currentSlide, nextSlide);

  });
});


$('.fade_slider').slick({
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  nextArrow: document.querySelector('#nextt'),
  prevArrow: document.querySelector('#prevv')
});
	